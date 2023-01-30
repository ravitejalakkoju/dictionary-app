import { Component } from '../component.js'
import { ResultModel } from '../../models/index.js';

export class Result extends Component {
  constructor() { 
    super();
    this.model = new ResultModel();
  }
}