export class Model {
	model = {};

	constructor() { }

	getModel() {
		return this.model;
	}

	getHtml() {
		return this.html;
	}

	getValueOf(id) {
		return this.model[id];
	}

	addValue(value_id, value) {
		this[value_id] = value;
	}

	setValue(value_id, value) {
		this.model[value_id] = value;
	}
}