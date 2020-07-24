import React, { Component } from 'react';
import axios from 'axios';

class Top extends Component {
constructor () {
  super();

  this.state = {
    topMovies: []
  };

  axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=8b01318939795027b44c93d6cfb76940&language=en-US&page=1")
    .then(response => {
      this.setState({
        topMovies: response.data.results,
      })
      console.log(response);
    })
    .catch(error =>{
      console.log(error);
    })
}


  render() {
    console.log(this.state.topMovies);
    return (
      <div className="shopping-list">
        <h1>Mejores puntuaciones</h1>
        <ul>
          <li>Pelis</li>
          {this.state.topMovies.map(element =>
            <li key = {element.title}>{element.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Top;
