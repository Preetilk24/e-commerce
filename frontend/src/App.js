import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <ToastContainer />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App; 