import { loadHTML, mountComponent, loadDefaultSettings } from './common.js'
import * as Components from '../../components/index.js';

export class Manager {
	constructor() {
		var promises = [];
		
		for(let component in Components) {
			const component_id = component.toLowerCase();
    		const promise = loadHTML('./components/' + component_id + '/' + component_id + '.html', component_id)
    					.then(html => {
							this[component_id] = new Components[component](); 
							this[component_id].id = component_id;
							this[component_id].html = html;
    						mountComponent(this[component_id]);
    					})
    				   	.then(() => this[component_id].attachEventListeners());
    		promises.push(promise);
		}

		Promise.all(promises)
		.then(() => loadDefaultSettings())
		.catch(error => console.error('Error occurred:', error));
	}
}