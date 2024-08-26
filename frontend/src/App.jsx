import Navegacion from './componentes/Navegacion.jsx'
import Home from './componentes/Home.jsx'
import Footer from './componentes/Footer.jsx'
// import Login from './componentes/Login.jsx'
// import Registro from './componentes/Registro.jsx'
import Cart from './componentes/Cart.jsx'
import './App.css'
import { useState, useEffect } from 'react';
import Pizza from './componentes/Pizza.jsx'


function App() {
  const [currentView, setCurrentView] = useState('home');
  const [pizza, setPizza] = useState('');
  
  
  //Consumo de API
  const urlPizza = "http://localhost:5001/api/pizzas/"

  const getData = async () => {
    const response = await fetch(urlPizza);
    const dataPizzas = await response.json();

    console.log('dataPizzas'   , dataPizzas);  // console.log para ver los datos en consola
    setPizza(dataPizzas)
   
  };

  useEffect(() => {
    getData();
  }, []);
  
  const handleShowCart = () => {setCurrentView('cart');};
  return (
    <>
      <Navegacion onCartClick={handleShowCart} />
       {currentView === 'cart' && <Cart/>}
      <Home pizza={pizza} />
   {/* <Login />
      <Registro />
      <Cart/> */}
      <Pizza />
      <Footer />
    </>
  )
}

export default App
