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

class Register extends Component {

  constructor ( props ) {
    super( props );
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleInputChange = ( event ) => {
    const { value, name } = event.target;
    this.setState({
      [ name ]: value
    });
  }

  onSubmit = ( event ) => {
    event.preventDefault();
    fetch( "/register", {
      method: "POST",
      body: JSON.stringify( this.state ),
      headers: { "Content-Type": "application/json" }
    })
    .then( res => {
      if ( res.status === 200 ){
        this.props.history.push( "/" )
      } else {
        const error = new Error( res.error );
        throw error;
      }
    })
    .catch( err => {
      console.error( err );
      alert( "Error registering. Please, try again!")
    })
  }

  render() {
    return (
      <div className="register">
        <h1>Registrarse</h1>
          <Form inline onSubmit = { this.onSubmit } >
          <FormGroup className = "mb-2 mr-sm-2 mb-sm-0">
            <Label for = "name" className = "mr-sm-2">Nombre</Label>
            <Input type = "name" name = "name" id = "name" placeholder = "Escribe aqui tu nombre" value = { this.state.name } onChange = { this.handleInputChange } required/>
          </FormGroup>
          <FormGroup className = "mb-2 mr-sm-2 mb-sm-0">
            <Label for = "email" className = "mr-sm-2">Correo elecrónico</Label>
            <Input type = "email" name = "email" id = "email" placeholder = "Escribe aqui tu email" value = { this.state.email } onChange = { this.handleInputChange } required/>
          </FormGroup>
          <FormGroup className = "mb-2 mr-sm-2 mb-sm-0">
            <Label for = "password" className = "mr-sm-2">Constraseña</Label>
            <Input type = "password" name = "password" id = "password" placeholder = "No se la digas a nadie!" value = { this.state.password } onChange = { this.handleInputChange } required/>
          </FormGroup>
          <Button type = "submit" value = "submit" >Registrarse</Button>
        </Form>
      </div>
    );
  }
}


export default Register;
