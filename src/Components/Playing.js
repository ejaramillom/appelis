import React, { Component } from 'react';
import axios from 'axios';

class Playing extends Component {
  constructor () {
    super();

    this.state = {
      playingMovies: []
    };

    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8b01318939795027b44c93d6cfb76940&language=en-US&page=1")
      .then(response => {
        this.setState({
          playingMovies: response.data.results,
        })
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      })
  }


    render() {
      console.log(this.state.playingMovies);
      return (
        <div className="playing">
          <h1>Actualmente en reproducción</h1>
          <ul>
            <li>Pelis</li>
            {this.state.playingMovies.map(element =>
              <li key = {element.title}>{element.title}</li>
            )}
          </ul>
        </div>
      );
    }
  }

export default Playing;
