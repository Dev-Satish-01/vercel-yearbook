const {Sequelize} = require("sequelize");

const postgresClient = new Sequelize('testingyearbook', 'postgres', 'postgres', {
    host: 'yearbookdb',
    port: 5432,
    dialect: 'postgres',
});

module.exports = {postgresClient};