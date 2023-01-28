import { HeaderModel } from '../../models/header_model.js';
import { loadHTML, loadValues } from '../../shared/js/common.js';

export class Header {
  constructor() {
    this.headerModel =  new HeaderModel();
    loadHTML('./components/header/header.html', 'header', this.headerModel.getModel());
  }

  changeFont(fontfamily) {
    this.headerModel.setValueOf('fontfamily', fontfamily);
  }

  changeTheme(theme) {
    this.headerModel.setValueOf('theme', theme);
  }
}