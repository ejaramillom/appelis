import React, { Component } from 'react';
import axios from 'axios';

class Popular extends Component {
  constructor () {
    super();

    this.state = {
      popularMovies: []
    };

    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8b01318939795027b44c93d6cfb76940&language=en-US&page=1")
      .then(response => {
        this.setState({
          popularMovies: response.data.results,
        })
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      })
  }


    render() {
      console.log(this.state.popularMovies);
      return (
        <div className="popular">
          <h1>Películas populares</h1>
          <ul>
            {this.state.popularMovies.map(element =>
              <li key = {element.title}>{element.title}</li>
            )}
          </ul>
        </div>
      );
    }
  }

export default Popular;
