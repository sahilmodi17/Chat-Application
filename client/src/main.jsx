import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChatProvider } from "./components/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChatProvider>
    <App />
  </ChatProvider>
);
