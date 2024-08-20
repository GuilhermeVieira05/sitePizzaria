const pizzaModel = require('../models/PizzaModel')

function getPizzas(req, res){
    pizzaModel.getPizzas()
    .then(result => res.json(result.rows))
    .catch(err =>{
        console.error("Erro na consulta", err.stack);
        res.status(500).send("Erro na consulta ao banco de dados.")
    })
}

function createPizza(req, res){
    const pizzaData = req.body;
    pizzaModel.createPizza(pizzaData)
    .then(result => res.status(201).json(result.rows[0]))
    .catch(err => {
        console.error("Erro ao inserir a pizza!", err.stack)
        res.status(500).send("Erro ao inserir a pizza no banco de dados!")
    })
}

function updatePizza(req, res){
    const pizzaData = req.body;
    const {id} = req.params;
    pizzaModel.uptadePizza(id, pizzaData)
    .then(result => res.json(result.rows[0]))
    .catch(err => {
        console.error("Erro ao atualizar a pizza!", err.stack)
        res.status(500).send("Erro ao atualizar a pizza no banco de dados!")
    })
}

function deletePizza(req, res){
    const {id} = req.params
    pizzaModel.deletePizza(id)
    .then(() => res.status(204).send())
    .catch(err =>{
        console.error("Erro ao deletar a pizza!", err.stack)
        res.status(500).send("Erro ao deletar a pizza no banco de dados!")
    })
}

module.exports = {
    getPizzas,
    createPizza,
    updatePizza,
    deletePizza
}