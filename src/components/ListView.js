import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListView extends Component {
	render() {
		return (
			<ul>
				{this.props.markers.map( marker => (
					<li>
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