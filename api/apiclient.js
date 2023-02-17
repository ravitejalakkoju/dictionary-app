const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export function getMeaning(searchWord) {
	if(!searchWord) return;

	return fetch(`${BASE_URL}/${searchWord}`)
	.then(response => response.json());
}