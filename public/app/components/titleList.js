import React from 'react';
import Title from './title.js'

const TitleList = (props) => {

  var renderedReportLists = props.reportList.map((report) => {
    console.log(report)
    return <Title title={report.title} key={report.id} />
  });

  return (
    <ul>
      { renderedReportLists }
    </ul>
  );
}

export default TitleList;
