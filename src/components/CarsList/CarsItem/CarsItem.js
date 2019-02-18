import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  CardImg
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './CarsItem.css';


class CarsItem extends Component {

  // sitas stateless komponentas turi priimti items masyva iš props ir ji atvaizduoti
  render() {

    return (<div className="d-flex flex-wrap">
      {this.props.cars.map((car) => {
        return <div key={car.id}>
          <Card className="car-item-card">
            <CardImg top width="100%" src="https://imgct2.aeplcdn.com/img/800x600/car-data/big/renault-duster-image-13039.png?v=31" alt="Card image cap" />

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

