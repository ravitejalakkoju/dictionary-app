import { Component } from '../component.js'
import { HeaderModel } from '../../models/index.js';
import { Theme } from '../../shared/js/constants.js';
import { capitalize, updateFont, updateTheme, updateComponent } from '../../shared/js/common.js';
export class Header extends Component {
  constructor() {
    super();
    this.model = new HeaderModel();
  }

  attachEventListeners() {
    document.getElementById('js-theme-toggle').addEventListener('click', this.toggleTheme.bind(this));
    document.getElementById('js-select-font').addEventListener('click', this.toggleFontDropdown);
    document.querySelectorAll('.font-list-item').forEach(item => {
      item.addEventListener('click', event => {
        const selectedFont = event.srcElement.innerHTML;
        this.model.setValue('selectedfontfamily', selectedFont);
        this.toggleFontDropdown();
        localStorage.setItem("dictionary-font", selectedFont);
        updateFont(selectedFont);
        updateComponent('selectedfontfamily', this.model.getValueOf('selectedfontfamily'));
      });
    });
  }

  toggleTheme() {
    const isLight = this.model.getValueOf('theme') === Theme.light;
    localStorage.setItem("dictionary-theme", isLight ? Theme.dark : Theme.light);
    this.model.setValue('theme', isLight ? Theme.dark : Theme.light);
    updateTheme(!isLight);
    updateComponent('theme', this.model.getValueOf('theme'));
  }

  toggleFontDropdown() {
    document.getElementById('js-dropdown').classList.toggle('dropdown-icon-rotate');
    document.getElementById('js-font-family-select').classList.toggle('show');
  }
}