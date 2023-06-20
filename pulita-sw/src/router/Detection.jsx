import React from 'react';
import Sidebar from "../components/Sidebar";
import { MDBFile } from 'mdb-react-ui-kit';
import "../css/detection.css";
const Detection = () => (
  <div className="home-container">
    <Sidebar />
      <div className="middle-section">
        <h1>Pulita Detection</h1>
        <div className='info'>
          <h4>Detect Defects of solar panels</h4>
          <p>
            This model can detect 5 differernt defects that affects solar panels:
            <ol>
              <li>
                Snow Covered
              </li>
              <li>Dust</li>
              <li>Physical Damage</li>
              <li>Electrical Damage</li>
              <li>Bird drop</li>
            </ol>

          </p>
          <img src='img/detect.png'/>
          <h4>
            Try it now!
          </h4>

          <div className='upload'>
          <MDBFile  size='sm' id='formFileSm' />
          <button>Detect</button>
          </div>
          <div className='results'>
            <p>Results</p>
            <span>Nothing to view yet!</span>
          </div>
        </div>
        </div>
  </div>
);

export default Detection;
