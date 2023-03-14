import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import App from "../App";
import ChatWindow from "./ChatWindow";
import { useChatContext } from "./Context";

const Room = () => {
  const params = useParams();
  const { socket } = useOutletContext();

  useEffect(() => {
    // console.log(params);
    if (!socket) return;
    socket.emit("join-room", { roomId: params.roomId });
  }, [socket]);

  return (
    <>
    
      {/* <div className="text-center">{params.roomId}</div> */}
      <ChatWindow />
    </>
  );
};

export default Room;
