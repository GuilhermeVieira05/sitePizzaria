const { Cliente } = require('pg')

const client = new Cliente({
    host: 'localhost',
    user: 'postgres',
    password: "V131r4813174%",
    database: 'pizzaria',
    port: 5432
});

// Conectar ao banco de dados
client.connect().then(() => console.log("Conectando ao PostgreSQL")).catch(err => console.error("Erro ao conectar ao PostgresSQL", err.stack))

client.query()