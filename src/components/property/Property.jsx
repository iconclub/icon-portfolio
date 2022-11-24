import React from "react";

import arrowRightImg from "../../assets/arrow-right.png";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { PCell } from "./PCell";
import { Others } from "./Others";
import { Position } from "./Position";
import { RowColumn } from "./RowColumn";
import { Size } from "./Size";

export const Property = () => {
  const { isShowing, setIsShowing } = usePropertyContext();

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    zIndex: 99,
    top: 0,
    right: 0,
    height: "calc(100vh - 30px)",
    padding: isShowing ? "20px 20px 0px 0px" : 0,
    width: isShowing ? "20%" : 0,
    minWidth: isShowing ? 350 : 0,
    overflow: isShowing ? "visible" : "hidden",
    transition: "1s",
    transform: `translate3d(${isShowing ? 0 : 800}px, 0, 0)`,
  };

  const style = {
    minWidth: 300,
    minHeight: 220,
    backgroundColor: "#fff",
    padding: "12px 16px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    borderRadius: "4px",
    marginTop: 15,
    overflow: "auto",
  };

  const headerStyle = {
    margin: 0,
  };

  const titleStyle = {
    margin: "0px 0px 10px 0px",
  };

  const lastBlockStyle = {
    flexGrow: 1,
  };

  const btnCloseStyle = {
    position: "absolute",
    left: -25,
    top: 160,
    backgroundColor: "#ccc",
    padding: "12px 4px 10px 6px",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    cursor: "pointer",
  };

  const handleOnClose = () => {
    setIsShowing(false);
  };

  return (
    <div style={wrapperStyle}>
      <h1 style={headerStyle}>Properties</h1>

      <div style={style}>
        <h2 style={titleStyle}>Layout</h2>
        <PCell />
        <RowColumn />
      </div>

      <div style={{ ...style, ...lastBlockStyle }}>
        <h2 style={titleStyle}>Items</h2>
        <Size />
        <Position />
        <Others />
      </div>

      <div style={btnCloseStyle} onClick={handleOnClose}>
        <img src={arrowRightImg} alt="arrow right" width={15} height={15} />
      </div>
    </div>
  );
};
