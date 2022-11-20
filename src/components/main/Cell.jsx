import React, { memo } from "react";
import { useDrop } from "react-dnd";

import { cellHeight, cellWidth, numberOfColumns, numberOfRows } from "../../constants";
import { ItemTypes } from "../../drag-types";
import { useMainContext } from "../../contexts/MainContext";
import { Overlay, overlayTypes } from "./Overlay";

const _Cell = ({ row, col }) => {
  const { selectedItem } = useMainContext();

  const style = {
    width: cellWidth,
    height: cellHeight,
    border: "1px dotted #ccc",
    zIndex: selectedItem ? 2 : -1,
  };

  let isItemOutOfBound = false;
  if (selectedItem) {
    const isOutOfRow = row + selectedItem.size[0] > numberOfRows;
    const isOutOfCol = col + selectedItem.size[1] > numberOfColumns;
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
