import Navegacion from './componentes/Navegacion.jsx'
 import Login from './pages/Login.jsx'
 import Registro from './pages/Registro.jsx'
import './App.css'
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Cart from './pages/Cart.jsx'
import Pizza from './pages/Pizza.jsx'
import Home from './pages/Home.jsx'
import Footer from './componentes/Footer.jsx'
import Profile from './componentes/Profile.jsx';
import NotFound from './componentes/NotFound.jsx';

function App() {
  const [currentView, setCurrentView] = useState('home');
  
  const handleShowCart = () => {setCurrentView('cart');};
  return (
    <>
      <Navegacion
        // onCartClick={handleShowCart}
      />
      {/* {currentView === 'cart' && <Cart />} */}

        <Routes>
          <Route  path="/" element={ <Home />}>
           
          </Route>
        <Route path="/register" element={
          
            <Registro />
          }>
          </Route>
        <Route path="/login" element={
          
            <Login />
          }>
          </Route>
        <Route path="/cart" element={
          
            <Cart />
          }>
        </Route>
            <Route path="/pizza/p001" element={
            <Pizza />
          }>
        </Route>
        <Route path="/profile" element={
            <Profile />
          }>
        </Route>
        
         <Route path="/404" element={
          
            <NotFound />
          }>
        </Route>
         <Route path="*" element={
          
            <NotFound />
          }>
        </Route>

        </Routes>
      <Footer fixed="bottom" />
    </>
  )
}

export default App
