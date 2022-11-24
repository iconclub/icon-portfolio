import React from "react";

import { usePropertyContext } from "../../contexts/PropertyContext";

export const Input = ({ size, customStyle, data, setData }) => {
  const { setShowingItem, layout } = usePropertyContext();

  const style = {
    width: layout.cellWidth * size[1],
    height: layout.cellHeight * size[0],
    fontSize: data.fontSize,
  };

  const handleOnInput = (e) => {
    const text = e.target.value;
    setData((prev) => ({ ...prev, text }));
    setShowingItem((prev) => ({ ...prev, data: { ...prev.data, text } }));
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
