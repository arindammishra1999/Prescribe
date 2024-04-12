const vault = require("node-vault")({
    apiVersion: "v1",
    endpoint: "http://vault:8200",
});

const roleId = process.env.ROLE_ID;
const secretId = process.env.SECRET_ID;

const login = async () => {
    const result = await vault.approleLogin({
        role_id: roleId,
        secret_id: secretId,
    });
    const {client_token} = result.auth;
    vault.token = client_token;
}

const getJwtRsaPublicKey = async () => {
    await login();
    const result = await vault.read("kv/data/jwt-rsa-public");
    const {public_key} = result.data.data;
    process.env.PUBLIC_KEY = public_key;
}

const getJwtRsaPrivateKey = async () => {
    await login();
    const result = await vault.read("kv/data/jwt-rsa-private");
    const {private_key} = result.data.data;
    process.env.PRIVATE_KEY = private_key;
}

const getDatabaseCredentials = async () => {
    await login();
    const result = await vault.read("database/creds/db-admin");
    const {username, password} = result.data;
    const {lease_id} = result;
    process.env.DB_USER = username;
    process.env.DB_PASSWORD = password;
    process.env.DB_LEASE_ID = lease_id;
}

module.exports = {
    getJwtRsaPrivateKey,
    getJwtRsaPublicKey,
    getDatabaseCredentials,
};
