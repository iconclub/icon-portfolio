import React from "react";
import ReactDOM from "react-dom/client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./index.css";
import { App } from "./App";
import { MainProvider } from "./contexts/MainProvider";
import { PropertyProvider } from "./contexts/PropertyProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <MainProvider>
        <PropertyProvider>
          <App />
        </PropertyProvider>
      </MainProvider>
    </DndProvider>
  </React.StrictMode>
);
