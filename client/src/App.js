// src/App.js
import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UUID from "./pages/UUID"; // Importowanie komponentu About z folderu pages

const Home = () => <h2>Homes</h2>;
const Users = () => <h2>Userssss</h2>;

function App() {
  return (
    <div>
      <nav className="w-100 h-20 bg-gray-500 flex justify-center">
        <div className="flex gap-x-40">
          <Link to="/">Home</Link>
          <Link to="/about">UUID</Link>
          <Link to="/users">RSA</Link>
          <Link to="/password-generator">Password generator</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<UUID />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/password-generator" element={<PasswordGenerator />} /> */}
      </Routes>
    </div>
  );
}

export default App;
