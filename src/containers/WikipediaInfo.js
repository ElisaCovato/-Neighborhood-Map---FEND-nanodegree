import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import {fetchInfo} from '../api/wikipedia';

export default class WikipediaInfo extends Component {
	state = {
		info: {},
		isLoading: true
	}
	componentDidMount() {
		this.fetchInfo()
	}	
	componentDidUpdate(prevProps) {
		if (this.props.marker.article != prevProps.marker.article) {
			this.fetchInfo()
		}
	}
	fetchInfo() {
		fetchInfo(this.props.marker.article).then(info => {
			this.setState({
				info,
				isLoading: false
			})
		})
	}
	render() {
		if (this.state.isLoading) {
			return (<p>Loading...</p>)
		}
		else {
			return (<article>
				<h2>
					<a href={this.state.info.link}>
					{this.state.info.title}
					</a>
				</h2>
				<img src={this.state.info.image} alt=""/>
				<p>{this.state.info.extract}</p>
				</article>)
		}
		
	}
}

WikipediaInfo.propTypes = {
	marker: PropTypes.object
}

