import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Cars from './containers/Cars';
import Stations from './containers/Stations';
import CarItem from './containers/Cars/CarItem';
import StationItem from './containers/Stations/StationItem';
import AddCarPage from './containers/Cars/AddCarPage';
import AddStationPage from './containers/Stations/AddStationPage';

const Page404 = ({ location }) => (
  <div>
    <h1>Error 404</h1>
    <h3>Location <code>{location.pathname}</code> not found</h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Cars} />
              <Route path="/cars/add-car-page" component={AddCarPage} />
              <Route path="/stations/add-station-page" component={AddStationPage} />
              <Route path="/cars/:id" component={CarItem} />
              <Route path="/stations/:id" component={StationItem} />
              <Route path="/cars" component={Cars} />
              <Route path="/stations" component={Stations} />
              <Route component={Page404} />
            </Switch>
          </div>
          <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
              <a href="/"> AutoNuoma.com</a>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;