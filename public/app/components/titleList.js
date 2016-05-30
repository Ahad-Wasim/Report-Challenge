import React from 'react';
import Title from './title.js'

const TitleList = (props) => {

  var renderedReportLists = props.filteredReports.map((report) => {
    return (
      <Title 
        titleClick={props.titleClick}
        report={report} 
        key={report.id} 
      />
    );
  });

  return (
    <ul>
      { renderedReportLists }
    </ul>
  );
}

export default TitleList;
