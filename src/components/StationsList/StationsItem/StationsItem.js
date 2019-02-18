import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button
} from 'reactstrap';
import './StationsItem.css';
class StationsItem extends Component {

  // sitas stateless komponentas turi priimti items masyva iš props ir ji atvaizduoti
  render() {

    return (<div className="d-flex flex-wrap">
      {this.props.stations.map((station) => {
        return <div key={station.id}>
          <Card className="station-item-card">
            <CardBody className="station-card-body">
              <CardTitle>{station.pavadinimas}</CardTitle>
              <CardSubtitle>{station.adresas}</CardSubtitle>
              <CardSubtitle>{station.telefonas}</CardSubtitle>
              <CardSubtitle>{station.darbo_laikas}</CardSubtitle>
              <Button value={station.id}>Plačiau</Button>
            </CardBody>
          </Card>
        </div>;
      })}
    </div>)
  }
}

export default StationsItem;

