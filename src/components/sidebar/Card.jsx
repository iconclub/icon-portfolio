import React from "react";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import { ItemTypes } from "../../drag-types";
import { cellWidth, cellHeight } from "../../constants";
import { useMainContext } from "../../contexts/MainContext";

export const Card = ({ id, name, size, customStyle }) => {
  const { setItems, selectedItem, setSelectedItem } = useMainContext();

  const style = {
    width: cellWidth * size[1],
    height: cellHeight * size[0],
    backgroundColor: "red",
    cursor: "grab",
    margin: "16px 0px",
  };

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.Card,
      item: { id, name, size },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (dropResult) {
          const isFromSidebar = id.includes("sidebar");
          const newItem = {
            cood: [dropResult.row, dropResult.col],
            id: isFromSidebar ? uuidv4() : id,
            name,
            size,
          };
          if (!isFromSidebar) {
            setItems((prevItems) => prevItems.filter((ele) => ele.id !== id));
          }
          setItems((prevItems) => [...prevItems, newItem]);
        }
        setSelectedItem(null);
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.8 : 1,
      }),
    }),
    [id, name, size]
  );

  const handleMouseDown = () => {
    setSelectedItem({ id, name, size });
  };

  const handleMouseUp = () => {
    setSelectedItem(null);
  };

  const zIndex = selectedItem && selectedItem.id === id ? 3 : 1;

  return (
    <div
      ref={dragRef}
      style={{ ...style, ...customStyle, opacity, zIndex }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};
