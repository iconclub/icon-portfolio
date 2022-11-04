import React from "react";
import styled from "styled-components";

export const overlayTypes = {
  Allowed: "ALLOWED",
  Denied: "DENIED",
};

const getBackgroundType = (type) => {
  switch (type) {
    case overlayTypes.Allowed:
      return "#5cb85c";
    case overlayTypes.Denied:
      return "#ff4444";
    default:
      return "white";
  }
};

const SOverlay = styled.div`
  background-color: ${(props) => getBackgroundType(props.type)};
  width: 100%;
  height: 100%;
`;

export const Overlay = ({ type }) => {
  return <SOverlay type={type} />;
};
