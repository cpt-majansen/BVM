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

export default class SDS_SectionFifteen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
    };
    // this.testClicked = this.testClicked.bind(this);
  }

  // testClicked() {
  //   //tester,helloworld
  //   this.state.test == this.Form;
  // }

  render() {
    return (
      <div>
        <Badge pill bg="light" text="dark">
          <h6>Section 15. Regulatory Information</h6>
        </Badge>
        <hr />

        <div className="mt-2 col-md-12"></div>
        <Row>
          <Form className="test">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="auto">
                Regulatory Info:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={this.state.test}
                  onChange={(e) => this.setState({ test: e.target.value })}
                />
              </Col>
            </Form.Group>
          </Form>
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
                Regulatory Info:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={this.state.test}
                />
              </Col>
            </Form.Group>
          </Form>
        </Row>
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
