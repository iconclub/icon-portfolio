import React from "react";

import { CELL_WIDTH, CELL_HEIGHT } from "../../constants";

export const Input = ({ size, customStyle, data, handleOnInput }) => {
  const style = {
    width: CELL_WIDTH * size[1],
    height: CELL_HEIGHT * size[0],
  };

  return (
    <input
      type="text"
      style={{ ...style, ...customStyle }}
      value={data.text}
      onInput={handleOnInput}
    />
  );
};
