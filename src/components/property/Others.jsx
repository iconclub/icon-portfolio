import React, { Fragment } from "react";

import { useMainContext } from "../../contexts/MainContext";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const Others = () => {
  const { showingItem, setShowingItem } = usePropertyContext();
  const { setItems } = useMainContext();

  const style = {
    margin: "10px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const inputStyle = {
    width: 130,
    margin: "0px 4px",
    padding: "4px 8px",
  };

  const handleOnInput = (e) => {
    const newData = {
      [e.target.name]: [e.target.value],
    };
    setShowingItem((prev) => ({ ...prev, data: { ...newData } }));
    setItems((prev) =>
      prev.map((ele) => {
        if (ele.id === showingItem.id) {
          ele.data = { ...ele.data, ...newData };
        }
        return ele;
      })
    );
  };

  return (
    <>
      {showingItem && (
        <div style={style}>
          {Object.entries(showingItem.data).map(([property, value]) => {
            return (
              <Fragment key={property}>
                <label htmlFor={`others-${property}`}>
                  {property.charAt(0).toUpperCase() + property.slice(1)}:
                </label>
                <input
                  id={`others-${property}`}
                  type="text"
                  name={property}
                  value={value}
                  style={inputStyle}
                  onInput={handleOnInput}
                ></input>
              </Fragment>
            );
          })}
        </div>
      )}
    </>
  );
};
