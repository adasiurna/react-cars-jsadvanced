import React, { Component } from 'react';
import axios from 'axios';
import CarsItem from '../../components/CarsList/CarsItem';

class Cars extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteCar = this.deleteCar.bind(this);

    this.state = {
      cars: [],
      carForm: {},
      error: undefined
    }


  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('paspaude!');
    if (!this.state.title) {
      console.log('knyga be pavadinimo');
      return;
    }
  }

  handleChange(e) {
    this.setState({ carForm: e.target.value });
  }

  componentDidMount() {
    this.fetchCars();
  }

  fetchCars() {
    axios
      .get('http://localhost:2000/cars')
      .then(cars => {
        this.setState(state => ({
          cars: cars.data,
          error: undefined,
        }));
      })
      .catch(error => {
        this.setState(state => ({
          cars: state.cars,
          error: error.message,
        }));
      });
  }

  deleteCar(carId) {
    axios
      .delete(`http://localhost:2000/cars/${carId}`)
      .then(cars => {
        this.setState(state => ({
          cars: state.cars.filter(car => car.id !== carId),
          error: undefined,
        }));
      })
      .catch(error => {
        this.setState(state => ({
          cars: state.cars,
          error: error.message,
        }));
      });
  }

  render() {
    return (
      <div>
        <h1>Automobiliai</h1>
        <CarsItem cars={this.state.cars} />
      </div>
    );
  }
}

export default Cars;