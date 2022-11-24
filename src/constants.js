import placeholderImg from "./assets/placeholder.jpg";

export const NUMBER_OF_ROWS = 20;
export const NUMBER_OF_COLUMNS = 15;
export const CELL_WIDTH = 60;
export const CELL_HEIGHT = 60;

export const ItemTypes = {
  Card: "CARD",
  Block: "BLOCK",
  Input: "INPUT",
  Textarea: "TEXTAREA",
  Image: "IMAGE",
  Text: "TEXT",
  Divider: "DIVIDER",
};

export const DefaultItemData = {
  Block: {
    backgroundColor: "#FAD964",
  },
  Input: {
    text: "",
    fontSize: 20,
  },
  Image: {
    src: placeholderImg,
  },
};
