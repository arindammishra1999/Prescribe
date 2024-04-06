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
    export VAULT_DEV_ROOT_TOKEN_ID=<root-token>
   ```
   Replace `<temporary-password>` and `<root-token>` with your desired values.

   __Please note:__ The temporary password for the root user is temporary, once vault is fully configured,
   the password will be rotated and the temporary password will no longer be valid. You will need to use
   the dynamic credentials generated by vault to access the database.

2. Bring up all the services using `docker compose`:
    ```bash
    docker compose up -d
    ```

3. Exec into the vault container to set up the database secrets engine:
    ```bash
    docker exec -it deployment-vault-1 /bin/sh
    ```
4. Login to vault using the root token:
    ```shell
    vault login <root-token>
    ```

5. Enable the database secrets engine:
    ```shell
    vault secrets enable database
    ```

6. Configure the database connection details:
    ```shell
    vault write database/config/prescribe \
    plugin_name=postgresql-database-plugin \
    allowed_roles="db-admin" \
    connection_url="postgresql://{{username}}:{{password}}@database:5432/postgres?sslmode=disable" \
    username=root \
    password=<temporary-password>
    ```

7. Rotate the root password:
    ```shell
    vault write -force database/rotate-root/prescribe

8. Create the db-admin role for the database:
    ```shell
    vault write database/roles/db-admin \
    db_name=prescribe \
    creation_statements="CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; \
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO \"{{name}}\";" \
    default_ttl="1h" \
    max_ttl="24h"
    ```
9. Run the following command to verify that the database secrets engine is configured correctly:
    ```shell
    vault read database/creds/db-admin
    ```
   You should see the credentials for the database. You can login to the database using the new credentials.

10. You can test the dynamic credentials by logging into the database using the following command:
     ```bash
     docker exec -it deployment-database-1 psql -U <dynamic-username> -W -d prescribe
     ```

11. You should not use the root token for any other operations. Instead, create a new token with the required policies
    and use that token for all operations.

## Database Schema Initialization and Seed Data

1. Running `docker compose up -d` will automatically run the database schema initialization and seed data scripts
   through the `docker-entrypoint-initdb.d` directory in the `database` image. Please refer to the `Dockerfile`
   in `./database` for more information.

__Please Note__: The database schema initialization and seed data scripts are run using `init.sql` and `seed.sql`
which can be found in the `./database` directory. If you need to make any changes to the schema or seed data, please
make the changes in the `init.sql` and `seed.sql` files and then run `docker compose up -d` to apply the changes.
All `argon2` hashes in the seed data resolve to the plaintext `password`, including the QR code hashes.
You must use the required `argon2` library in `./backend/services/user/package.json` to verify hashes.