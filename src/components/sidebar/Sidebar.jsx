import React from "react";
import styled from "styled-components";

import { Card } from "./Card";

const SSidebar = styled.div`
  width: 30%;
  min-width: 300px;
  height: 100vh;
  position: sticky;
  top: 0px;
  left: 0px;
  background-color: black;
  overflow: scroll;
  padding: 8px;
`;

export const Sidebar = () => {
  return (
    <SSidebar>
      <Card name={"Input"} size={[4, 1]} />
      <Card name={"Textarea"} size={[8, 2]} />
    </SSidebar>
  );
};
