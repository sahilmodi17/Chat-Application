const sockets = (socket) => {
  socket.on("send-message", ({ msg, roomId }) => {
    let skt = socket.broadcast;
    skt = roomId ? socket.to(roomId) : skt;
    console.log(msg);
    skt.emit("message-from-server", msg);
  });

  socket.on("typing-started-client", ({ roomId }) => {
    let skt = socket.broadcast;
    skt = roomId ? socket.to(roomId) : skt;
    skt.emit("typing-from-server");
  });

  socket.on("typing-stopped", ({ roomId }) => {
    let skt = socket.broadcast;
    skt = roomId ? socket.to(roomId) : skt;
    skt.emit("typing-stopped-from-server");
  });

  socket.on("join-room", ({ roomId }) => {
    console.log("joining room ", roomId);
    socket.join(roomId);
  });
};

module.exports = {sockets}