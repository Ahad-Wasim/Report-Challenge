import React from 'react';
import TitleList from './titleList.js';


const BottomWrapper = (props) => {
  return (
    <section className="bottom-wrapper clearfix">
      
      <nav className="title-wrappers">
        <TitleList reportList={props.reportList} />
      </nav>


      <article class="main-content">
      </article>

    </section>
  );
}

export default BottomWrapper;
