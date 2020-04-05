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
        data: product.priceHistory
      }
    ]
  };

const PriceHistory = () => (
  <div>
   <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default PriceHistory;