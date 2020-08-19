//https://recharts.org/en-US/examples/SimpleBarChart

import React, { PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default class BarChartComponent extends PureComponent {
  //https://reactjs.org/docs/react-api.html#reactpurecomponent

  constructor(props) {
    super(props);
    this.state = props;
  }  

  render() {
    return (
      <React.Fragment>
        <div>{this.state.title}</div>
        <BarChart width={this.state.width} height={this.state.height} data={this.state.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.state.yaxis_key} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={this.state.xaxis_1_key} barSize={20} />
          <Bar dataKey={this.state.xaxis_2_key} barSize={20} />
        </BarChart>
      </React.Fragment>
    );
  }
}
