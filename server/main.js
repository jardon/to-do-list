const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const routes = require("./routes")

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

routes._ROUTES(app)

app.listen(process.env.SERVER_PORT, ()=> {
    console.log("Server is listening on " + process.env.SERVER_PORT)
})