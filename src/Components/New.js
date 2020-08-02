import React, { Component } from 'react';

class New extends Component {
  constructor () {
    super();

    this.state = {
      newMovies: []
    };

  }

  componentDidMount() {
    fetch( "/newMovies" )
      .then( res => res.json( ))
      .then( newMovies => this.setState({ newMovies }))
  }

  render() {
    console.log( this.state.newMovies );
    return (
      <div className="new">
        <h1>Nuevas películas</h1>
        <ul>
          { this.state.newMovies.map( element =>
            <li key = { element.title }>{ element.title }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default New;
