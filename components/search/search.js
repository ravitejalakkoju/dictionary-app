import { Component } from '../component.js'
import { SearchModel } from '../../models/index.js';
import { getMeaning } from '../../api/apiclient.js';
import { Component as ComponentKey } from '../../shared/js/constants.js';
import { mountComponent } from '../../shared/js/common.js';

export class Search extends Component {
  constructor() { 
    super();
    this.model = new SearchModel();
  }

  attachEventListeners() {
    document.getElementById('btn-search').addEventListener('click', this.setResult.bind(this));
    const searchInput = document.getElementById('js-search-input');
    searchInput.addEventListener('keypress', event => {
      if(event.key == 'Enter' && this.isChanged(event.target.value)) {
        this.model.setValue('search', event.target.value);
        this.setResult();
      }
    });

    searchInput.addEventListener('focusout', event => {
      if(this.isChanged(event.target.value)) {
        this.model.setValue('search', event.target.value);
        this.setResult();
      }
    });
  }

  isChanged(value) {
    return this.model.getValueOf('search') != value;
  }

  setResult() {
    const resultComponent = window.manager['result'];
    getMeaning(this.model.getValueOf('search'))
    .then(result => resultComponent.model.setModel(result[0]))
    .then(() => mountComponent(resultComponent));
  }
}