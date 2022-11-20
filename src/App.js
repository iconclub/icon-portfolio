import React from "react";

import { Sidebar } from "./components/sidebar/Sidebar";
import { Main } from "./components/main/Main";

export const App = () => {
  const style = {
    width: "100%",
    display: "flex",
  };

  return (
    <div className="app" style={style}>
      <Sidebar />
      <Main />
    </div>
  );
};
