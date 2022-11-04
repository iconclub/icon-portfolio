import React, { useState } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../../drag-types";
import { Overlay, overlayTypes } from "./Overlay";
import { useMainContext } from "../../contexts/MainContext";
import { useMemo } from "react";

const SCell = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: transparent;
  border: 1px dotted #ccc;
`;

const isNearbyCell = (hoveredCell, row, col, selectedItem) => {
  if (!hoveredCell || !selectedItem) {
    return false;
  }
  if (hoveredCell[0] === row && hoveredCell[1] === col) {
    return false;
  }
  const isNearbyRow = hoveredCell[0] + selectedItem.size[0] >= row;
  const isNearbyCol = hoveredCell[1] + selectedItem.size[1] >= col;
  return isNearbyRow && isNearbyCol;
};

export const Cell = ({ row, col, width, height }) => {
  const { selectedItem, hoveredCell, setHoveredCell } = useMainContext();

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.Card],
      drop: () => ({ name: `Cell(${row},${col})`, row, col }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [row, col]
  );

  // if (canDrop && isOver) {
  //   setHoveredCell([row, col]);
  // }
  // const isNearby = useMemo(
  //   () => isNearbyCell(hoveredCell, row, col, selectedItem),
  //   [col, hoveredCell, row, selectedItem]
  // );

  return (
    <SCell ref={drop} width={width} height={height} id={`Cell(${row},${col})`}>
      {canDrop && isOver && <Overlay type={overlayTypes.Allowed} />}
      {/* {isNearby && <Overlay type={overlayTypes.Allowed} />} */}
    </SCell>
  );
};
