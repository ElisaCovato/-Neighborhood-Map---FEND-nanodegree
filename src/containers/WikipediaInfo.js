import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import {fetchInfo} from '../api/wikipedia';

export default class WikipediaInfo extends Component {

	componentWillMount() {
		console.log('Sending request to Wikipedia')
		fetchInfo(this.props.marker.article).then(info => {
			console.log('Got the response')
			this.setState({
				info
			})
		})
	}
	render() {
		return (<h1>Hey hey!</h1>)
	}
}

WikipediaInfo.propTypes = {
	marker: PropTypes.object
}

