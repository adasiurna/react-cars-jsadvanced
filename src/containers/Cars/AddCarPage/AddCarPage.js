import React, { Component } from 'react';
// import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddCarPage extends Component {

  render() {
    return (
      <div>
        <h1>Įveskite naują automobilį</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Gamintojas</Label>
            <Input type="text" onChange={this.handleChange} value={this.state.carForm.title} placeholder="Gamintojas" />
          </FormGroup>
          <FormGroup>
            <Label>Modelis</Label>
            <Input type="text" onChange={this.handleChange} value={this.state.carForm.title} placeholder="Modelis" />
          </FormGroup>
          <FormGroup>
            <Label>Metai</Label>
            <Input type="number" value={this.state.author} />
          </FormGroup>
          <div className="row">
            <FormGroup className="col-4">
              <Label>Kuras</Label>
              <Input type="select" name="category" value={this.state.category} >
                <option>Benzinas</option>
                <option>Dyzelinas</option>
                <option>Elektra</option>
              </Input>
            </FormGroup>
            <FormGroup className="col-4">
              <Label>Pavarų dėžė</Label>
              <Input type="select" name="category" value={this.state.category} >
                <option>Mechaninė</option>
                <option>Automatinė</option>
              </Input>
            </FormGroup>
            <FormGroup className="col-4">
              <Label>Sėdimų vietų skaičius</Label>
              <Input type="number" value={this.state.author} />
            </FormGroup>
          </div>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }


}
export default AddCarPage;