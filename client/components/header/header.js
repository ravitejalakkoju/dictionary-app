import { Component } from '../component.js'
import { HeaderModel } from '../../models/index.js';
import { FontFamily, Theme } from '../../shared/js/constants.js'

export class Header extends Component {
  constructor() {
    super();
    this.model = new HeaderModel();
  }

  changeFont(name, fontfamily) {
    this.model.setValue(name, fontfamily);
  }

  changeTheme(name, isChecked) {
    this.model.setValue(name, isChecked ? Theme.dark : Theme.light , isChecked ? '<i class="fa-regular fa-moon"></i>' : '<i class="fa-regular fa-sun"></i>');
  }
}