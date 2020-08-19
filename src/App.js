import React from "react";
import "./style.css";
import NivoBarChartComponent from "./bar-nivo.js"
import HighchartBarChartComponent from "./bar-hc.js"
import RechartBarChartComponent from "./bar-re.js"

export default function App() {

  var data = [
  {"month": "Jan", "hot dog": 192, "burger": 50, "sandwich": 158, "kebab": 50, "fries": 187, "donut": 58},
  {"month": "Feb", "hot dog": 162, "burger": 30, "sandwich": 66, "kebab": 345, "fries": 33, "donut": 234},
  {"month": "Mar", "hot dog": 12, "burger": 20, "sandwich": 345, "kebab": 355, "fries": 435, "donut": 234},
  {"month": "Apr", "hot dog": 24, "burger": 70, "sandwich": 435, "kebab": 54, "fries": 345, "donut": 456},
  {"month": "May", "hot dog": 85, "burger": 80, "sandwich": 435, "kebab": 11, "fries": 435, "donut": 453},
  {"month": "Jun", "hot dog": 38, "burger": 90, "sandwich": 44, "kebab": 35, "fries": 345, "donut": 345},
];

  var keys = ['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut'];
  //var keys = ['hot dog', 'month', "sandwich"];

  //hc stuff
  var categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  var series = [
    {name: 'hot dog', data: [192, 162, 12, 24, 85, 38]},
    {name: 'burger', data: [50, 30, 20, 70, 80, 90]},
  ];

  return (
    <div>
      <RechartBarChartComponent title="ReChart" data={data} yaxis_key="month" 
        xaxis_1_key="hot dog" xaxis_2_key="burger" width={500} height={300} />
      <HighchartBarChartComponent categories={categories} series={series} />
      <NivoBarChartComponent data={data} keys={keys} indexBy="month" scheme="dark2" />
    </div>
  );
}
