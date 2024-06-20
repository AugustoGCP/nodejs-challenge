const express = require(`express`)
const app = new express()

const Route = require('../https/routes/router');

app.use(express.json())
app.use(Route)

module.exports = app