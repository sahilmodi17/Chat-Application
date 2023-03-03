import { useState, useContext } from "react";
import React from "react";

const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  const [typing,setTyping] = useState(false);

  return (
    <ChatContext.Provider value={{ chat, setChat , typing , setTyping }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
