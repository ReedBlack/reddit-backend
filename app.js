const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const profile = require("./routes/profile")

app.use("/profle", profile)
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.listen(function () {
    console.log("I'm ready on port " + port)

})