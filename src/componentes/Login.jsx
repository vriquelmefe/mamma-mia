import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header from './Header';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
        console.log('Correo:', correo);
        console.log('Password:', password);
        alert('Formulario enviado');
    }

    setValidated(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='container w-50 text-white'>
        <Header titulo="Mamma Mia" descripcion="Tenemos las mejores pizzas que podrás encontrar" />
        <h4 className="text-center text-white">Login</h4>
        <Row className="mb-3">
          <Form.Group controlId="validationCustomUsername" className='my-3'>
            <Form.Label>Correo electrónico</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setCorreo(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa el correo.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formGroupPassword" className='my-2'>
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa la contraseña.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Aceptar términos y condiciones"
            feedback="Debes aceptar antes de enviar."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit" className='bg-warning'>Ingresar</Button>
      </Form>
    </>
  );
}

export default Login;
