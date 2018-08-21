import React, { Component } from 'react';
import '../styles/App.css';
import MapContainer from './MapContainer'
import SearchBar from './SearchBar'
import ListView from './ListView'
import locations from '../locations.json'
import WikipediaInfo from '../containers/WikipediaInfo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      filteredResults: locations,
      selectedLocation: undefined
    }
  }
  //updateQuery updates the query for searching results
  updateQuery(query) {
    this.setState({
      query,
      filteredResults: locations.filter(
          location => location.place.toLowerCase().indexOf(query.toLowerCase()) !== -1
        )
    })
  }
  //this function updates the list view
  updateSelectedLocation(location) {
    this.setState({
      selectedLocation: location
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Monuments in Rome</h1>
        </header>
        <main className="App-main">
          <aside className="App-aside">
        {/* when searching for a word the list updates accordingly*/}
            <SearchBar  
              query={this.state.query}
              updateQuery={query => this.updateQuery(query)}
               />
            <div aria-live="polite" aria-atomic="true">
              {this.state.query && (
                <p className="sr-only">Locations matching {this.state.query}</p>
                )}
              <ListView  markers={this.state.filteredResults}
                selectedLocation={this.state.selectedLocation}
                onLocationClick={location => this.updateSelectedLocation(location)} />
            </div> 
          </aside>
          <div className="App-map">
            {/* the aside shows to the user extra info on the selected location */}
            {this.state.selectedLocation && (
            <aside className="App-info">
              <WikipediaInfo marker={this.state.selectedLocation} />
              <button className="App-closeInfo" onClick={() => this.updateSelectedLocation()}>
                <span className="sr-only">Close</span>
                <i aria-hidden="true">&times;</i>
              </button>
            </aside>
            )}
             <div role="application" className="App-content">
                <MapContainer 
                  markers={this.state.filteredResults}
                  selectedLocation={this.state.selectedLocation}
                  onLocationClick={location => this.updateSelectedLocation(location)} />
              </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
