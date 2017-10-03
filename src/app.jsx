import React, { Component } from 'react';
// axious needs to be defined even after npm install
const axios = require("axios");
import TopSpot from "./topspot";

var theStrain = {
  background: "linear-gradient(15deg, #870000 , #190a05)"
};
var itsJamaicaMahn = {
  background: "linear-gradient(red, yellow, green)"
};
var itsJamaicaMahn2 = {
  background: "radial-gradient(circle, red, yellow, green)"
};
var itsJamaicaMahn3 = {
  background: "repeating-radial-gradient(red, yellow 10%, green 15%)"
};
var blueIsBackground = {
  background: "linear-gradient(20deg, #0575E6 , #021B79)"
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    }
  }

  componentWillMount() {
    // Here we're simply invoking the axios object, specifically
    axios
      // the .get funtion. Here we pass teh URL of our external service.
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      // Here the first fulfill callback is setup.
      // This callback simply takes an HTTP response and returns the data property  
      .then(response => response.data)
      // the second fulfill callback uses React to setState
      // to merge teh provided object with the current object assigned to this.state (which was assigned via constructor)  
      .then(topspots => this.setState({ topspots }));
  }


  render() {
    return (
      <div className="app">
        <div className="container" style={blueIsBackground} >
          <br />
          <div className="jumbotron" style={itsJamaicaMahn} >
            <h1>San Diego Top Spots</h1>
            <p>A list of top 30 places to see in San Diego, California</p>
          </div>
          {this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location} />
          ))
          }
        </div>
      </div>
    );
  }
}

export default App;