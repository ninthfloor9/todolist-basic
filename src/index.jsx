import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { TodoContainer } from "./components/todocontainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <TodoContainer />
    </RecoilRoot>
  </React.StrictMode>
);
