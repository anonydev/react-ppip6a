import React from 'react'
//import { storiesOf } from '@storybook/react'
//import { action } from '@storybook/addon-actions'
//import { generateCountriesData, sets } from '@nivo/generators'
//import range from 'lodash/range'
//import random from 'lodash/random'
//import { useTheme } from '@nivo/core'
import { Bar } from '@nivo/bar'

export default class BarChartComponent extends React.Component  {

  render() {
  var commonProps = {
      groupMode: "grouped",

      width: 900,
      height: 500,
      margin: { top: 60, right: 80, bottom: 60, left: 80 },
      padding: 0.2,
      labelTextColor: 'inherit:darker(1.4)',
      labelSkipWidth: 16,
      labelSkipHeight: 16,      
  };

    return (
      //colors={{ scheme: this.props.scheme }}
      <React.Fragment>
        <Bar {...commonProps} {...this.props}  />
        <Bar {...commonProps} {...this.props} layout="horizontal" enableGridY={false} enableGridX={true}  colors={{ scheme: this.props.scheme }} />        
      </React.Fragment>
    );
  }
    
}
