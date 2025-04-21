import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import History from './pages/History';
import { BalanceProvider } from './contexts/BalanceContext';

function App() {
  return (
    <BalanceProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </BalanceProvider>
  );
}

export default App;
