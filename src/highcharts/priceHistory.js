import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const PriceHistory = (props) => {
  const options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Price history',
    },
    series: [
      {
        data: (props.prices || []).map((price) => Number(price.price)),
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PriceHistory;
