import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationAnnotationsDirective,
  AccumulationAnnotationDirective,
  AccumulationAnnotation,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject
} from "@syncfusion/ej2-react-charts";
import '../css/pie.css'


export const Doughnut = ({ id, data, legendVisiblity, height }) => {
  return (
    <div className='dounut-container'>
      <AccumulationChartComponent
        id="pie-chart1"
        background='transparent'
      >
        <Inject
          services={[AccumulationLegend,AccumulationAnnotation, PieSeries, AccumulationDataLabel]}
        />
        <AccumulationAnnotationsDirective>
        <AccumulationAnnotationDirective content={`<div><p class="m-0">${720} mBar</p><p class='cloud'> <span>&#9729;</span> 36 </p></div>`} region='Series'  coordinateUnits='Pixel' x='50%' y='50%'>
        </AccumulationAnnotationDirective>
      </AccumulationAnnotationsDirective>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Project"
            dataSource={data}
            xName="x"
            yName="y"
            DoughnutCoefficient = '0.1'
            startAngle={0}
            endAngle={360}
            radius="60%"
            innerRadius="80%"
            
            
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};


