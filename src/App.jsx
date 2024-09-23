import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '@/screens/HomePage';
import ProductsPage from '@/screens/ProductsPage';
import LoginPage from '@/screens/LoginPage';
import RegisterProductPage from '@/screens/RegisterProductPage';
import { ErrorPage } from './screens/Error';
import { Toaster } from "./components/ui/toaster";
import About from './screens/AboutPage';

import '@/styles/globals.css';


function PrivateRoute({ children }) {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route 
          path="/register-product" 
          element={
            <PrivateRoute>
              <RegisterProductPage />
            </PrivateRoute>
          } 
        />
      </Routes>
      <Toaster />
    </>
  );
}
