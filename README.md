# SENG513-202401-GROUP-2

## Contributors

- Saud Agha
- Azlan Amjad
- Rohan Amjad
- Sajid Hafiz
- Arindam Mishra

# Project Setup

The following instructions will guide you through the process of setting up your development environment to run the
project.
This project uses HashiCorp Vault to store secrets and dynamic database credentials.
This project requires you to have `docker` and `docker compose` installed on your host machine.

## Initial Dev Environment Setup

You will need to install the node modules for the frontend and backend services before spinning up the containers. This
is specific to the development environment and is not required for the production environment. In production, docker will
automatically install the node modules in the docker images. By default running `docker compose up -d` will spin up development
containers.

Run the following command in the `frontend/app`, `backend/services/user`, and `backend/services/prescription`
directories.

```bash
npm install
```

## Setting up HashiCorp Vault and the PostgreSQL Database

1. Before you start, please set the following environment variables in your shell:
    ```bash
    export POSTGRES_PASSWORD=<temporary-password>
    ```
   Replace `<temporary-password>` with your desired values.

   __Please note:__ The temporary password for the root user is temporary, once Vault is fully configured,
   the password will be rotated and the temporary password will no longer be valid. You will need to use
   the dynamic credentials generated by Vault to access the database.

2. Bring up the database and Vault services using `docker compose` from the `deployment` directory:

    __Note:__ Ignore any warnings.

    ```bash
    docker compose up -d database vault
    ```

3. Exec into the Vault container to unseal and setup Vault:
    ```bash
    docker exec -it deployment-vault-1 /bin/sh
    ```

4. Initialize Vault:
    ```shell
    vault operator init
    ```

5. Vault will present you with a set of unseal keys and an initial root token. Please save these keys and the initial
   root token to a local file, you will need them to unseal Vault every time you restart the container (do not share or
   commit these keys to the git repository).

6. Unseal Vault using the following command and the unseal keys from step 5 (This command must be ran three times total):
    ```shell
    vault operator unseal
    ```
   __Please Note:__ You will need to unseal Vault at least 3 times and pass in 3 separate keys until
   the `Unseal Progress` is complete.

7. Login to Vault using the following command and the initial root token from step 5:
   ```shell
   vault login
   ```

8. Enable the database secrets engine:
    ```shell
    vault secrets enable database
    ```

9. Configure the database connection details, replace `<temporary-password>` with the password you set in step 1:
    ```shell
    vault write database/config/prescribe \
    plugin_name="postgresql-database-plugin" \
    allowed_roles="db-admin" \
    connection_url="postgresql://{{username}}:{{password}}@database:5432/prescribe?sslmode=disable" \
    username=root \
    password=<temporary-postgres-password>
    ```

10. Rotate the root password:
    ```shell
    vault write -force database/rotate-root/prescribe
    ```

11. Create the db-admin role for the database:
     ```shell
     vault write database/roles/db-admin \
     db_name="prescribe" \
     creation_statements="CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; \
        GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO \"{{name}}\"; \
        GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO \"{{name}}\";" \
     default_ttl="30s" \
     max_ttl="60s"
     ```
12. Run the following command to verify that the database secrets engine is configured correctly:
     ```shell
     vault read database/creds/db-admin
     ```
    You should see the credentials for the database. You can login to the database using the new credentials.

13. (OPTIONAL) You can test the dynamic credentials by logging into the database using the following command:
     ```bash
     docker exec -it deployment-database-1 psql -U <dynamic-username> -W -d prescribe
     ```

14. You should not use the root token for any other operations. Instead, create a new token with the required policies
    and use that token for all operations.

## Set up the JWT (JSON Web Token) public and private key pair

The backend services will use these pair of keys to sign and validate all JWTs.
Use the following commands to generate a pair of public and private keys in the `backend/services` directory.

__Please Note:__ You will need the `openssl` package installed on your host machine to execute the following commands.

1. Generate an RSA private key (do not share this key with anyone or commit it to the git repository):
   ```bash
   openssl genrsa -out private.key 2048
   ```

2. Generate an associated RSA public key (you can share this key):
   ```bash
   openssl rsa -in private.key -pubout -outform PEM -out public.key
   ```

3. Exec into the Vault container to save the keys in Vault:
    ```bash
    docker exec -it deployment-vault-1 /bin/sh
    ```

4. Enable the KV secrets engine:
    ```shell
    vault secrets enable -version=2 kv
    ```

