import { Component } from '../component.js'
import { SearchModel } from '../../models/index.js';

export class Search extends Component {
  constructor() { 
    super();
    this.model = new SearchModel();
  }
}