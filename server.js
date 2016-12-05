const express = require('express')
const bodyParser = require("body-parser")
const morgan = require('morgan')

let idiots = ["Vegans", "Hipsters", "Lobsters", "Kanye West"]

const app = express()

app.use(morgan("combined"))
app.use(bodyParser.json({type: '*/*'}))

app.get("/idiots", (req, res) => {
    res.send(idiots)
})

app.put("/idiots", (req, res) => {
    idiots.push(req.body.idiot)
    res.send(req.body.idiot + " added")
})


app.delete("/idiots", (req, res) => {
    const index = idiots.indexOf(req.body.idiot)
    if (index > -1){
        idiots.splice(index, 1)
        res.send(req.body.idiot + " removed")
    } else {
        res.send(req.body.idiot + " not found")
    }
})

app.listen(4242, () => console.info("Up and atom!"))