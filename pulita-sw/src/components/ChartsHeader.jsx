import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'




export const ChartsHeader = ({ category, title }) => (
  <div className="graph-header">
    <div className='statistics'>
      <p className='stat'>Statistics</p>
      <p className='power'>Power Output</p>
    </div>
    <div className='details-graph'>
      <div class="selectWrapper">
        <select class="selectBox">
          <option>Today</option>
          <option>Tomorrow</option>
          <option>Monday</option>
          <option>Tuesday</option>
        </select>
      </div>
      <div>
<p><FontAwesomeIcon icon={faCircle} className="ac-icon" /> AC Power</p>
<p><FontAwesomeIcon icon={faCircle} className="dc-icon" /> DC Power</p>
      </div>
    </div>
  </div>
);

export default ChartsHeader;
