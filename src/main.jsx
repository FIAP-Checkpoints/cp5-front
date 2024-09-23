import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App';
import Footer from './components/Footer';
import { Header } from './components/Header';
import '@/styles/globals.css';

export function Main() {
  const location = useLocation();
  const hideHeaderRoutes = ['/registrar-produto']; 
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <App />
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main /> 
    </BrowserRouter>
  </React.StrictMode>
);
