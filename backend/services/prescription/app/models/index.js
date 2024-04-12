const { Sequelize } = require('sequelize');
const vaultService = require('../services/vaultService.js');

config = {
    database: 'prescribe',
    dialect: 'postgres',
    host: 'database',
    define: {
        timestamps: false,
    }
}

const sequelize = new Sequelize(config);

sequelize.beforeConnect(async (config) => {
    await vaultService.getDatabaseCredentials();
    config.username = process.env.DB_USER;
    config.password = process.env.DB_PASSWORD;
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection().then(() => {
    console.log('Test connection successful');
});

module.exports = sequelize;
