import React, { Component } from 'react';
import axios from 'axios';

class New extends Component {
  constructor () {
    super();

    this.state = {
      newMovies: []
    };

    axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=8b01318939795027b44c93d6cfb76940&language=en-US&page=1")
      .then(response => {
        this.setState({
          newMovies: response.data.results,
        })
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      })
  }


    render() {
      console.log(this.state.newMovies);
      return (
        <div className="new">
          <h1>Nuevas películas</h1>
          <ul>
            <li>Pelis</li>
            {this.state.newMovies.map(element =>
              <li key = {element.title}>{element.title}</li>
            )}
          </ul>
        </div>
      );
    }
  }

export default New;
