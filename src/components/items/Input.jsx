import React from "react";

import { usePropertyContext } from "../../contexts/PropertyContext";

export const Input = ({ size, customStyle, data, handleOnInput }) => {
  const { layout } = usePropertyContext();

  const style = {
    width: layout.cellWidth * size[1],
    height: layout.cellHeight * size[0],
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
