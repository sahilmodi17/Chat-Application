import React from "react";
import { useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { useOutletContext, useParams } from "react-router-dom";
import { useChatContext } from "./Context";

const Input = () => {
  const [msg, setMsg] = useState("");
  const { setChat, setTyping } = useChatContext();
  const { socket } = useOutletContext();
  const { roomId } = useParams();

  useEffect(() => {
    console.log(socket);
    if (!socket) return;
    console.log(socket);

    socket.on("message-from-server", (message) => {
      console.log(message);
      setChat((prev) => [...prev, { message:message , received: true }]);
    });
    socket.on("typing-from-server", () => {
      setTyping(true);
    });
    socket.on("typing-stopped-from-server", () => {
      setTyping(false);
    });
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("send-message", { msg, roomId });
    setChat((prev) => [...prev, { message: msg, received: false }]);
    setMsg("");
  };

  const onInputChange = (e) => {
    setMsg(e.target.value);

    socket.emit("typing-started-client", { roomId });

    setTimeout(() => {
      socket.emit("typing-stopped", { roomId });
    }, 1500);
  };

  return (
    <>
      <form className="" action="post" onSubmit={handleSubmit}>
        <div className="flex ">
          <input
            type="text"
            className=" input p-1 pl-3 rounded text-lg "
            id="input-field"
            value={msg}
            placeholder="Enter your message ..."
            onChange={onInputChange}
          />

          <IoSendSharp
            className="ml-1.5 h-10  w-9 icon"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default Input;
