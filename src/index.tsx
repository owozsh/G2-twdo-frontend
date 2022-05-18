import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Today from "./pages/today";

import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="today" replace />} />
      <Route path="today" element={<Today />} />
    </Routes>
  </BrowserRouter>
);
