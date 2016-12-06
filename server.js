const express = require('express')
const bodyParser = require("body-parser")
const morgan = require('morgan')
const expressJWT = require("express-jwt")
const jwt = require("jsonwebtoken")

let idiots = ["Vegans", "Hipsters", "Lobsters", "Kanye West"]

const app = express()

app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(expressJWT({secret: "balls 4 ever"}).unless({path: ["/login", "/idiots"]}))

app.get("/idiots", (req, res) => {
    res.send(idiots)
})

app.put("/idiot", (req, res) => {
    idiots.push(req.body.idiot)
    res.send(req.body.idiot + " added")
})

app.post("/login", (req, res) => {
    const token = jwt.sign({username: "bob", permissions:"loads"}, "balls 4 ever")
    res.send(token)
})

app.listen(4242, () => console.info("Up and atom!"))