import React, { Component } from 'react';
import axios from 'axios';
import StationsItem from '../../components/StationsList/StationsItem';

class Stations extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      stations: [],
      stationForm: {},
      error: undefined
    }



  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.title) {
      return;
    }
  }

  handleChange(e) {
    this.setState({ stationForm: e.target.value });
  }

  componentDidMount() {
    this.fetchStations();
  }

  fetchStations() {
    axios
      .get('http://localhost:2000/stations')
      .then(stations => {
        this.setState(state => ({
          stations: stations.data,
          error: undefined,
        }));
      })
      .catch(error => {
        this.setState(state => ({
          stations: state.stations,
          error: error.message,
        }));
      });
  }



  render() {

    return (
      <div>
        <h1>Nuomos punktai</h1>
        <StationsItem stations={this.state.stations} />

      </div>
    );
  }
}

export default Stations;