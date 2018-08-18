const BASE_URL = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts|images|pageimages&exintro&explaintext&redirects=1&titles='


export function fetchInfo(article) {
	return fetch(BASE_URL + article, {
		credentials: 'include',
		mode: 'cors',
		headers: {
			'Origin': window.location
		}
	}).then(response => response.json())
}