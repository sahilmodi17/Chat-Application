import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {RouterProvider} from 'react-router-dom'
import "./index.css";
import { ChatProvider } from "./components/Context";
import router from "./components/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChatProvider>
    <RouterProvider router={router} />
  </ChatProvider>
);
