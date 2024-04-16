/**
 * chat server
 * Whoever sends us a message, we're going to extract that message & log it to the screen
 * Anybody else that is connected to this server is going to be able to see that message
 **/

const net = require("net");

const server = net.createServer();

// array of socket objects that will be looped and data wrote to all clients / sockets
const clients = [];

// in creating a server, we have access to the socket object
server.on("connection", (socket) => {
  console.log("A new connection to the server!");

  // when we receive data...
  socket.on("data", (data) => {
    // iterate over clients array and write data to each socket
    clients.map((s) => {
      s.write(data);
    });
  });

  // push new sockets to clients array
  clients.push(socket);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("opened server on", server.address());
});
