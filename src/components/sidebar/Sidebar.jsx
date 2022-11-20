import React from "react";

import { Card } from "./Card";

export const Sidebar = () => {
  const style = {
    width: "30%",
    minWidth: 350,
    height: "100vh",
    position: "sticky",
    top: 0,
    left: 0,
    backgroundColor: "black",
    color: "white",
    overflow: "scroll",
    padding: 8,
  };

  return (
    <div style={style}>
      <h1>Items</h1>
      <Card name="Input" size={[1, 4]} id="input-sidebar" />
      <Card name="Textarea" size={[2, 8]} id="textarea-sidebar" />
    </div>
  );
};
