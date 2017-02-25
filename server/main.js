var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(8080, function() {
    console.log('Servidor corriendo en http://localhost:8080');
});

var messages = [{
    author: "Autor 1",
    text: "Mensaje 1"
},{
    author: "Autor 2",
    text: "Mensaje 2"
},{
    author: "Autor 3",
    text: "Mensaje 3"
}]

io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);
});

app.use(express.static('public'));
