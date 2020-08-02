import React, { Component } from 'react';

class Popular extends Component {
  constructor () {
    super();

    this.state = {
      popularMovies: []
    };
  }

  componentDidMount() {
    fetch( "/popularMovies" )
      .then( res => res.json( ))
      .then( popularMovies => this.setState({ popularMovies }))
  }

  render() {
    console.log(this.state.popularMovies);
    return (
      <div className="popular">
        <h1>Películas populares</h1>
        <ul>
          { this.state.popularMovies.map( element =>
            <li key = { element.title }>{ element.title }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Popular;
