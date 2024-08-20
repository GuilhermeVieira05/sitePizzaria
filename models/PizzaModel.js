const client = require('../config/db.js')

function getPizzas(){
    return client.query("SELECT * FROM pizzas")
}

function createPizza({sabor, descricao, preco}) {
    const query = "INSERT INTO pizzas (sabor, descricao, preco) VALUES ($1, $2, $3) RETURNING *";
    const values = [sabor, descricao, preco]
    return client.query(query, values);
}

function uptadePizza(id, {sabor, descricao, preco}){
    const query = "UPTADE pizzas SET sabor = $1, descricao = $2, preco = $3 WHERE id = $4 RETURNING *";
    const values = [sabor, descricao, preco, id]
    return client.query(query, values);
}

function deletePizza(id){
    const query = "DELETE FROM pizzas WHERE id = $1";
    const values = [id];
    return client.query(query, values)
}

module.exports = {
    getPizzas,
    createPizza,
    uptadePizza,
    deletePizza
};