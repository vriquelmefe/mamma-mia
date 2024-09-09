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

  return (
<>
        <Navegacion />
        <Routes>
          <Route  path="/" element={ <Home />}/>
          <Route path="/register" element={<Registro />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/pizza/p001" element={<Pizza />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/404" element={<NotFound />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      <Footer fixed="bottom" />
    </>
  )
}

export default App
