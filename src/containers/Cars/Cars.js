import React, { Component } from 'react';
import CarsItem from '../../components/CarsList/CarsItem';
import axios from 'axios';
import qs from 'query-string';
import './Cars.css';

class Cars extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      error: undefined,
      filteredCars: [],
    };
  }

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
      ? `http://localhost:2000/cars${filterParams}`
      : 'http://localhost:2000/cars';

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

  filterByParams(filter) {
    let queryParams = qs.parse(this.props.location.search);
    queryParams = Object.assign(queryParams, filter);
    this.props.history.push(`/cars?${qs.stringify(queryParams)}`);
  }

  filterOff() {
    this.props.history.push('/cars');
  }

  render() {
    return (
      <div>
        <h1>Automobiliai</h1>
        <div className="row">
          <p className="col-2">Pasirinkite:</p>

          <div className="col-md-2">
            <p>Gamintojas:</p>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ manufacturer: 'Toyota' })}
            >
              Toyota
            </button>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ manufacturer: 'Audi' })}
            >
              Audi
            </button>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ manufacturer: 'Ford' })}
            >
              Ford
            </button>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ manufacturer: 'Nissan' })}
            >
              Nissan
            </button>
          </div>

          <div className="col-md-2">
            <p>Metai:</p>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ year: '2012' })}
            >
              2012
            </button>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ year: '2016' })}
            >
              2016
            </button>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ year: '2017' })}
            >
              2017
            </button>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ year: '2018' })}
            >
              2018
            </button>
          </div>

          <div className="col-md-2">
            <p>Kuro tipas:</p>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ fuelType: 'benzinas' })}
            >
              Benzinas
            </button>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ fuelType: 'dyzelis' })}
            >
              Dyzelis
            </button>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ fuelType: 'elektra' })}
            >
              Elektra
            </button>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ fuelType: 'dujos' })}
            >
              Dujos
            </button>
          </div>

          <div className="col-md-2">
            <p>Pavarų dėžė:</p>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ isMechanic: true })}
            >
              Mechaninė
            </button>
            <button className="btn-seablue"
              type="button"
              onClick={() => this.filterByParams({ isMechanic: false })}
            >
              Automatinė
            </button>
          </div>
          <div className="col-md-2">
            <button className="btn-seablue btn-big"
              type="button"
              onClick={() => this.filterOff()}
            >
              Visi
            </button>
          </div>

        </div>
        <CarsItem cars={this.state.cars} />
      </div >
    );
  }
}

export default Cars;