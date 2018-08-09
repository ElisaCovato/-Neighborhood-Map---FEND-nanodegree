import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
	render() {
		return (
			<input type="search" 
			   value={this.props.query} 
			   onInput={e => this.props.updateQuery(e.target.value)} />
		);
	}
}

SearchBar.propTypes = {
	query: PropTypes.string,
	updateQuery: PropTypes.func
}