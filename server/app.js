const express = require("express");
const app = express();

const http = require("http");
const { sockets } = require("./socket");
const httpServer = http.createServer(app);
app.use(express.static(__dirname));

const PORT = 8000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const server = app.listen(PORT, () => {
  console.log("server is listening at ", PORT);
});

// const {Server} =require("socket.io")
// const io = new Server(httpServer);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", sockets );
