import React from "react";

import { ItemTypes } from "../../constants";
import { Card } from "./Card";
import { TrashCan } from "./TrashCan";

export const Sidebar = () => {
  const wrapperStyle = {
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 99,
    height: "100vh",
  };

  const style = {
    width: "30%",
    minWidth: 350,
    height: "calc(100vh - 100px)",
    backgroundColor: "#fff",
    overflow: "auto",
    padding: "0px 20px",
    zIndex: 99,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };

  const titleStyle = {};

  return (
    <div style={wrapperStyle}>
      <div style={style}>
        <h1 style={titleStyle}>Items</h1>
        <Card name={ItemTypes.Block} size={[2, 5]} id="sidebar-block" />
        <Card name={ItemTypes.Input} size={[1, 4]} id="sidebar-input" />
        <Card name={ItemTypes.Text} size={[1, 4]} id="sidebar-text" />
        <Card name={ItemTypes.Link} size={[1, 4]} id="sidebar-link" />
        <Card name={ItemTypes.Image} size={[2, 2]} id="sidebar-image" />
        <Card name={ItemTypes.Divider} size={[0.1, 5]} id="sidebar-divider" />
      </div>
      <TrashCan />
    </div>
  );
};
