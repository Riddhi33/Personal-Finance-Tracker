import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionList = () => {
  const { state, dispatch } = useContext(TransactionContext);

  return (
    <div>
      <h3>Transaction List</h3>
      <ul>
        {state.transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount} ({transaction.category})
            <button onClick={() => dispatch({ type: 'DELETE_TRANSACTION', payload: transaction.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
