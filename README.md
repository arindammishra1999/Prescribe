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
This project requires you to have `docker` and `docker-compose` installed on your host machine.

## Setting up HashiCorp Vault and the PostgreSQL Database

1. Before you start, please set the following environment variables in your shell:
    ```bash
    export POSTGRES_USER=<temporary-username>
    export POSTGRES_PASSWORD=<temporary-password>
    export VAULT_DEV_ROOT_TOKEN_ID=<root-token>
   ```
   Replace `<temporary-username>`, `<temporary-password>`, and `<root-token>` with your desired values.

   __Please note:__ The PostgreSQL username and password is temporary, once vault is setup and running, vault will
   generate dynamic credentials for the database. You will not be able to use these credentials again.

2. Bring up all the services using `docker-compose`:
    ```bash
    docker-compose up -d
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
    vault write database/config/postgresql \
    plugin_name=postgresql-database-plugin \
    allowed_roles="db-admin" \
    connection_url="postgresql://{{username}}:{{password}}@database:5432/postgres?sslmode=disable" \
    username=<temporary-username> \
    password=<temporary-password>
    ```

7. Create the db-admin role for the database:
    ```shell
    vault write database/roles/db-admin \
    db_name=postgresql \
    creation_statements="CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; \
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO \"{{name}}\";" \
    default_ttl="1h" \
    max_ttl="24h"
    ```
8. Run the following command to verify that the database secrets engine is configured correctly:
    ```shell
    vault read database/config/postgresql
    ```
   You should see the credentials for the database. You can login to the database using the updated credentials.

9. You can test the dynamic credentials by logging into the database using the following command:
    ```bash
    docker exec -it deployment-database-1 psql -U <dynamic-username> -d postgres
    ```

10. You should not use the root token for any other operations. Instead, create a new token with the required policies
    and use that token for all operations.
