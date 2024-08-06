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

// Rota para buscar pizzas
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

// Rota para inserir uma nova pizza
app.post('/api/pizzas', (req, res) =>{
  const {sabor, descricao, preco} = req.body;
  const query = "INSERT INTO pizzas (sabor, descricao, preco) VALUES ($1, $2, $3) RETURNING *"
  const values = [sabor, descricao, preco]

  client.query(query, values, (err, result) =>{
    if(err){
      console.error("Erro ao inserir a pizza!", err.stack);
      res.status(500).send("Erro ao inserir a pizza no banco de dados!")
    }else{
      res.status(201).json(result.rows[0])
    }
  })
})


// Rota para inserir um novo usuário 
app.post('/api/users', (req, res) =>{
  const {fullname, email, password} = req.body;
  const query = 'INSERT INTO users(fullname, descricao, preco) VALUES($1, $2, $3) RETURNING *'
  const values = [fullname, email, password]

  client.query(query, values, (err, result) =>{
    if(err){
      console.error("Erro ao criar novo usuário!", err.stack)
      res.status(500).send("Erro ao inserir novo usuário no banco de dados!")
    }else{
      res.status(201).json(result.rows[0])
    }
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});