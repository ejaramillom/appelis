import React, { Component } from 'react';

class Favorite extends Component {
  constructor () {
    super();

    this.state = {
      favoriteMovies: []
    };
  }

  componentDidMount() {
    fetch( "/favoriteMovies" )
      .then( res => res.json( ))
      .then( favoriteMovies => this.setState({ favoriteMovies }))
  }

  render() {
    console.log( this.state.favoriteMovies );
    return (
      <div className="favorite">
        <h1>Mis favoritas</h1>
        <ul>
          { this.state.favoriteMovies.map( element =>
            <li key = { element.title }>{ element.title }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Favorite;
