import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import { numberOfRows, numberOfColumns, cellWidth, cellHeight } from "../../constants";
import { useMainContext } from "../../contexts/MainContext";
import { Card } from "../sidebar/Card";
import { Cell } from "./Cell";

const getItemComponent = ({ cood, name, size, id }) => {
  const customStyle = {
    margin: 0,
    position: "absolute",
    top: cood[0] * cellHeight,
    left: cood[1] * cellWidth,
  };

  const key = uuidv4();

  switch (name) {
    case "Input":
      return (
        <input
          key={key}
          id={id}
          type="text"
          style={{ width: cellWidth * size[1], height: cellHeight * size[0], ...customStyle }}
        />
      );
    case "Textarea":
      return (
        <Card
          key={key}
          id={id}
          size={size}
          name={name}
          customStyle={{
            backgroundColor: "black",
            ...customStyle,
          }}
        />
      );
    default:
      return null;
  }
};

export const Main = () => {
  const { items } = useMainContext();

  const style = {
    width: "100%",
    margin: 50,
  };

  const cellsStyle = {
    width: numberOfColumns * cellWidth,
    height: numberOfRows * cellHeight,
    display: "flex",
    flexWrap: "wrap",
    margin: "0px auto",
    position: "relative",
  };

  const cells = useMemo(() => {
    const _cells = [];
    for (let row = 0; row < numberOfRows; row++) {
      console.log("hi");
      for (let col = 0; col < numberOfColumns; col++) {
        const idx = `cell(${row},${col})`;
        _cells.push(<Cell key={idx} row={row} col={col} />);
      }
    }
    for (const item of items) {
      _cells.push(getItemComponent(item));
    }
    return _cells;
  }, [items]);

  return (
    <div style={style}>
      <div style={cellsStyle}>{cells}</div>
    </div>
  );
};
