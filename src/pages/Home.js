import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home">
    <h1>Welcome to Personal Finance Tracker</h1>
    <nav>
      <ul>
        <li><Link to="/add-transaction">Add Transaction</Link></li>
        <li><Link to="/transactions-list">Transactions List</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  </div>
);

export default Home;
