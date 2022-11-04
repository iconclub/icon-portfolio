import React from "react";
import styled from "styled-components";

import { Sidebar } from "./components/sidebar/Sidebar";
import { Main } from "./components/main/Main";

const SApp = styled.div`
  width: 100%;
  display: flex;
`;

export const App = () => {
  return (
    <SApp className="app">
      <Sidebar />
      <Main />
    </SApp>
  );
};
