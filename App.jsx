import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { UIProvider } from './context/UIContext';

function App() {
  return (
    <UIProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </Layout>
      </Router>
    </UIProvider>
  );
}

export default App;