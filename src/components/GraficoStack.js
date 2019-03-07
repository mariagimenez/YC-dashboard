import React, { Component } from 'react';

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from  'recharts';
    

class GraficoStack extends Component {
  render () {
    return (
        <AreaChart width={600} height={400} data={this.props.data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='comprados' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
        <Area type='monotone' dataKey='rechazados' stackId="1" stroke='#ffc658' fill='#ffc658' />
      </AreaChart>
    );
  }
}

export default GraficoStack;