import React, { Component } from 'react';
import { Container, Button, DropdownButton, Dropdown, Table } from 'react-bootstrap';

class TestLibrary extends Component {
  render() {
    return(
      <Container id="testLibrary">
        <h1>Test Library</h1>
        <div className="panels-container">
          <h4><b>PANELS</b></h4>
          <div className="panel-sample">
            <div className="panel-item active selected"></div>
            <div className="panel-item active unselected"></div>
            <div className="panel-item inactive"></div>
          </div>
        </div>
        <div className="buttons-container">
          <h4><b>BUTTONS</b></h4>
          <div className="row">
            <div className="col-lg-7 large-buttons-container">
              <h5><b>LARGE BUTTON</b></h5>
              <div className="button-sample">
                <div className="d-flex">
                  <Button variant="primary" className="" size="lg">Close Shipment</Button>
                  <Button variant="primary" className="active" size="lg">Close Shipment</Button>
                  <Button variant="primary" className="disabled" size="lg">Close Shipment</Button>
                </div>
                <div className="d-flex">
                  <Button variant="primary" className="" size="lg">Show</Button>
                  <Button variant="primary" className="active" size="lg">Show</Button>
                  <Button variant="primary" className="disabled" size="lg">Show</Button>
                </div>
                <div className="d-flex">
                  <Button variant="primary" className="" size="lg">Go</Button>
                  <Button variant="primary" className="active" size="lg">Go</Button>
                  <Button variant="primary" className="disabled" size="lg">Go</Button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 small-buttons-container">
              <h5><b>SMALL BUTTON</b></h5>
              <div className="button-sample">
                <div className="d-flex">
                  <Button variant="primary" className="" size="sm">Batch Now</Button>
                  <Button variant="primary" className="active" size="sm">Batch Now</Button>
                  <Button variant="primary" className="disabled" size="sm">Batch Now</Button>
                </div>
                <div className="d-flex">
                  <Button variant="danger" className="" size="sm">Delete</Button>
                  <Button variant="danger" className="active" size="sm">Delete</Button>
                  <Button variant="danger" className="disabled" size="sm">Delete</Button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ghost-buttons-container">
              <h5><b>GHOST BUTTON</b></h5>
              <div className="button-sample">
                <div className="d-flex">
                  <Button variant="outline-primary" className="" size="sm">SHIP</Button>
                  <Button variant="outline-primary" className="active" size="sm">SHIP</Button>
                  <Button variant="outline-primary" className="disabled" size="sm">SHIP</Button>
                </div>
                <div className="d-flex">
                  <Button variant="outline-danger" className="" size="sm">Cancel</Button>
                  <Button variant="outline-danger" className="active" size="sm">Cancel</Button>
                  <Button variant="outline-danger" className="disabled" size="sm">Cancel</Button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 dropdown-buttons-container">
              <h5><b>DROP DOWN BUTTON</b></h5>
              <div className="button-sample">
                <div className="d-flex">
                  <DropdownButton
                    variant="primary"
                    title="Send"
                    drop="down"
                  >
                    <Dropdown.Item eventKey="1" active>Indigo 7500-1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Indigo 7500-2</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Indigo 7500-3</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Indigo 7500-4</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Indigo 7500-5</Dropdown.Item>
                    <Dropdown.Item eventKey="6">Indigo 7500-6</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>
            <div className="col-lg-4 reportaction-buttons-container">
              <h5><b>REPORT ACTION BUTTON</b></h5>
              <div className="button-sample">
                <div className="d-flex">
                  <Button variant="outline-primary" className="" size="sm">Edit</Button>
                  <Button variant="outline-primary" className="active" size="sm">Edit</Button>
                  <Button variant="outline-primary" className="disabled" size="sm">Edit</Button>
                </div>
                <div className="d-flex">
                  <Button variant="outline-danger" className="" size="sm">Delete</Button>
                  <Button variant="outline-danger" className="active" size="sm">Delete</Button>
                  <Button variant="outline-danger" className="disabled" size="sm">Delete</Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 table-container">
              <div className="table-sample">
                <Table striped hover>
                  <tbody>
                    <tr>
                      <td>Monday, 07:00 - Monday, 17:00</td>
                      <td className="d-flex">
                        <Button variant="outline-primary" className="" size="sm">Edit</Button>
                        <Button variant="outline-danger" className="" size="sm">Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Monday, 07:00 - Monday, 17:00</td>
                      <td className="d-flex">
                        <Button variant="outline-primary" className="" size="sm">Edit</Button>
                        <Button variant="outline-danger" className="" size="sm">Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Monday, 07:00 - Monday, 17:00</td>
                      <td className="d-flex">
                        <Button variant="outline-primary" className="" size="sm">Edit</Button>
                        <Button variant="outline-danger" className="" size="sm">Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Monday, 07:00 - Monday, 17:00</td>
                      <td className="d-flex">
                        <Button variant="outline-primary" className="" size="sm">Edit</Button>
                        <Button variant="outline-danger" className="" size="sm">Delete</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default TestLibrary;