import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import MapContainer from './MapContainer'
import SearchBar from './SearchBar'
import ListView from './ListView'
import locations from '../locations.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      filteredResults: locations,
      selectedLocation: undefined
    }
  }
  updateQuery(query) {
    this.setState({
      query,
      filteredResults: locations.filter(
          location => location.place.toLowerCase().indexOf(query.toLowerCase()) !== -1
        )
    })
  }
  updateSelectedLocation(location) {
    this.setState({
      selectedLocation: location
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighborhood App</h1>
        </header>
        <main className="App-main">
          <aside className="App-aside">
            <SearchBar 
              query={this.state.query}
              updateQuery={query => this.updateQuery(query)}
               />
            <ListView  markers={this.state.filteredResults}
              selectedLocation={this.state.selectedLocation}
              onLocationClick={location => this.updateSelectedLocation(location)} />
          </aside>
          <div role="application" className="App-content">
            <MapContainer 
              markers={this.state.filteredResults}
              selectedLocation={this.state.selectedLocation}
              onLocationClick={location => this.updateSelectedLocation(location)} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
