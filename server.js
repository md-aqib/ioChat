var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
user = [];
connections = [];


const port = process.env.PORT || 4000
server.listen(port)
console.log(`server running on port ${port}...`)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


io.sockets.on('connection', function(socket){
    connections.push(socket)
    console.log('Connected: %s sockets connected', connections.length);

    //disconnect
    connections.splice(connections.indexOf(socket), 1)
    console.log('Disconnected: %s sockets connected', connections.length)
})