5. Save the private key in Vault, ensure that you paste the new line characters as well:
    ```shell
    vault kv put -mount=kv jwt-rsa-private private_key="<Paste the contents of private.key here>"
    ```
   __Please Note:__ You must copy the contents of the `private.key` file __EXACTLY__ as they are, including all headers,
   footers, and new line characters.

6. Save the public key in Vault, ensure that you paste the new line characters as well:
    ```shell
    vault kv put -mount=kv jwt-rsa-public public_key="<Paste the contents of public.key here>"
    ```
   __Please Note:__ You must copy the contents of the `public.key` file __EXACTLY__ as they are, including all headers,
   footers, and new line characters.

7. Verify that the private key has been saved correctly in Vault:
    ```shell
    vault kv get -mount=kv jwt-rsa-private
    ```

8. Verify that the public key has been saved correctly in Vault:
    ```shell
    vault kv get -mount=kv jwt-rsa-public
    ```

## Create policies and an AppRole in Vault

The AppRole will be used by our backend services to authenticate with Vault, the AppRole will be assigned the policies
that we create next.

1. Exec into the Vault container to create the policies and AppRole:
    ```bash
    docker exec -it deployment-vault-1 /bin/sh
    ```

2. Create the policies that are required for the AppRole:
   ```shell
   vault policy write database-creds-policy /vault/policies/database-creds-policy.hcl
   ```
   ```shell
   vault policy write jwt-rsa-private-policy /vault/policies/jwt-rsa-private-policy.hcl
   ```
   ```shell
   vault policy write jwt-rsa-public-policy /vault/policies/jwt-rsa-public-policy.hcl
   ```

3. Enable the AppRole authentication method for Vault:
   ```shell
   vault auth enable approle
   ```

4. Create the AppRole:
   ```shell
   vault write auth/approle/role/prescribe-app-role \
       policies="default,database-creds-policy,jwt-rsa-private-policy,jwt-rsa-public-policy" \
       token_ttl="60s" \
       token_max_ttl="120s"
   ```

5. Get the Role Id and save it a local file (do not commit this file to the git repository):
   ```shell
   vault read auth/approle/role/prescribe-app-role/role-id
   ```

6. Get the Secret Id and save it a local file (do not commit this file to the git repository):
   ```shell
   vault write -f auth/approle/role/prescribe-app-role/secret-id
   ```
![Role & Secret IDs](tut_1.png?raw=true "Role & Secret IDs")

7. Set the Role Id and Secret Id environment variables on your host machine:
   ```bash
   export ROLE_ID=<role_id>
   export SECRET_ID=<secret_id>
   ```

## You are ready to begin

You can now start the application using `docker compose` from the `deployment` directory:

```bash
docker compose up -d
```
You can access the webpage at localhost:3002 by entering it in your web browser. 

## Database Schema Initialization and Seed Data

1. Running `docker compose up -d` will automatically run the database schema initialization and seed data scripts
   through the `docker-entrypoint-initdb.d` directory in the `database` image. Please refer to the `Dockerfile`
   in `./database` for more information.

__Please Note__: The database schema initialization and seed data scripts are run using `init.sql` and `seed.sql`
which can be found in the `./database` directory. If you need to make any changes to the schema or seed data, please
make the changes in the `init.sql` and `seed.sql` files and then run `docker compose up -d` to apply the changes.
All `argon2` hashes in the seed data resolve to the plaintext `password`, including the QR code hashes.
You must use the required `argon2` library in `./backend/services/user/package.json` to verify hashes.

## Some App screenshots

<div style="display: flex;">
  <img src="App%20photos/1.png" alt="App Photo 1" style="width: 300px; height: 500px; margin-right: 20px;">
  <img src="App%20photos/2.png" alt="App Photo 2" style="width: 300px; height: 500px; margin-right: 20px;">
  <img src="App%20photos/3.png" alt="App Photo 3" style="width: 300px; height: 500px;">
    <img src="App%20photos/4.png" alt="App Photo 4" style="width: 300px; height: 500px; margin-right: 20px;">
  <img src="App%20photos/5.png" alt="App Photo 5" style="width: 300px; height: 500px; margin-right: 20px;">
  <img src="App%20photos/6.png" alt="App Photo 6" style="width: 300px; height: 500px;">
      <img src="App%20photos/7.png" alt="App Photo 3" style="width: 300px; height: 500px;">
    <img src="App%20photos/8.png" alt="App Photo 4" style="width: 300px; margin-right: 20px; height: 500px;">
  <img src="App%20photos/9.png" alt="App Photo 5" style="width: 300px; margin-right: 20px; height: 500px;">
  <img src="App%20photos/10.png" alt="App Photo 6" style="width: 300px; height: 500px;">
</div>
