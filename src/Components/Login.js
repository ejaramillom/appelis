import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="email" className="mr-sm-2">Correo elecrónico</Label>
        <Input type="email" name="email" id="email" placeholder="Escribe aqui tu email" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="password" className="mr-sm-2">Constraseña</Label>
        <Input type="password" name="password" id="password" placeholder="No se la digas a nadie!" />
      </FormGroup>
      <Button>Ingresar</Button>
    </Form>
    );
  }
}

export default Login;
