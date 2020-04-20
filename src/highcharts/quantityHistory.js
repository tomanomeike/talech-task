import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const QuantityHistory = (props) => {
const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Quantity history'
    },
    series: [
      {
        data: (props.quantitys || []).map((quantity) => Number(quantity)),
      }
    ]
  };

return(
  <div>
   <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);
};

export default QuantityHistory;