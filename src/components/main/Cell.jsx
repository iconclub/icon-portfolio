import React, { memo } from "react";
import { useDrop } from "react-dnd";

import {
  CELL_HEIGHT,
  CELL_WIDTH,
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  ItemTypes,
} from "../../constants";
import { useMainContext } from "../../contexts/MainContext";
import { Overlay, overlayTypes } from "./Overlay";

const _Cell = ({ row, col }) => {
  const { selectedItem } = useMainContext();

  const style = {
    width: CELL_WIDTH,
    height: CELL_HEIGHT,
    border: "1px dotted #ccc",
    zIndex: selectedItem ? 2 : 1,
  };

  let isItemOutOfBound = false;
  if (selectedItem) {
    const isOutOfRow = row + selectedItem.size[0] > NUMBER_OF_ROWS;
    const isOutOfCol = col + selectedItem.size[1] > NUMBER_OF_COLUMNS;
    isItemOutOfBound = isOutOfRow || isOutOfCol;
  }

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.Card],
      drop: () => ({ name: `cell(${row},${col})`, row, col }),
      canDrop: () => !isItemOutOfBound,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [row, col, isItemOutOfBound]
  );

  return (
    <div ref={drop} id={`cell(${row},${col})`} style={style}>
      {canDrop && isOver && (
        <Overlay type={overlayTypes.Allowed} size={selectedItem.size} row={row} col={col} />
      )}
      {!canDrop && isOver && (
        <Overlay type={overlayTypes.Denied} size={selectedItem.size} row={row} col={col} />
      )}
    </div>
  );
};

export const Cell = memo(_Cell);
