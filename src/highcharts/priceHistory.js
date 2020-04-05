import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Price history'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };

const PriceHistory = () => (
  <div>
   <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default PriceHistory;