import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchBar.css';

export default class SearchBar extends Component {
	render() {
		return (
			<label>
				<span className="sr-only">Search</span>
				<input type="search" 
					className="SearchBar"
					placeholder="eg. Colosseum, Titus,..."
				    value={this.props.query} 
			    	onInput={e => this.props.updateQuery(e.target.value)} />
			</label>
		);
	}
}

SearchBar.propTypes = {
	query: PropTypes.string,
	updateQuery: PropTypes.func
}