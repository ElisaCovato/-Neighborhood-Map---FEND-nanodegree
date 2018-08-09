import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ListView.css';

export default class ListView extends Component {
	render() {
		return (
			<ul className="ListView">
				{this.props.markers.map( marker => (
					<li class="ListView-item">
						{marker.place}
					</li>
				))}
			</ul>
		);
	}
}

ListView.propTypes = {
	markers: PropTypes.object
}