import React from 'react';

const MainContent = (props) => {
  if(!props.active || props.filteredReports.indexOf(props.active) === -1){
    return <h1 className="no-reports">No Reports Selected</h1>
  }

  return (
    <div className="main-content-wrapper">
      <h1>{props.active.title}</h1>
      <p>{props.active.body}</p>
    </div>
  );
}

export default MainContent;
