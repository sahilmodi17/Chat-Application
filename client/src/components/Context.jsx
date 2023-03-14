import { useState, useContext } from "react";
import React from "react";

const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  const [typing,setTyping] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
    <ChatContext.Provider value={{ chat, setChat , typing , setTyping , socket , setSocket}}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
