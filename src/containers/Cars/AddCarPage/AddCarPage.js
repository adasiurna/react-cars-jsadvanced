import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class AddCarPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      manufacturer: '',
      model: '',
      year: '',
      fuelType: '',
      seatsNumber: '',
      doorsNumber: '',
      isMechanic: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleFuelTypeChange = this.handleFuelTypeChange.bind(this);
    this.handleSeatsNumberChange = this.handleSeatsNumberChange.bind(this);
    this.handleDoorsNumberChange = this.handleDoorsNumberChange.bind(this);
    this.handleIsMechanicChange = this.handleIsMechanicChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post(`http://localhost:2000/cars`, this.state).then(response => {
      console.log(response)
    })
  }
  handleManufacturerChange(e) {
    this.setState({ manufacturer: e.target.value });
  }
  handleModelChange(e) {
    this.setState({ model: e.target.value });
  }
  handleYearChange(e) {
    this.setState({ year: e.target.value });
  }
  handleFuelTypeChange(e) {
    this.setState({ fuelType: e.target.value });
  }
  handleSeatsNumberChange(e) {
    this.setState({ seatsNumber: e.target.value });
  }
  handleDoorsNumberChange(e) {
    this.setState({ doorsNumber: e.target.value });
  }
  handleIsMechanicChange(e) {
    this.setState({ isMechanic: e.target.value });
  }




  render() {
    return (
      <div>
        <h1>Įveskite naują automobilį</h1>
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <FormGroup className="col-md-6">
              <Label>Gamintojas</Label>
              <Input
                type="text"
                onChange={this.handleManufacturerChange}
                value={this.state.manufacturer}
                placeholder="Gamintojas"
              />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label>Modelis</Label>
              <Input
                type="text"
                onChange={this.handleModelChange}
                value={this.state.model}
                placeholder="Modelis" />
            </FormGroup>
          </div>
          <div className="row">
            <FormGroup className="col-md-4">
              <Label>Metai</Label>
              <Input
                type="number"
                min="1980"
                max="2019"
                onChange={this.handleYearChange}
                value={this.state.year}
              />
            </FormGroup>
            <FormGroup className="col-md-4">
              <Label>Sėdimų vietų skaičius</Label>
              <Input
                type="number"
                min="2"
                max="20"
                onChange={this.handleSeatsNumberChange}
                value={this.state.seatsNumber}
              />
            </FormGroup>
            <FormGroup className="col-md-4">
              <Label>Durų skaičius</Label>
              <Input
                type="number"
                min="2"
                max="9"
                onChange={this.handleDoorsNumberChange}
                value={this.state.doorsNumber}
              />
            </FormGroup>
          </div>
          <div className="row">
            <FormGroup className="col-md-4">
              <Label>Kuras</Label>
              <Input
                type="select"
                onChange={this.handleFuelTypeChange}
                value={this.state.fuelType}
              >
                <option value="benzinas">Benzinas</option>
                <option value="dyzelis">Dyzelinas</option>
                <option value="dujos">Dujos</option>
                <option value="elektra">Elektra</option>
              </Input>
            </FormGroup>
            <FormGroup className="col-md-4">
              <Label>Pavarų dėžė</Label>
              <Input
                type="select"
                onChange={this.handleIsMechanicChange}
                value={this.state.isMechanic}
                name="category"
              >
                <option value="true">Mechaninė</option>
                <option value="false">Automatinė</option>
              </Input>
            </FormGroup>
            <FormGroup className="col-md-4">
              <Label>Papildoma informacija</Label>
              <Input type="text" />
            </FormGroup>
          </div>
          <Button type="submit">Pateikti</Button>
        </Form>
      </div >
    )
  }
}
export default AddCarPage;