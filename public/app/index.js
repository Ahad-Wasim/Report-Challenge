import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './assets/styles/main.css';

import TopBar from './components/topBar.js';
import BottomWrapper from './components/bottomWrapper.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      active: null
    }
  }

  componentDidMount(){
    
  }

  render(){
    return (
      <div className="inheritHeight">
        <TopBar />
        <BottomWrapper />
      </div>
    );

  }
}

ReactDOM.render(<App />, document.getElementById("container"));


