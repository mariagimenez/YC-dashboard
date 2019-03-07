import React, { Component } from 'react';

import { Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis} from  'recharts';

class GraficoRadar extends Component {
  render () {
    return (
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={this.props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="cantidad" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
    );
  }
}

export default GraficoRadar;