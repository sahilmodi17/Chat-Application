import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChatWindow from "./ChatWindow";
import Home from "./Home";
import NavBar from "./NavBar";
import Room from "./Room";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/chat",
        element: <ChatWindow />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/room/:roomId",
        element: <Room />,
      },
    ],
  },
]);

export default router;
