import React, { Component } from 'react';

class Boletas extends Component {
  render () {
    return (
      <div>
        <strong>{this.props.cantidad}</strong>
      </div>
    );
  }
}

export default Boletas;