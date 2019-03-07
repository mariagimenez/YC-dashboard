import React, { Component } from 'react';

import {RadialBarChart, RadialBar, Legend} from  'recharts';

const style = {
    top: 0,
    left: 350,
    lineHeight: '24px'
};

class GraficoRadialBar extends Component {
  render () {
    return (
        <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={20} data={this.props.data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='cantidad'/>
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
    );
  }
}

export default GraficoRadialBar;