import React, { Component } from 'react';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from  'recharts';

class GraficoBar extends Component {
  render () {
    return (
        <BarChart width={600} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="fecha"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="cantidad" fill="#8884d8" />
        </BarChart>
    );
  }
}

export default GraficoBar;