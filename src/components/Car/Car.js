import React, { Component } from 'react';

class Car extends Component {
  componentDidMount() {
    console.log('this.props.car: ', this.props.car);
  };

  // sitas stateless komponentas turi priimti items masyva iš props ir ji atvaizduoti
  render() {
    return (
      <div className="container">
        <h1>{this.props.car.automobilis}</h1>
        <div className="row">
          <img
            style={{ objectFit: "cover" }}
            className="col-md-4"
            alt="car-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_Id6IElqxZu0LHL-wWn8rapaaujA-wW2ZmKEBGRStcah0l2U4A"
          />
          <div className="col-md-8">
            <p>Pagaminimo metai: {this.props.car.pagaminimo_metai}</p>
            <p>Kuro tipas: {this.props.car.kuro_tipas}</p>
            <p>Pavarų dėžė: {this.props.car.pavaru_deze}</p>
            <p>Keleivių skaičius: {this.props.car.keleiviu_skaicius}</p>
            <p>Durelių skaičius: {this.props.car.duru_skaicius}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Car;

