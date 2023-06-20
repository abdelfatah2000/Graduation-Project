import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../data/dummy";
import { pieChartData } from "../data/dummy";
import { Doughnut } from "../components/Pie";
import { ChartsHeader } from "../components/ChartsHeader";
import "../css/home.css";
import Sidebar from "../components/Sidebar";
import { Doughnut2 } from "../components/Pie2";

const Home = () => {
  const palette = ["#E94649", "#F6B53F", "#6FAAB0", "#C4C24A"];
  return (
    <div className="home-container">
      <Sidebar />
      <div className="middle-section">
        <h1>Pulita Analytics</h1>
        <div className="dashboard">
          <div className="card">
            <div>
              <Doughnut
                id="chart-pie1"
                data={pieChartData}
                legendVisiblity
                height="full"
              />
            </div>
            <p className="data-name">Pressure</p>
          </div>
          <div className="card">
            <div>
              <Doughnut2
                id="chart-pie"
                data={pieChartData}
                legendVisiblity
                height="full"
              />
            </div>
            <p className="data-name">Wind Status</p>
          </div>
          <div className="card cardshower">
            <img src={"img/shower.png"} alt="shower" width={150} />
            <p className="shower">
              <span>19</span>&deg;C
            </p>
            <p className="shower-p">Showers</p>
          </div>
        </div>
        
   <ChartsHeader category="Bar" palettes={palette}/>
      <div>
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div> 
      </div>
      
    </div>
  );
};

export default Home;

