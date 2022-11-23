import React from "react";
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../../constants";

import { useMainContext } from "../../contexts/MainContext";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const Position = () => {
  const { showingItem, setShowingItem } = usePropertyContext();
  const { setItems } = useMainContext();

  const row = showingItem?.pos[0] ?? -1;
  const col = showingItem?.pos[1] ?? -1;

  const style = {
    margin: "10px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const labelStyle = {
    marginRight: 8,
  };

  const inputStyle = {
    width: 60,
    margin: "0px 4px",
    padding: "4px 8px",
  };

  const handleOnRowInput = (e) => {
    const rowVal = e.target.value;
    setShowingItem((prev) => ({ ...prev, pos: [+rowVal, prev.size[1]] }));
    setItems((prev) =>
      prev.map((ele) => {
        if (ele.id === showingItem.id) {
          ele.pos = [+rowVal, ele.pos[1]];
        }
        return ele;
      })
    );
  };

  const handleOnColInput = (e) => {
    const colVal = e.target.value;
    setShowingItem((prev) => ({ ...prev, pos: [prev.size[0], +colVal] }));
    setItems((prev) =>
      prev.map((ele) => {
        if (ele.id === showingItem.id) {
          ele.pos = [ele.pos[0], +colVal];
        }
        return ele;
      })
    );
  };

  return (
    <>
      {showingItem && (
        <div style={style}>
          <label htmlFor="position-row" style={labelStyle}>
            Position:
          </label>
          <div>
            <input
              type="number"
              id="position-row"
              name="position-row"
              min={0}
              max={NUMBER_OF_ROWS - (showingItem?.size[0] || 0)}
              value={row}
              style={inputStyle}
              onInput={handleOnRowInput}
            />
            <input
              type="number"
              id="position-col"
              name="position-col"
              min={0}
              max={NUMBER_OF_COLUMNS - (showingItem?.size[1] || 0)}
              value={col}
              style={inputStyle}
              onInput={handleOnColInput}
            />
          </div>
        </div>
      )}
    </>
  );
};
