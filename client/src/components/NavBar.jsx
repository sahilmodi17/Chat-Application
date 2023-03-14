import React from "react";
import { Link, Outlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const NavBar = () => {

  const roomId = uuidv4();

  return (
    <>
      <div className="mb-2 bg-slate-500 b9:w-[60%] m-auto flex justify-evenly">
        <Link to="/home">Home</Link>
        <Link to="/chat">Chat</Link>
        <Link to={`/room/${roomId}`}>Room</Link>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default NavBar;
