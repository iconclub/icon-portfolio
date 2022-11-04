import React from "react";
import styled from "styled-components";

import { numberOfRows, numberOfColumns, cellWidth, cellHeight } from "../../constants";
import { Cell } from "./Cell";

const SMain = styled.div`
  width: 100%;
`;

const SCells = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

export const Main = () => {
  const width = numberOfColumns * cellWidth;
  const height = numberOfRows * cellHeight;

  const cells = [];
  for (let row = 0; row < numberOfRows; row++) {
    for (let col = 0; col < numberOfColumns; col++) {
      const idx = row * numberOfRows + col;

      cells.push(<Cell key={idx} row={row} col={col} width={cellWidth} height={cellHeight} />);
    }
  }

  return (
    <SMain>
      <SCells width={width} height={height}>
        {cells}
      </SCells>
    </SMain>
  );
};
