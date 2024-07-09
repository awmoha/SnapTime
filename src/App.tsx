import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Tabell from "./pages/Tabell";
import Navbar from "./Navbar/NavBar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tabell" element={<Tabell />} />
          {/* Lägg till fler routes här */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
