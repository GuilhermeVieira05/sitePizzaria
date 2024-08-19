const client = require("../config/db.js")

function getUser(){
    return client.query("SELECT * FROM users");
}

function createUser({fullname, email, password}){
    const query = "INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING *"
    const values = [fullname, email, password]
    return client.query(query, values)
}