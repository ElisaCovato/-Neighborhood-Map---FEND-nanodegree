import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import {fetchInfo} from '../api/wikipedia';
import '../styles/WikipediaInfo.css'

export default class WikipediaInfo extends Component {
	state = {
		info: {},
		isLoading: true,
		hasError: false
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
		this.setState({
			isLoading: true,
			hasError: false
		})
		fetchInfo(this.props.marker.article).then(info => {
			this.setState({
				info,
				isLoading: false
			})
		}).catch(error => {
			this.setState({
				isLoading: false,
				hasError: true
			})
		})
	}
	srcset(image) {
		return [320,640, 1280].map(size => {
			const url = image.replace(/[0-9]*px/, `${size}px`)
			return `${url} ${size}w`
		}).join(',');
	}
	render() {
		if (this.state.isLoading) {
			return (<p>Loading...</p>)
		} else if (this.state.hasError) {
			return (<p>Sorry, we couldn't load more information :'(</p>)
		}
		else {
			return (<article className="WikipediaInfo">
				<h2 className="WikipediaInfo-title">
					<a className="WikipediaInfo-link" href={this.state.info.link}>
					{this.state.info.title}
					</a>
				</h2>
				<div className="WikipediaInfo-imageWrapper">
					{/* 
						Empty alt attribute as the only info we have would be "Picture of <name of the location>"
						which doesn't bring add any information to the surrounding text to the user
					*/}

					<img className="WikipediaInfo-image" 
						src={this.state.info.image}
						srcset={this.srcset(this.state.info.image)}
						sizes="(min-width: 862px) calc((100vw - 280px) / 2), (min-width: 730px) calc(100vw - 280px), (min-width: 696px) 50vw, 100vw"
						alt=""/>
					}
				</div>
				<p className="WikipediaInfo-content">{this.state.info.extract}</p>
				<small className="WikipediaInfo-attribution">Source: <a href="https://it.wikipedia.org">Wikipedia</a></small>
				</article>)
		}
		
	}
}

WikipediaInfo.propTypes = {
	marker: PropTypes.object
}

