const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
    port: dbPort
});

client.connect().then(() => console.log("Conectado ao PostgreSQL")).catch(err => console.error("Erro ao conectar ao PostgreSQL", err.stack));

module.exports = client;