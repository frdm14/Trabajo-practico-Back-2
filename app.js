const express = require('express')
const logger = require("morgan")
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express()

const indexRouter = require("./Routes/index")
const userRouter = require("./Routes/user")
const mathsRouter = require("./Routes/maths")
const listRouter = require("./Routes/list")


app.use(logger("dev"))
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/", indexRouter),
app.use("/user", userRouter),
app.use("/dividir", mathsRouter),
app.use("/suma", mathsRouter),
app.use("/numero", mathsRouter),
app.use("/listadodecompras", listRouter)




module.exports = app