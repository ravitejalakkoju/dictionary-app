import { loadValues } from '../../shared/js/common.js'

export class Model {
	model = {};
	htmlModel = {};

	constructor() { }

	getModel() {
		return this.model;
	}

	getHtmlModel() {
		return this.htmlModel;
	}

	getValueOf(id) {
		return this.model[id];
	}

	setValueOf(value_id, value, component_id, html = null) {
		this.model[value_id] = value;
		this.htmlModel[value_id] = html || value;
		loadValues(component_id, this.htmlModel);
	}
}