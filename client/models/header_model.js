import {loadHTML, loadValues} from '../../shared/js/common.js'

export class HeaderModel {
	model = {};

	constructor(fontfamily = 'Serif', theme = 'light') {
	    this.model['fontfamily'] = fontfamily;
	    this.model['theme'] = theme;
	}

	getModel() {
		return this.model;
	}

	getValueOf(id) {
		return this.model[id];
	}

	setValueOf(id, value) {
		this.model[id] = value;
		loadValues(this.model);
	}
}