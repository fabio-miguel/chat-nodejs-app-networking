/**
 * client is anyone that can connect to the server.js
 **/

const net = require("net");
const readline = require("readline/promises");

//
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// once this connection is made, this callback will run
// createConnection() will return a socket object with available methods
// this socket is what allows us to make a connection to the server!
const socket = net.createConnection(
  { host: "127.0.0.1", port: 3000 },
  async () => {
    console.log("connected to the server!");

    const message = await rl.question("Enter a message > ");

    socket.write(message);
  }
);

// receiving chat data back from server
socket.on("data", (data) => {
  console.log(data.toString("utf-8"));
});

socket.on("end", () => {
  console.log("Connection was ended!");
});
