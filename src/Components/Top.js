import React, { Component } from 'react';

class Top extends Component {
constructor () {
  super();

  this.state = {
    topMovies: []
  };
}

componentDidMount() {
  fetch( "/" )
    .then( res => res.json())
    .then( topMovies => this.setState({ topMovies }))
}

  render() {
    console.log(this.state.topMovies);
    return (
      <div className="top">
        <h1>Mejores puntuaciones</h1>
        <ul>
          {this.state.topMovies.map(element =>
            <li key = {element.title}>{element.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Top;
