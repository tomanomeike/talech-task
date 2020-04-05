import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Quantity history'
    },
    series: [
      {
        data: [10, 2, 1, 4, 3, 6]
      }
    ]
  };

const QuantityHistory = () => (
  <div>
   <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default QuantityHistory;