import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";
import "./style/reset.css";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
