import { Component, Theme } from '../../shared/js/constants.js';
import { Model } from './model.js';
import { capitalize } from '../../shared/js/common.js';

export class HeaderModel extends Model{
	constructor(html, fontfamily = localStorage.getItem("dictionary-font") || 'serif', theme = localStorage.getItem("dictionary-theme") || Theme.light) {
		super();
		this.orderMap = [ 'fontfamily', 'selectedfontfamily', 'theme' ]
		this.html = html;
	    this.model['fontfamilies'] = [ 'Serif', 'Monospace', 'Sans-Serif', 'Cursive', 'Courier New' ].map(ff => { return { fontfamily: ff }; });
	    this.model['selectedfontfamily'] = fontfamily;
	    this.model['theme'] = theme;
	}
}