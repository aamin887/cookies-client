import axios from "axios";
import Login from "./routes/Login";
import Dash from "./routes/Dash.jsx";

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
      </BrowserRouter>
      `
    </div>
  );
}

export default App;
