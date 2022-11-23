import React from "react";

import { usePropertyContext } from "../../contexts/PropertyContext";
import { Others } from "./Others";
import { Position } from "./Position";
import { Size } from "./Size";

export const Property = () => {
  const { isShowing } = usePropertyContext();

  const style = {
    display: isShowing ? "block" : "none",
    width: "20%",
    maxWidth: "300px",
    backgroundColor: "#fff",
    padding: "0px 20px",
    position: "sticky",
    height: "100vh",
    top: 0,
    left: 0,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };

  return (
    <div style={style}>
      <h1>Properties</h1>
      <Size />
      <Position />
      <Others />
    </div>
  );
};
