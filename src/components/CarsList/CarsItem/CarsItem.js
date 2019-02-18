import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

class CarsItem extends Component {

  // sitas stateless komponentas turi priimti items masyva iš props ir ji atvaizduoti
  render() {

    return (<div className="d-flex flex-wrap">
      {this.props.cars.map((car) => {
        return <div key={car.id}>
          <Card style={{ backgroundColor: "antiquewhite", marginRight: "10px" }}>
            <CardBody>
              <CardTitle>{car.automobilis}</CardTitle>
              <CardSubtitle>{car.pagaminimo_metai}</CardSubtitle>
              <CardSubtitle>{car.kuro_tipas}</CardSubtitle>
              <CardSubtitle>{car.pavaru_deze}</CardSubtitle>
              <Link to={`/cars/${car.id}`} className="nav-link">
                <Button>
                  Plačiau
              </Button>
              </Link>
            </CardBody>
          </Card>
        </div>;
      })}
    </div>)
  }
}

export default CarsItem;

