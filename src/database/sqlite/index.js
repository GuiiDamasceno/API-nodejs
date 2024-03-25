// importações
const sqlite3 = require("sqlite3") 
const sqlite = require("sqlite")
const path = require("path")

async function sqliteConnection(){ // assíncrona pois precisamos lidar com o banco de dados
    const database = await sqlite.open({ // open para abrir a conexão
        filename: path.resolve(__dirname, "..", "database.db"), 
        driver: sqlite3.Database
    })
    return database
}

module.exports = sqliteConnection