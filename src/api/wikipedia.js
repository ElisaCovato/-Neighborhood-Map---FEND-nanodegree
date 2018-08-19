const API_BASE_URL = 'https://it.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts|images|pageimages&exintro&explaintext&redirects=1&titles='
const EXTRACT_SIZE = 200;
const WIKIPEDIA_BASE_URL = 'https://it.wikipedia.org/wiki/'

function getPageInfo(json) {
	// The information we want is actually in .query.pages
	const pages = json.query.pages;
	return Object.values(pages)[0]
}

export function fetchInfo(article) {
	return fetch(API_BASE_URL + article)
		.then(response => response.json())
		.then(json => {
			
			const pageInfo = getPageInfo(json)
			return {
				title: pageInfo.title,
				image: pageInfo.thumbnail.source,
				extract: pageInfo.extract.substring(0, EXTRACT_SIZE) + "...",
				link: WIKIPEDIA_BASE_URL + article
			};
		})
}