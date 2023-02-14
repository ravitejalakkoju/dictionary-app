import { Component } from '../component.js'
import { HeaderModel } from '../../models/index.js';
import { FontFamily, Theme } from '../../shared/js/constants.js'

export class Header extends Component {
  constructor() {
    super();
    this.model = new HeaderModel();
  }

  changeFont(fontfamily) {
    this.model.setValue('fontfamily', fontfamily);
  }

  changeTheme(isChecked) {
    this.model.setValue('theme', isChecked ? Theme.dark : Theme.light , isChecked ? '<i class="fa-regular fa-moon"></i>' : '<i class="fa-regular fa-sun"></i>');
  }
}