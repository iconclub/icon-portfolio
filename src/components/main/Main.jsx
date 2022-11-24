import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import { useMainContext } from "../../contexts/MainContext";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { Card } from "../sidebar/Card";
import { Cell } from "./Cell";

export const Main = () => {
  const { items } = useMainContext();
  const { layout } = usePropertyContext();

  const style = {
    width: "fit-content",
    height: "fit-content",
    margin: 30,
    backgroundColor: "#fff",
  };

  const cellsStyle = {
    width: layout.numberOfColumns * layout.cellWidth,
    height: layout.numberOfRows * layout.cellHeight,
    display: "flex",
    flexWrap: "wrap",
    margin: "0px auto",
    position: "relative",
  };

  const cells = useMemo(() => {
    const _cells = [];
    for (let row = 0; row < layout.numberOfRows; row++) {
      for (let col = 0; col < layout.numberOfColumns; col++) {
        const idx = `cell(${row},${col})`;
        _cells.push(<Cell key={idx} row={row} col={col} />);
      }
    }
    for (const item of items) {
      const { id, size, name, pos, data } = item;
      _cells.push(
        <Card
          key={uuidv4()}
          id={id}
          size={size}
          name={name}
          row={pos[0]}
          col={pos[1]}
          prevData={data}
        />
      );
    }
    return _cells;
  }, [items, layout]);

  return (
    <div style={style}>
      <div style={cellsStyle}>{cells}</div>
    </div>
  );
};
