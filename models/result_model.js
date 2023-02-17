import { Model } from './model.js'

export class ResultModel extends Model {
	constructor() {
		super();
    	this.orderMap = [ 'word', 'phonetic', 'audio', 'meaning'];
	}

	setModel(result) {
		this.model['word'] = result.word;
		this.model['phonetic'] = result.phonetic;
		this.model['meanings'] = result.meanings.map(m => {
			return {
				partOfSpeech: m.partOfSpeech,
				definitions: m.definitions.map(d => Object.assign({}, { definition: d.definition, example: d.example ? "\"" + d.example + "\"" : undefined })),
				synonyms: m.synonyms.map(s => { return { synonym: s } })
			};
		});
		this.model['audio'] = result.phonetics.length > 0 ? result.phonetics[0]['audio'] : '';
	}
}