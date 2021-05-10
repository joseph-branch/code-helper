const app = require('./app');

const PORT = 3000; //process.env.NODE_ENV.trim() === 'development' ? 3000 : process.env.PORT; // Assign the port based on the Node Enviroment

// Set the PORT for the app to listen on
server = app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

server.on('connection', function(socket) {
    // 10 minutes timeout
    socket.setTimeout(10 * 60 * 1000);
});