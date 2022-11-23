import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import { CELL_HEIGHT, CELL_WIDTH, ItemTypes } from "../../constants";
import { useMainContext } from "../../contexts/MainContext";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { Block } from "../items/Block";
import { Image } from "../items/Image";
import { Input } from "../items/Input";
import placeholderImg from "../../assets/placeholder.jpg";

const getItemComponent = (name, size, row, col, data, setData) => {
  let customStyle = {};
  if (row || col) {
    customStyle = {
      margin: 0,
      position: "absolute",
      top: row * CELL_HEIGHT,
      left: col * CELL_WIDTH,
    };
  }

  switch (name) {
    case ItemTypes.Input: {
      if (!data) setData({ text: "" });
      const handleOnInput = (e) => {
        setData({ text: e.target.value });
      };
      return (
        <Input size={size} customStyle={customStyle} data={data} handleOnInput={handleOnInput} />
      );
    }
    case ItemTypes.Block: {
      if (!data) setData({ backgroundColor: "#FAD964" });
      return <Block size={size} customStyle={customStyle} data={data} />;
    }
    case ItemTypes.Image: {
      if (!data) setData({ src: placeholderImg });
      return <Image size={size} customStyle={customStyle} data={data} />;
    }
    default:
      return null;
  }
};

export const Card = ({ id, name, size, row, col, prevData }) => {
  const { setItems, selectedItem, setSelectedItem } = useMainContext();
  const { setIsShowing, setShowingItem } = usePropertyContext();

  const [data, setData] = useState(prevData);

  const isFromSidebar = id.includes("sidebar");
  const style = {
    position: isFromSidebar ? "static" : "absolute",
    margin: isFromSidebar ? "16px 0px" : 0,
    cursor: "grab",
    width: CELL_WIDTH * size[1],
    height: CELL_HEIGHT * size[0],
  };

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.Card,
      item: { id },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (dropResult) {
          const pos = [dropResult.row, dropResult.col];
          const processedId = isFromSidebar ? uuidv4() : id;
          const newItem = {
            id: processedId,
            name,
            size,
            pos,
            data,
          };

          if (!isFromSidebar) {
            setItems((prevItems) => prevItems.filter((ele) => ele.id !== id));
          }

          // Moving item instead of inserting
          setItems((prevItems) => [...prevItems, newItem]);

          setShowingItem({ id: processedId, name, size, pos, data });
        }

        setSelectedItem(null);
      },
      collect: (monitor) => ({
        cursor: "grab",
        opacity: monitor.isDragging() ? 0.8 : 1,
      }),
    }),
    [id, name, size, data]
  );

  const handleMouseDown = () => {
    const pos = [row, col];
    setSelectedItem({ id, name, size, data });
    setShowingItem({ id, name, size, pos, data });
    setIsShowing(true);
  };

  const handleMouseUp = () => {
    setSelectedItem(null);
  };

  const zIndex = selectedItem && selectedItem.id === id ? 3 : 1;
  const itemComponent = getItemComponent(name, size, row, col, data, setData);

  return (
    <div
      ref={dragRef}
      style={{ ...style, opacity, zIndex }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {itemComponent}
    </div>
  );
};
