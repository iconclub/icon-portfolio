import React from "react";

import { ItemTypes } from "../../constants";
import { Card } from "./Card";

export const Sidebar = () => {
  const style = {
    width: "30%",
    minWidth: 350,
    height: "100vh",
    position: "sticky",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    overflow: "auto",
    padding: "0px 20px",
    zIndex: 99,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };

  const titleStyle = {};

  return (
    <div style={style}>
      <h1 style={titleStyle}>Items</h1>

      <Card name={ItemTypes.Block} size={[2, 8]} id="sidebar-block" />
      <Card name={ItemTypes.Input} size={[1, 4]} id="sidebar-input" />
      <Card name={ItemTypes.Image} size={[2, 2]} id="sidebar-image" />
    </div>
  );
};
