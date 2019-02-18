import React, { Component } from 'react';

import axios from 'axios';
import qs from 'query-string';

import CarFilter from '../../components/Cars/CarFilter';
import CarList from '../../components/Cars/CarList';

import './Cars.scss';

class Cars extends Component {
  constructor(props) {
    super(props);

    this.viewCar = this.viewCar.bind(this);

    this.state = {
      cars: [],
      error: undefined,
      filteredCars: [],
    };
  }

  filterCars = CarFilter => {
    let filteredCars = this.state.cars;
    filteredCars = filteredCars.filter(car => {
      let carYear = car.makeYear;
      return carYear.indexOf(CarFilter) !== -1;
    });
    this.setState({
      filteredCars,
    });
  };

  componentDidMount() {
    this.fetchCars(this.props.location.search);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.fetchCars(this.props.location.search);
    }
  }

  matchState() {
    this.setState({
      filteredCars: this.state.cars,
    });
  }

  fetchCars(filterParams) {
    const URL = filterParams
      ? `http://localhost:3000/cars${filterParams}`
      : 'http://localhost:3000/cars';

    console.log(qs.parseUrl(URL));

    axios
      .get(URL)
      .then(cars => {
        this.setState(state => ({
          cars: cars.data,
          error: undefined,
        }));
        this.matchState();
      })
      .catch(error => {
        this.setState(state => ({
          cars: state.cars,
          error: error.message,
        }));
      });
  }

  viewCar(carId) {
    this.setState(state => ({
      filteredCars: state.filteredCars.filter(car => car.id === carId),
      error: undefined,
    }));
  }

  filterByParams(filter) {
    let queryParams = qs.parse(this.props.location.search);
    queryParams = Object.assign(queryParams, filter);

    this.props.history.push(`/cars?${qs.stringify(queryParams)}`);
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center m-4">Car List</h1>
        <div className="row">
          <div className="col-3">
            <CarFilter
              cars={this.state.filteredCars}
              match={this.props.match}
              onChange={this.filterCars}
            />
          </div>
          <div className="col-9">
            <CarList cars={this.state.filteredCars} viewCar={this.viewCar} />
          </div>
          <div className="col-12">
            <button
              type="button"
              onClick={() => this.filterByParams({ fuelType: 'gas' })}
            >
              Filter by Gas
            </button>

            <button
              type="button"
              onClick={() => this.filterByParams({ fuelType: 'dysel' })}
            >
              Filter by Dysel
            </button>

            <button
              type="button"
              onClick={() => this.filterByParams({ manufacturer: 'Toyota' })}
            >
              Filter only Toyotas
            </button>

            <button
              type="button"
              onClick={() => this.filterByParams({ seatNumber: 5 })}
            >
              Only 5 seats
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cars;
