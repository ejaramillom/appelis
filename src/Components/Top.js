import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Row, Col, Form
} from 'reactstrap';

class Top extends Component {
constructor () {
  super();

  this.state = {
    topMovies: [],
    poster_path: "",
    popularity: "",
    title: "",
    overview: ""
  };
}

onSubmit = ( event, element ) => {
  event.preventDefault();
  fetch( "/add", {
    method: "POST",
    body: JSON.stringify( this.state ),
    headers: { "Content-Type": "application/json" }
  })
  .then( res => {
    if ( res.status === 200 ){
      this.props.history.push( "/topMovies" );
      alert( "Movie added to the favorites list!" );
      console.log( "Succesfully added" );
    } else {
      const err = new Error( res.error );
      console.log( err );
      throw err;
    }
  })
  .catch( err => {
    console.error( err );
    alert( "Error saving favorite movie. Please, try again!" )
  })
}

componentDidMount() {
  fetch( "/topMovies" )
    .then( res => res.json( ))
    .then( topMovies => this.setState({ topMovies }))
}

  render() {
    console.log( this.state.topMovies[ 0 ] );
    return (
      <div className = "top">
        <h1>Mejores puntuaciones</h1>
        <Row>
          { this.state.topMovies.map( element =>
          <Col sm = "4">
            <Form onSubmit = { this.onSubmit } >
              <Card>
                <CardImg top width = "80%" src = { `https://image.tmdb.org/t/p/original${ element.poster_path }` }  alt = { element.title } type = "poster_path" name = "poster_path" id = "poster_path" />
                <CardBody>
                  <CardTitle key = { element.title } type = "title" name = "title" id = "title">{ element.title }</CardTitle>
                  <CardSubtitle type = "popularity" name = "popularity" id = "popularity">Popularity: { element.popularity }</CardSubtitle>
                  <CardText type = "overview" name = "overview" id = "overview">{ element.overview }</CardText>
                  <Button type = "submit" value = "submit" onClick = {() =>
                    this.setState({
                      poster_path: element.poster_path,
                      title: element.title,
                      popularity: element.popularity,
                      overview: element.overview
                    })}>Agregar a favoritos</Button>
                </CardBody>
              </Card>
            </Form>
          </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default Top;
