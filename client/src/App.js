// src/App.js
import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About'; // Importowanie komponentu About z folderu pages

const Home = () => <h2>Homes</h2>;
const Users = () => <h2>Userssss</h2>;

function App() {
  return (
    <div className="bg-gray-500">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
