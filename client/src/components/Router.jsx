import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NavBar from "./NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path : "/nav",
    element : <NavBar />,
  }
]);

export default router;