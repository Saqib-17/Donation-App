// src/context/BalanceContext.jsx
import React, { createContext, useState } from 'react';

// Create the context
export const BalanceContext = createContext();

// Create the provider
export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(5500); // initial balance

  const deductBalance = (amount) => {
    setBalance((prev) => prev - amount);
  };

  return (
    <BalanceContext.Provider value={{ balance, deductBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};
