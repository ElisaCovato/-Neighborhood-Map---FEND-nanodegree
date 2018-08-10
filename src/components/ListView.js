import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ListView.css';

export default class ListView extends Component {
	render() {
		const {markers, selectedLocation, onLocationClick} = this.props
		return (
			<ul className="ListView">
				{markers.map( marker => {
					const selectedClassName = (marker === selectedLocation) ? ' ListView-item-selected' : ''
					return (
						<li className={`ListView-item${selectedClassName}`}>
							<button className="ListView-button" type="button" onClick={() => onLocationClick(marker)}>
								{marker.place}
							</button>
						</li>
					);
				})}
			</ul>
		);
	}
}

ListView.propTypes = {
	markers: PropTypes.object,
	selectedLocation: PropTypes.object,
	onLocationClick: PropTypes.func,
}