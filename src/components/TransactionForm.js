import React, { useState, useContext, useRef } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionForm = () => {
  const { dispatch } = useContext(TransactionContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Income');
  const descriptionInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category
    };
    dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });
    setDescription('');
    setAmount('');
    descriptionInputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={descriptionInputRef}
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
        <option value="Savings">Savings</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
