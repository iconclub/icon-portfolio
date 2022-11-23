import React from "react";

import { CELL_WIDTH, CELL_HEIGHT } from "../../constants";

export const Block = ({ size, customStyle, data }) => {
  const style = {
    width: CELL_WIDTH * size[1],
    height: CELL_HEIGHT * size[0],
    backgroundColor: data.backgroundColor,
  };

  return <div style={{ ...style, ...customStyle }} />;
};
