const express = require('express') // import express
const morgan = require('morgan')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const port = 8000; // we will use this later
const server = express() // create an express server

server.use(morgan('dev'))
server.use(serveStatic('files'))
server.use(bodyParser())

server.post('/home.html', (req, res) => {
    res.send(`Hi, ${req.body.name}`)
})

server.listen(port, () => {
    console.log(`RPS app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working
  