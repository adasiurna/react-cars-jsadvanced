import React, { Component } from 'react';
import axios from 'axios';
import Station from '../../../components/Station';

class StationItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      station: {},
      error: undefined
    }
  }

  componentDidMount() {
    this.fetchStation(this.props.match.params.id);
  }

  fetchStation(id) {
    axios
      .get(`http://localhost:2000/stations/${id}`)
      .then(station => {
        this.setState(state => ({
          station: station.data,
          error: undefined,
        }));
        console.log(station.data);
      })
      .catch(error => {
        this.setState(state => ({
          station: state.station,
          error: error.message,
        }));
      });
  }

  render() {
    return (
      <div>
        <h1>Vienas nuomos punktas</h1>
        <p>Miestas: {this.state.station.miestas}</p>
        <Station station={this.state.station} />
      </div>
    )
  }
}
export default StationItem;