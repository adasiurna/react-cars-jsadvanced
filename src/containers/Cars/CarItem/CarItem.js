import React, { Component } from 'react';
import axios from 'axios';
import Car from '../../../components/Car';

class CarItem extends Component {
  constructor(props) {
    super(props);
    // this.handleOrder = this.handleOrder.bind(this);
    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      isRented: false,
      error: undefined
    }
  }

  // handleOrder(event) {
  //   event.preventDefault();
  //   console.log('paspaude!');

  // }

  componentDidMount() {
    this.fetchCar(this.props.match.params.id);
  }

  fetchCar(id) {
    axios
      .get(`http://localhost:2000/cars/${id}`)
      .then(car => {
        this.setState(state => ({
          car: car.data,
          error: undefined,
        }));
        console.log(car.data);
      })
      .catch(error => {
        this.setState(state => ({
          car: state.car,
          error: error.message,
        }));
      });

  };


  render() {
    return (
      <div>
        <h1>Vienas Automobilis</h1>
        <Car car={this.state.car} />
      </div>
    )
  }


}
export default CarItem;