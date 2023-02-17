import { Component } from '../component.js'
import { ResultModel } from '../../models/index.js';

export class Result extends Component {
  constructor() { 
    super();
    this.model = new ResultModel();
  }

  attachEventListeners() {
    document.getElementById('btn-audio-play').addEventListener('click', this.playAudio.bind(this));
  }

  playAudio() {
    document.getElementById('text-audio').play();
  }
}