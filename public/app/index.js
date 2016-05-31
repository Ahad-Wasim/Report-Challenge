import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './assets/styles/main.css';

import TopBar from './components/topBar.js';
import BottomWrapper from './components/bottomWrapper.js';

const API = "http://localhost:3333/reports";


class App extends Component {
  constructor(){
    super();
    this.state = {
      filter: '',
      active: null,
      reportList: [],
      filteredReports: []
    }
  }

  componentDidMount(){
    axios.get(API).then((response) => {
      // QuickSort algorithm -- n log n 
      response.data.sort((a,b) => a.created > b.created);
      this.setState({ 
        reportList: response.data,
        filteredReports: response.data 
      });
    })
  }

  filterBy(term){
    // This filter algorithm can be optimized by using Tries or a filtering module.
    let filteredReports = this.state.reportList.filter((report) => {
      return report.title.toUpperCase().indexOf(term) !== -1 ? true : false;
    });

    this.setState({filteredReports})
  }

  render(){
    return (
      <div className="inheritHeight">
        <TopBar filterBy={this.filterBy.bind(this)}/>
        <BottomWrapper filteredReports={this.state.filteredReports} />
      </div>
    );

  }
}

ReactDOM.render(<App />, document.getElementById("container"));


