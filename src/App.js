import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddTransaction from './pages/AddTransaction';
import TransactionsList from './pages/TransactionsList';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import { TransactionProvider } from './context/TransactionContext';

const App = () => (
  <TransactionProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/transactions-list" element={<TransactionsList />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </TransactionProvider>
);

export default App;
