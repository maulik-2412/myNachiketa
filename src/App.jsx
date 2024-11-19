import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Leaderboards from "./components/Leaderboards";
import Tournaments from "./components/Tournaments";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/user">User Profile</Link></li>
            <li><Link to="/leaderboards">Leaderboards</Link></li>
            <li><Link to="/tournaments">Tournaments</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to Lichess</h1>} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
