
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


const Registro = () => {
    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
    const [validated, setValidated] = useState(false);
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
        console.log('Nombre:', nombre);
        console.log('Password:', apellido);
        console.log('Correo:', correo);
       // alert('Formulario enviado');
        handleShow()
    }

    setValidated(true);
  };
  return (
      <>
          
          <Form noValidate validated={validated} onSubmit={handleSubmit} className='container w-50 pb-4 text-white'>
               <Header  titulo="Mamma Mia" descripcion="Tenemos las mejores pizzas que podrás encontrar" />
            <h4 className="text-center text-white">Registro</h4>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
                          defaultValue=""
                            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
                          defaultValue=""
                            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="validationCustomUsername" className='mt-2'>
          <Form.Label>Correo electrónico</Form.Label>
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
              Por favor ingresa un correo.
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
              <Button type="submit" className='bg-warning'>Registrar</Button>
               <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro exitoso!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
                      <Image src="https://media.istockphoto.com/id/1194550265/es/vector/concepto-del-servicio-de-entrega-r%C3%A1pida-de-pizza-hombre-fuera-del-monitor-de-pantalla-las.jpg?s=612x612&w=0&k=20&c=n3fi1qt-QXNKq4wdXsFcvewj1VZU8gfnpU7YCks4flY=" roundedCircle  className='w-75'/>
                  <p>Felicidades, registro exitoso!</p>
                  </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
      </>
  );
}

export default Registro