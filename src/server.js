require("express-async-errors")
const AppError = require("./utils/AppError")
const migrationsRun = require("./database/sqlite/migrations")

const express = require("express"); // Importação do express
const routes = require("./routes")

migrationsRun() // executar o banco de dados

const app = express() // inicialização do Express
app.use(express.json())

app.use(routes) // a aplicação chega aqui e nos leva ao routes que está em index.js


app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status:"error",
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = 3333; // definição qual o endereço do número da porta que a API vai observar
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
// Ao início a mensagem é executada ao usar o npm start
