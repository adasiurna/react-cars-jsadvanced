import React, { Component } from 'react';
import axios from 'axios';
import qs from 'query-string';
import StationsItem from '../../components/StationsList/StationsItem';

class Stations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stations: [],
      error: undefined,
      filteredStations: [],
    }
  }

  componentDidMount() {
    this.fetchStations(this.props.location.search);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.fetchStations(this.props.location.search);
    }
  }

  matchState() {
    this.setState({
      filteredStations: this.state.stations,
    });
  }


  fetchStations(filterParams) {
    const URL = filterParams
      ? `http://localhost:2000/stations${filterParams}`
      : 'http://localhost:2000/stations';

    axios
      .get(URL)
      .then(stations => {
        this.setState(state => ({
          stations: stations.data,
          error: undefined,
        }));
        this.matchState();
      })
      .catch(error => {
        this.setState(state => ({
          stations: state.stations,
          error: error.message,
        }));
      });
  }

  filterByParams(filter) {
    let queryParams = qs.parse(this.props.location.search);
    queryParams = Object.assign(queryParams, filter);
    this.props.history.push(`/stations?${qs.stringify(queryParams)}`);
  }

  filterOff() {
    this.props.history.push('/stations');
  }

  render() {
    return (
      <div>
        <h1>Nuomos punktai</h1>


        <div className="row">
          <p style={{ marginTop: "20px" }} className="col-2">Pasirinkite miestą:</p>


          <button style={{ display: "inline-block", marginRight: "5px", marginBottom: "5px" }} className="btn btn-secondary"
            type="button"
            onClick={() => this.filterByParams({ city: 'Vilnius' })}
          >
            Vilnius
            </button>
          <button style={{ display: "inline-block", marginRight: "5px", marginBottom: "5px" }} className="btn btn-secondary"
            type="button"
            onClick={() => this.filterByParams({ city: 'Kaunas' })}
          >
            Kaunas
            </button>
          <button style={{ display: "inline-block", marginRight: "5px", marginBottom: "5px" }} className="btn btn-secondary"
            type="button"
            onClick={() => this.filterByParams({ city: 'Klaipėda' })}
          >
            Klaipėda
            </button>
          <button style={{ display: "inline-block", marginRight: "5px", marginBottom: "5px" }} className="btn btn-secondary"
            type="button"
            onClick={() => this.filterOff()}
          >
            Visi
            </button>
        </div>

        <StationsItem stations={this.state.stations} />
      </div>
    );
  }
}

export default Stations;