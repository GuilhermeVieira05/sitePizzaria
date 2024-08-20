const client = require("../config/db.js")

function getUser(){
    return client.query("SELECT * FROM users");
}

function createUser({fullname, email, password}){
    const query = "INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING *"
    const values = [fullname, email, password]
    return client.query(query, values)
}

function uptadeUser(id, {fullname, email, password}){
    const query = "UPDATE users SET fullname = $1, email = $2, password = $3 WHERE id = $4 RETURNING *";
    const values = [fullname, email, password, id]
    return client.query(query, values)
}

function deleteUser(id){
    const query = "DELETE FROM users WHERE id = $1"
    const values = id
    return client.query(query, values)
}


module.exports = {
    getUser,
    createUser,
    uptadeUser,
    deleteUser
}