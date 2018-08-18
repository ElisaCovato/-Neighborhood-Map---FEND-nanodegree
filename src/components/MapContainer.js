import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const SELECTED_ICON = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

// This component deals with the Map container and its functionalities
export class MapContainer extends Component {
	render() {
		const {google, markers, selectedLocation, onLocationClick} = this.props;
		return (
			<Map 
				google={google} 
				zoom={15}
				initialCenter={{
					lat: 41.890251,
					lng: 12.492373
				}}
				>
				
				{markers.map( marker => {
										
					return marker === selectedLocation || (

					<Marker
						key={marker.place}
						position={marker}
						name={marker.place}
						title={marker.place}
						animation={marker === selectedLocation ? window.google.maps.Animation.BOUNCE : undefined}
						onClick={() => onLocationClick(marker)}
					>
					</Marker>
					);
					}

				)}

				{markers
					.map(marker => (
						<InfoWindow
							key={`${marker.place}-iw`}
							visible={marker === selectedLocation}
							onClose={() => onLocationClick()}
							position={marker}>
							<div>
								<h1>Coucou!!!</h1>
							</div>
						</InfoWindow>

					)
				)}
				
			</Map>
		);
	}
}

MapContainer.propTypes = {
	markers: PropTypes.object
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyBYjl4Wjxiqjg_HUk5KaN0l5BogIe10mSQ")
})(MapContainer)