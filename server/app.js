const express = require("express");
const app = express();

const http = require("http");
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

io.on("connection", (socket) => {
  // console.log("connection is ready");

  socket.on('send-message',(data)=>{
    socket.broadcast.emit("message-from-server", data)
  })

  socket.on("typing-started-client",()=>{
    socket.broadcast.emit("typing-from-server");
  })

  socket.on("typing-stopped",()=>{
    socket.broadcast.emit("typing-stopped-from-server");
  })
  
});
