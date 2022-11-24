import React from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../../constants";
import trashCanImg from "../../assets/trash-can.png";

export const TrashCan = () => {
  const style = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 80,
    backgroundColor: "#aaa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };

  const overlayStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#f44",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const imageStyle = {
    width: 30,
    height: 30,
    zIndex: 2,
  };

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.Card],
      drop: () => ({ isRemoved: true }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    []
  );

  return (
    <div ref={drop} style={style}>
      {canDrop && isOver && <div style={overlayStyle} />}
      <img src={trashCanImg} alt="trash can" style={imageStyle} />
    </div>
  );
};
