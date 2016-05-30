import React, { Component } from 'react';
import TitleList from './titleList.js';
import MainContent from './MainContent.js';


class BottomWrapper extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: null
    }
  }

  titleClick(report){
    this.setState({active: report});
  }


  render(){
    return (
      <section className="bottom-wrapper clearfix">
        
        <nav className="title-wrappers">
          <TitleList 
            titleClick={this.titleClick.bind(this)} 
            filteredReports={this.props.filteredReports} 
          />
        </nav>


        <article className="main-content">
          <MainContent active={this.state.active} />
        </article>

      </section>
    );
  }

}

export default BottomWrapper;
