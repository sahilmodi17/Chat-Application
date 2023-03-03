import React from "react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { IoSendSharp } from "react-icons/io5";
import { useChatContext } from "./Context";

const Input = () => {
  const [socket, setSocket] = useState(null);
  const [msg, setMsg] = useState("");
  const {setChat , setTyping} = useChatContext()
  

  useEffect(() => {
    setSocket(io("http://localhost:8000"));
  }, []);

  
  useEffect(() => {
    if (!socket) return;
    socket.on("message-from-server", (data) => {
      setChat((prev) => [...prev, { message: data.msg, received: true }]);
    });
    socket.on("typing-from-server",()=>{
      setTyping(true);
    })
    socket.on("typing-stopped-from-server",()=>{
      setTyping(false);
    })
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("send-message", { msg });
    setChat((prev) => [...prev, { message : msg , received: false }]);
    setMsg("");
  };

  const onInputChange =(e) =>{
    setMsg(e.target.value);

    socket.emit("typing-started-client");

    setTimeout(()=>{
      socket.emit("typing-stopped");
    },1500)
  }

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

          <IoSendSharp className="ml-1.5 h-10  w-9 icon" onClick={handleSubmit}/>
        </div>
      </form>
    </>
  );
};

export default Input;
