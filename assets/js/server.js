const express = require('express');
const { Client } = require('pg');
const cors = require('cors')
require('dotenv').config();
const path = require('path');

const app = express();
const port = 3000;

app.use(cors())

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "V131r4813174%",
  database: "pizzaria",
  port: 5432
});

client.connect().then(() => console.log("Conectado ao PostgreSQL")).catch(err => console.error("Erro ao conectar ao PostgreSQL", err.stack));

// Servir arquivos estáticos
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/utils', express.static(path.join(__dirname, 'utils')));

app.get('/api/pizzas', (req, res) => {
  client.query("SELECT * from pizzas", (err, result) => {
    if (err) {
      console.error("Erro na consulta", err.stack);
      res.status(500).send('Erro na consulta ao banco de dados.');
    } else {
      res.json(result.rows);
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});