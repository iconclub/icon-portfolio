import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import { ItemTypes, DefaultItemData } from "../../constants";
import { useMainContext } from "../../contexts/MainContext";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { Block } from "../items/Block";
import { Divider } from "../items/Divider";
import { Image } from "../items/Image";
import { Input } from "../items/Input";
import { Text } from "../items/Text";
import { Link } from "../items/Link";

const getItemComponent = (name, size, row, col, cellWidth, cellHeight, data, setData) => {
  let customStyle = {};
  if (row || col) {
    customStyle = {
      margin: 0,
      position: "absolute",
      top: row * cellHeight,
      left: col * cellWidth,
    };
  }

  switch (name) {
    case ItemTypes.Block: {
      if (!data) setData(DefaultItemData.Block);
      return <Block size={size} customStyle={customStyle} data={data} />;
    }
    case ItemTypes.Input: {
      if (!data) setData(DefaultItemData.Input);
      return <Input size={size} customStyle={customStyle} data={data} setData={setData} />;
    }
    case ItemTypes.Text: {
      if (!data) setData(DefaultItemData.Text);
      return <Text size={size} customStyle={customStyle} data={data} />;
    }
    case ItemTypes.Link: {
      if (!data) setData(DefaultItemData.Link);
      return <Link size={size} customStyle={customStyle} data={data} />;
    }
    case ItemTypes.Image: {
      if (!data) setData(DefaultItemData.Image);
      return <Image size={size} customStyle={customStyle} data={data} />;
    }
    case ItemTypes.Divider: {
      if (!data) setData(DefaultItemData.Divider);
      return <Divider size={size} customStyle={customStyle} data={data} />;
    }
    default:
      return null;
  }
};

export const Card = ({ id, name, size, row, col, prevData }) => {
  const { setItems, selectedItem, setSelectedItem } = useMainContext();
  const { setIsShowing, setShowingItem, layout } = usePropertyContext();

  const [data, setData] = useState(prevData);

  const isFromSidebar = id.includes("sidebar");
  const style = {
    position: isFromSidebar ? "static" : "absolute",
    margin: isFromSidebar ? "16px 0px" : 0,
    cursor: "grab",
  };

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.Card,
      item: { id },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();

        if (dropResult) {
          if (dropResult.isRemoved) {
            setItems((prev) => prev.filter((ele) => ele.id !== id));
          } else {
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
  const itemComponent = getItemComponent(
    name,
    size,
    row,
    col,
    layout.cellWidth,
    layout.cellHeight,
    data,
    setData
  );

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
