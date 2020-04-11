import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const PriceHistory = (props) => {
  console.log((props.prices || []).map((price) => Number(price)));
  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Price history'
    },
    series: [
      {
        data:(props.prices || []).map((price) => Number(price))
        // data: props.prices
        // data:  [10, 2, 1, 4, 3, 6]
      }
    ]
  };
  return<div>
   <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
};

export default PriceHistory;