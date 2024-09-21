import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { AuthContex } from '../context/AuthContex';

const Cart = () => {
  const { cart, totalPrice, decreaseQuantity, addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContex);
console.log('cart', cart)
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <ListGroup>
        {cart.map(item => (
          <ListGroup.Item
            className="d-flex align-items-center justify-content-between"
            style={{ padding: '10px' }}
             key={item.id}
            >
            <div className="d-flex align-items-center">
              <img
                src={item.img}
                alt={item.name}
                style={{ width: '80px', height: '80px', marginRight: '15px' }}
              />
              <div>
                <h6>Pizza {item.name}</h6>
                <p>Precio: ${item.price}</p>
                <p>
                  {item.count > 0 && (
                    <>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </Button>
                      <span style={{ marginLeft: '10px' }}>Cantidad: {item.count}{ (' ') } </span>
                    </>
                  )}
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => addToCart(item)}
                    style={{ marginRight: '10px' }}
                  >
                    +
                  </Button>
                </p>
              </div>
            </div>
            <div>
              <p >Total: ${item.price * item.count}</p>
            </div>
        </ListGroup.Item>
            ))}
      </ListGroup>
      <h3 className='text-white py-3 bg-dark px-3 text-end'>Total Precio: ${totalPrice}</h3>
        <Button
        variant={`${isLoggedIn ? 'success' : 'secondary'}`}
     
        // onClick={() => addToCart(item)}
        style={{ marginRight: '10px' }}
        className={`${isLoggedIn ? 'inline w-full' : 'disabled'}`}
                  >
                  Pagar
                  </Button>
    </div>
  );
};

export default Cart;
