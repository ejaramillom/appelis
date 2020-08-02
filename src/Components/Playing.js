import React, { Component } from 'react';

class Playing extends Component {
  constructor () {
    super();

    this.state = {
      playingMovies: []
    };
  }

  componentDidMount() {
    fetch( "/playingMovies" )
      .then( res => res.json( ))
      .then( playingMovies => this.setState({ playingMovies }))
  }

  render() {
    console.log( this.state.playingMovies );
    return (
      <div className="playing">
        <h1>Actualmente en reproducción</h1>
        <ul>
          { this.state.playingMovies.map( element =>
            <li key = { element.title }>{ element.title }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Playing;
