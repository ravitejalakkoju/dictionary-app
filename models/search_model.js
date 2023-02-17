import { Model } from './model.js'

export class SearchModel extends Model {
	constructor() {
		super();
		this.model['search'] = '';
	}
}