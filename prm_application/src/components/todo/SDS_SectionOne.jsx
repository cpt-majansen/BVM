import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import "./bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default class SDS_SectionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tradeName: "",
      synonyms: "",
      productCode: "",
      use: "",
      company: "",
      address: "",
      telephone: "",
      email: "",
      emergencyTelephone: "",
    };

    this.saveClicked = this.saveClicked.bind(this);
  }

  saveClicked() {
    this.props.data.setTradeName(this.state.tradeName);
    this.props.data.setSynonyms(this.state.synonyms);
    this.props.data.setProductCode(this.state.productCode);
    this.props.data.setUse(this.state.use);
    this.props.data.setCompany(this.state.company);
    this.props.data.setAddress(this.state.address);
    this.props.data.setTelephone(this.state.telephone);
    this.props.data.setEmail(this.state.email);
    this.props.data.setEmergencyTelephone(this.state.emergencyTelephone);
  }

  render() {
    return (
      <div>
        <Badge pill bg="light" text="dark">
          <h6>
            Section 1. Identification of the substance/mixture and of of the
            company/undertaking
          </h6>
        </Badge>
        <hr />
        <Row>
          <Col md="auto">
            {" "}
            <h3>Product Identifier</h3>
          </Col>
          <Col>
            <div className="add-new-form">
              <Row>
                <Col md="auto">
                  <div className="mt-2 col-md-12"></div>
                  <Badge pill bg="warning" text="dark">
                    <h4>Forms</h4>
                  </Badge>
                </Col>
                <div className="mt-2 col-md-12"></div>
                <Col md="auto">
                  {" "}
                  <Button variant="primary">Add Use</Button>
                </Col>
                <div className="mt-2 col-md-12"></div>
                <Col md="auto">
                  {" "}
                  <Button variant="primary">Add Company</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className="mt-2 col-md-12"></div>
        <Row>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="auto">
                Trade Name:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Trade Name"
                  value={this.state.tradeName}
                  onChange={(e) => this.setState({ tradeName: e.target.value })}
                />
              </Col>
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="auto">
                Synonyms:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Synonyms"
                  value={this.state.synonyms}
                  onChange={(e) => this.setState({ synonyms: e.target.value })}
                />
              </Col>
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="auto">
                Product Code:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Product Code"
                  value={this.state.productCode}
                  onChange={(e) =>
                    this.setState({ productCode: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="auto">
                Use:
              </Form.Label>
              <Col sm="10">
                <Form.Select
                  defaultValue="Choose..."
                  onChange={(e) => this.setState({ use: e.target.value })}
                >
                  <option>Choose...</option>
                  <option>Soap</option>
                  <option>Petrol</option>
                  <option>Bleach</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Row>

        <div className="mt-2 col-md-12"></div>
        <Row>
          <Col md="auto">
            {" "}
            <h3>Manufacturer or Supplier Details</h3>
          </Col>
        </Row>
        <div className="mt-2 col-md-12"></div>
        <Row>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="auto">
                Company:
              </Form.Label>
              <Col sm="10">
                <Form.Select
                  defaultValue="Choose..."
                  onChange={(e) => this.setState({ company: e.target.value })}
                >
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="auto">
                Address:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={(e) => this.setState({ address: e.target.value })}
                />
              </Col>
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="auto">
                Telephone:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="021 123 4567"
                  value={this.state.telephone}
                  onChange={(e) => this.setState({ telephone: e.target.value })}
                />
              </Col>
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="auto">
                Email Address:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="example@abc.co.za"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </Col>
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="auto">
                Emergency Telephone Number:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="021 987 9876"
                  value={this.state.emergencyTelephone}
                  onChange={(e) =>
                    this.setState({ emergencyTelephone: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
          </Form>
        </Row>
        {/* <div className="mt-2 col-md-12"></div>
        <button className="btn btn=s" onClick={this.saveClicked}>
          Save Section
        </button>
        <div className="mt-5 col-md-12"></div> */}
        <Container>
          <Row xs="auto">
            <Col>
              <div className="mt-2 col-md-12"></div>
              <button className="btn btn=s" onClick={this.saveClicked}>
                Save Section
              </button>
              <div className="mt-5 col-md-12"></div>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
