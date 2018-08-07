import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import MapContainer from './MapContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighborhood App</h1>
        </header>
        <MapContainer></MapContainer>
      </div>
    );
  }
}

export default App;
