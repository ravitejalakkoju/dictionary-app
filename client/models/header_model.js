import { Component, FontFamily, Theme } from '../../shared/js/constants.js'
import { Model } from './model.js'

export class HeaderModel extends Model{
	constructor(fontfamily = FontFamily.serif, theme = Theme.light) {
		super();
	    this.model['fontfamily'] = fontfamily;
	    this.model['theme'] = theme;
	    this.htmlModel['theme'] = theme == Theme.light ? '<i class="fa-regular fa-sun"></i>' : '<i class="fa-regular fa-moon"></i>';
	}

	setValue(id, value, html = null) {
		this.setValueOf(id, value, Component.header, html);
	}
}