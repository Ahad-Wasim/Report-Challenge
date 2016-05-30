import React from 'react';

const Title = (props) => {
  return (
    <li className="title" onClick={() => props.titleClick(props.report)}> 
      {props.report.title} 
    </li>
  );
}

export default Title;
