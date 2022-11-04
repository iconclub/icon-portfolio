import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../../drag-types";
import { cellWidth, cellHeight } from "../../constants";
import { useMainContext } from "../../contexts/MainContext";

const SCard = styled.div`
  width: ${(props) => props.size[0] * cellWidth}px;
  height: ${(props) => props.size[1] * cellHeight}px;
  background-color: red;
  cursor: grab;
  margin: 16px 0px;
`;

export const Card = ({ name, size }) => {
  const { setItems, setSelectedItem } = useMainContext();

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.Card,
      item: { name, size },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          setItems((prevItems) => [
            ...prevItems,
            {
              name,
              size,
              coordinates: [dropResult.row, dropResult.col],
            },
          ]);
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.8 : 1,
      }),
    }),
    []
  );

  const handleMouseDown = () => {
    setSelectedItem({ name, size });
  };

  const handleMouseUp = () => {
    setSelectedItem(null);
  };

  return (
    <SCard
      ref={dragRef}
      size={size}
      style={{ opacity }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};
