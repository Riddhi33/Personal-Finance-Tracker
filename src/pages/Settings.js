

import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import './Settings.css';

const Settings = () => {
  const { state, dispatch } = useContext(TransactionContext);
  const [preferences, setPreferences] = useState(state.settings);

  const handleSave = () => {
    dispatch({ type: 'UPDATE_SETTINGS', payload: preferences });
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Currency:
          <input
            type="text"
            value={preferences.currency || ''}
            onChange={(e) => setPreferences({ ...preferences, currency: e.target.value })}
          />
        </label>
      </div>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default Settings;



