import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';

// eslint-disable-next-line react/prop-types
const Navegacion = ({onCartClick}) => {
    const[token, setToken] =useState(false)
    const total = 25000;
    const handleChange = (token) => {
        console.log('token',token)
    setToken({ token: !token});
  }
    return (
        <Navbar bg="dark" data-bs-theme="dark" className='navegacion'>
        <Container>
          <Link to="/" className='decoration-none'>
            <Spinner role="status" className='mx-3'>
              <h3 className='pizza-spinner'> 🍕</h3>
             </Spinner>
            <Navbar.Brand href="#home"> Mamma Mía</Navbar.Brand>        

          </Link>
              <Nav
              className="me-auto my-4 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
              >
                <Link to="./" className='pt-2'> <Button variant="outline-warning" className="text-white">🍕 Home</Button></Link>

                <Nav hidden={token ?  false : true} onChange={handleChange}>
                  <Link to="./profile" className='mx-3 pt-2'> <Button variant="outline-warning" className="text-white">🔒 Profile</Button></Link>
                  <Link to="./" className='pt-2'> <Button variant="outline-warning" onClick={() => setToken(!token)} className="text-white">🔒 Logout</Button></Link>
              </Nav>
              <Nav hidden={token ?  true : false} onChange={handleChange}>
                <Link to="./login" className='mx-3 pt-2'> <Button variant="outline-warning" onClick={() => setToken(!token)}  className="text-white">🔐 Login</Button></Link>
                <Link to="./register" className='pt-2'> <Button variant="outline-warning" className="text-white">🔐 Register</Button></Link>
              </Nav>
              </Nav>      
          <Nav className='justify-content-end ms-auto' >
            <Link to="./cart">
              <Button variant="outline-light" onClick={onCartClick}>🛒 Total: $ {total.toLocaleString()}</Button>
            {/* <Button variant="outline-light">
              �� Cart
            </Button> */}
          </Link>
                  {/* <Nav.Link href="#action6" > </Nav.Link> */}
              </Nav>         
          </Container>
        </Navbar>
    )
    
}
export default Navegacion