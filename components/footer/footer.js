import { Component } from '../component.js'
import { FooterModel } from '../../models/index.js';

export class Footer extends Component {
  constructor() {
    super();
    this.model = new FooterModel();
  }
}