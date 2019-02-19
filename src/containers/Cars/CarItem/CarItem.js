import React, { Component } from 'react';
import axios from 'axios';
import Car from '../../../components/Car';

class CarItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      car: {},
      isRented: false,
      error: undefined
    }
  }

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
        <Car car={this.state.car} />
      </div>
    )
  }
}
export default CarItem;