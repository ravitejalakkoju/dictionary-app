import { loadHTML } from './common.js'
import * as Components from '../../components/index.js';

export class Manager {
	constructor() {
		for(let component in Components) {
			const component_id = component.toLowerCase();
			this[component_id] = new Components[component](); 
    		loadHTML('./components/' + component_id + '/' + component_id + '.html', component_id, this[component_id].model.getHtmlModel());
		}
	}
}