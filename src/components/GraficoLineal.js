import React, { Component } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from  'recharts';

class GraficoLineal extends Component {
  render () {
    return (
        <LineChart width={600} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="fecha"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="cantidad" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    );
  }
}

export default GraficoLineal;