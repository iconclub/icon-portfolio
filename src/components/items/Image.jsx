import React from "react";

import { CELL_WIDTH, CELL_HEIGHT } from "../../constants";

export const Image = ({ size, customStyle, data }) => {
  const style = {
    width: CELL_WIDTH * size[1],
    height: CELL_HEIGHT * size[0],
    objectFit: "cover",
  };

  return <img src={data.src} alt={"hello world"} style={{ ...style, ...customStyle }} />;
};
