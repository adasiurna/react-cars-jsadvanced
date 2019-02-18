import React, { Component } from 'react';
// import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddCarPage extends Component {

  render() {
    return (
      <div>
        <h1>Įveskite naują automobilį</h1>
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <FormGroup className="col-6">
              <Label>Gamintojas</Label>
              <Input type="text" onChange={this.handleChange} placeholder="Gamintojas" />
            </FormGroup>
            <FormGroup className="col-6">
              <Label>Modelis</Label>
              <Input type="text" onChange={this.handleChange} placeholder="Modelis" />
            </FormGroup>
          </div>
          <div className="row">
            <FormGroup className="col-4">
              <Label>Metai</Label>
              <Input type="number" />
            </FormGroup>

            <FormGroup className="col-4">
              <Label>Sėdimų vietų skaičius</Label>
              <Input type="number" />
            </FormGroup>
            <FormGroup className="col-4">
              <Label>Durų skaičius</Label>
              <Input type="number" />
            </FormGroup>
          </div>
          <div className="row">
            <FormGroup className="col-4">
              <Label>Kuras</Label>
              <Input type="select" name="category">
                <option>Benzinas</option>
                <option>Dyzelinas</option>
                <option>Dujos</option>
                <option>Elektra</option>
              </Input>
            </FormGroup>
            <FormGroup className="col-4">
              <Label>Pavarų dėžė</Label>
              <Input type="select" name="category">
                <option>Mechaninė</option>
                <option>Automatinė</option>
              </Input>
            </FormGroup>
            <FormGroup className="col-4">
              <Label>Papildoma informacija</Label>
              <Input type="text" />
            </FormGroup>
          </div>
          <Button>Pateikti</Button>
        </Form>
      </div >
    )
  }


}
export default AddCarPage;