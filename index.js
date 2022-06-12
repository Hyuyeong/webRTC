const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const cors = require('cors');
const SocketIO = require('socket.io');
const wsServer = SocketIO(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (_, res) => {
  res.send('Server is running.');
});

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (_, res) => {
  res.render('home');
});

app.get('/*', (_, res) => {
  res.redirect('/');
});

// app.listen(4000, handleListen);

wsServer.on('connection', socket => {
  socket.emit('me', socket.id);
  socket.on('disconnect', () => {
    socket.broadcast.emit('callended');
  });
  socket.on('calluser', ({ userTocall, signalData, from, name }) => {
    wsServer
      .to(userTocall)
      .emit('calluser', { signal: signalData, from, name });
  });

  socket.on('answercall', data => {
    wsServer.to(data.to).emit('callaccepted', data.signal);
  });
});

const handleListen = () => console.log(`Listening on http://localhost:${PORT}`);

httpServer.listen(PORT, handleListen);
