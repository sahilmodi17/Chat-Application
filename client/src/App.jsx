import { Outlet } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import ChatWindow from "./components/ChatWindow";
import { useChatContext } from "./components/Context";
import Input from "./components/Input";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { io } from "socket.io-client";



function App() {
   const { socket, setSocket } = useChatContext();

   useEffect(() => {
     setSocket(io("http://localhost:8000"));
   }, []);
  

  return (
    <>
      <NavBar />
      <Outlet context={{socket}} />
    </>
  );
}

export default App;
