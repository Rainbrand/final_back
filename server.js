const express = require('express')
const http = require('http')
const SocketHandler = require('./SocketHandler.js')
const CORS = require('cors')


const app = express()
app.use(CORS())
const server = http.createServer(app)
const socketHandler = new SocketHandler(server, "http://localhost:3000")
const PORT = 9000

app.use(express.json())
app.use(express.urlencoded())
app.use(express.text())
app.use(express.raw())


socketHandler.handleConnection();

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))


