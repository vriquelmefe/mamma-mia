
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Registro = () => {
    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
        console.log('Nombre:', nombre);
        console.log('Password:', apellido);
        console.log('Correo:', correo);
        alert('Formulario enviado');
    }

    setValidated(true);
  };
  return (
      <>
          
          <Form noValidate validated={validated} onSubmit={handleSubmit} className='container w-50 pb-4'>
               <Header  titulo="Mamma Mia" descripcion="Tenemos las mejores pizzas que podrás encontrar" />
            <h4 className="text-center text-white">Login</h4>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
                          defaultValue=""
                            onChange={(e) => setNombre(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
                          defaultValue=""
                            onChange={(e) => setApellido(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Correo</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Correo"
              aria-describedby="inputGroupPrepend"
                              required
                                onChange={(e) => setCorreo(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a correo.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
      </>
  );
}

export default Registro