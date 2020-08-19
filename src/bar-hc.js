import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class HCBarChartComponent extends React.Component  {
    render() {
      console.log("HighchartsReact props: ", this.props); 
      const options = {
        chart: {
            type: 'column'
        },
        xaxis: {
          //categories: this.props.categories,
          categories:  [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun']
        },
        series: this.props.series
      }

      return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>        
      );
    }
}

