import React, { Component } from 'react';
// import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddStationPage extends Component {

  render() {
    return (
      <div>
        <h1>Įveskite naują nuomos punktą</h1>
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <FormGroup className="col-6">
              <Label>Pavadinimas</Label>
              <Input type="text" onChange={this.handleChange} placeholder="Pavadinimas" />
            </FormGroup>
            <FormGroup className="col-6">
              <Label>Miestas</Label>
              <Input type="text" onChange={this.handleChange} placeholder="Miestas" />
            </FormGroup>
          </div>
          <div className="row">
            <FormGroup className="col-4">
              <Label>Adresas</Label>
              <Input type="text" placeholder="Adresas" />
            </FormGroup>

            <FormGroup className="col-4">
              <Label>Telefonas</Label>
              <Input type="text" placeholder="Telefonas" />
            </FormGroup>
            <FormGroup className="col-4">
              <Label>Darbo laikas</Label>
              <Input type="text" placeholder="Darbo laikas" />
            </FormGroup>
          </div>
          <Button>Pateikti</Button>
        </Form>
      </div >
    )
  }


}
export default AddStationPage;