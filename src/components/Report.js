import React, { useContext, useMemo } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const Report = () => {
  const { state } = useContext(TransactionContext);

  const totalIncome = useMemo(() => {
    return state.transactions
      .filter(txn => txn.category === 'Income')
      .reduce((acc, txn) => acc + txn.amount, 0);
  }, [state.transactions]);

  const totalExpenses = useMemo(() => {
    return state.transactions
      .filter(txn => txn.category === 'Expense')
      .reduce((acc, txn) => acc + txn.amount, 0);
  }, [state.transactions]);

  const totalSavings = useMemo(() => {
    return state.transactions
      .filter(txn => txn.category === 'Savings')
      .reduce((acc, txn) => acc + txn.amount, 0);
  }, [state.transactions]);

  return (
    <div>
      <h3>Summary Report</h3>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Total Savings: ${totalSavings}</p>
    </div>
  );
};

export default Report;
