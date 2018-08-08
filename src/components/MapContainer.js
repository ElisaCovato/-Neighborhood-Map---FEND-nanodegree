import React from 'react';
import { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// This component deals with the Map container and its functionalities
export class MapContainer extends Component {
	render() {
		return (
			<Map 
				google={this.props.google} 
				zoom={14}
				initialCenter={{
					lat: 41.890251,
					lng: 12.492373
				}}
				>
				<Marker onClick={this.onMarkerClick}
					name={'Current location'} />
				<InfoWindow onClose={this.onInfoWindowClose}>
					<div>
					</div>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyBYjl4Wjxiqjg_HUk5KaN0l5BogIe10mSQ")
})(MapContainer)