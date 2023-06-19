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
export const Doughnut2 = ({ id, data, legendVisiblity, height }) => {
  return (
    <div className='dounut-container'>
      <AccumulationChartComponent
        id="pie-chart"
        background='transparent'
      >
        <Inject
          services={[AccumulationLegend,AccumulationAnnotation, PieSeries, AccumulationDataLabel]}
        />
        <AccumulationAnnotationsDirective>
        <AccumulationAnnotationDirective content={`<div><p class="m-0">${7.7} km/h</p><p class='m-0'> <span>&#8601;</span> WSW </p></div>`} region='Series'  coordinateUnits='Pixel' x='50%' y='50%'>
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


