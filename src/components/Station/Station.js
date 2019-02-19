import React, { Component } from 'react';

class Station extends Component {
  componentDidMount() {
    console.log('this.props.car: ', this.props.station);
  }
  // sitas stateless komponentas turi priimti items masyva iš props ir ji atvaizduoti
  render() {
    return (
      <div>
        <p>TODO: automobilių kurie yra tame nuomos punkte, sąrašas</p>
      </div>
    )
  }
}

export default Station;

