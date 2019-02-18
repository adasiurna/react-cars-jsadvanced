import React, { Component } from 'react';
import axios from 'axios';
import CarsItem from '../../components/CarsList/CarsItem';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        <div className="row">
          <p className="col-2">Pasirinkite:</p>
          <FormGroup className="col-2">
            <Label>Metai</Label>
            <Input type="select" name="category">
              <option>Visi</option>
              <option>2012</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
            </Input>
          </FormGroup>

          <FormGroup className="col-2">
            <Label>Kuro tipas</Label>
            <Input type="select" name="category">
              <option>Visi</option>
              <option>Benzinas</option>
              <option>Dyzelis</option>
              <option>Dujos</option>
              <option>Elektra</option>
            </Input>
          </FormGroup>

          <FormGroup className="col-2">
            <Label>Durų skaičius</Label>
            <Input type="select" name="category">
              <option>Visi</option>
              <option>2</option>
              <option>4</option>
            </Input>
          </FormGroup>

          <FormGroup className="col-2">
            <Label>Pavarų dėžė</Label>
            <Input type="select" name="category">
              <option>Visi</option>
              <option>Mechaninė</option>
              <option>Automatinė</option>
            </Input>
          </FormGroup>

        </div>
        <CarsItem cars={this.state.cars} />
      </div>
    );
  }
}

export default Cars;