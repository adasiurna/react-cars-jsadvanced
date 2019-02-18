import React, { Component } from 'react';

class Car extends Component {
  componentDidMount() {
    console.log('this.props.car: ', this.props.car);
  }
  // sitas stateless komponentas turi priimti items masyva iš props ir ji atvaizduoti
  render() {
    return (
      <div>
        <h1>Komponentas - vienas automobilis</h1>
        <p></p>
      </div>
    )
  }
}

export default Car;

