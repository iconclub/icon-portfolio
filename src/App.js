import React from "react";

import { Sidebar } from "./components/sidebar/Sidebar";
import { Main } from "./components/main/Main";
import { Property } from "./components/property/Property";

export const App = () => {
  const style = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div className="app" style={style}>
      <Sidebar />
      <Main />
      <Property />
    </div>
  );
};
