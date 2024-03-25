const { Router } = require("express")
const userRouter = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")

const routes = Router()

routes.use("/users", userRouter) // aqui é redirecionado o /users. 
//Então é levao ao userRouter que está em user.routes.js
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)


module.exports = routes
