var express = require('express');
var app = express();
app.use(express.static("./resources/views/layouts/"));
app.set
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/test-real-time', function (req, res) {
  res.sendfile(__dirname + '/resources/views/testReal.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: socket.id });
  socket.on('my other event', function (data) {
    console.log(socket);
  });
});