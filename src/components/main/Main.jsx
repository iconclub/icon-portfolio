import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import { NUMBER_OF_ROWS, NUMBER_OF_COLUMNS, CELL_WIDTH, CELL_HEIGHT } from "../../constants";
import { useMainContext } from "../../contexts/MainContext";
import { Card } from "../sidebar/Card";
import { Cell } from "./Cell";

export const Main = () => {
  const { items } = useMainContext();

  const style = {
    width: "100%",
    margin: 50,
  };

  const cellsStyle = {
    width: NUMBER_OF_COLUMNS * CELL_WIDTH,
    height: NUMBER_OF_ROWS * CELL_HEIGHT,
    display: "flex",
    flexWrap: "wrap",
    margin: "0px auto",
    position: "relative",
  };

  const cells = useMemo(() => {
    const _cells = [];
    for (let row = 0; row < NUMBER_OF_ROWS; row++) {
      for (let col = 0; col < NUMBER_OF_COLUMNS; col++) {
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
  }, [items]);

  return (
    <div style={style}>
      <div style={cellsStyle}>{cells}</div>
    </div>
  );
};
