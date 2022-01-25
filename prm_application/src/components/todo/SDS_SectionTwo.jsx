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

export default class SDS_SectionTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ghgClassification: "",
      ghsLabelElements: "",
      signalWord: "",
      hazardStatement: "",
      prevention: "",
      response: "",
      storage: "",
      disposal: "",
      otherHazards: "",
    };

    this.saveClicked = this.saveClicked.bind(this);
  }

  saveClicked() {
    this.props.data.setGHGClassification(this.state.ghgClassification);
    this.props.data.setGHSLabelElements(this.state.ghsLabelElements);
    this.props.data.setSignalWord(this.state.signalWord);
    this.props.data.setHazardStatement(this.state.hazardStatement);
    this.props.data.setPrevention(this.state.prevention);
    this.props.data.setResponse(this.state.response);
    this.props.data.setStorage(this.state.storage);
    this.props.data.setDisposal(this.state.disposal);
    this.props.data.setOtherHazards(this.state.otherHazards);
  }

  render() {
    return (
      <div>
        <Badge pill bg="light" text="dark">
          <h6>Section 2. Hazard Identification</h6>
        </Badge>
        <hr />
        <Row>
          <Col md="auto">
            {" "}
            <h3>Classification of the substance or mixture</h3>
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
                  <Button variant="primary">GHS Classification</Button>
                </Col>
                <div className="mt-2 col-md-12"></div>
                <Col md="auto">
                  {" "}
                  <Button variant="primary">Classification</Button>
                </Col>
                <div className="mt-2 col-md-12"></div>
                <Col md="auto">
                  {" "}
                  <Button variant="primary">Hazard Statement</Button>
                </Col>
                <div className="mt-2 col-md-12"></div>
                <Col md="auto">
                  {" "}
                  <Button variant="primary">Prevention</Button>
                </Col>
                <div className="mt-2 col-md-12"></div>
                <Col md="auto">
                  {" "}
                  <Button variant="primary">Response</Button>
                </Col>
                <div className="mt-2 col-md-12"></div>
                <Col md="auto">
                  {" "}
                  <Button variant="primary">Storage</Button>
                </Col>
                <div className="mt-2 col-md-12"></div>
                <Col md="auto">
                  {" "}
                  <Button variant="primary">Disposal</Button>
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
                GHG Classification:
              </Form.Label>
              <Col sm="auto">
                <Form.Select
                  defaultValue="Choose..."
                  onChange={(e) =>
                    this.setState({ ghgClassification: e.target.value })
                  }
                >
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              {/* <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col> */}
              {/* <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col> */}
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
                GHS Label Elements:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={this.state.ghsLabelElements}
                  onChange={(e) =>
                    this.setState({ ghsLabelElements: e.target.value })
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
              <Form.Label column sm="4">
                Signal Word:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={this.state.signalWord}
                  onChange={(e) =>
                    this.setState({ signalWord: e.target.value })
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
                Hazard Statement:
              </Form.Label>
              <Col sm="auto">
                <Form.Select
                  defaultValue="Choose..."
                  onChange={(e) =>
                    this.setState({ hazardStatement: e.target.value })
                  }
                >
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              {/* <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col> */}
            </Form.Group>
          </Form>
        </Row>

        <div className="mt-2 col-md-12"></div>
        <Row>
          <Col md="auto">
            {" "}
            <h3>Precautionary Statements</h3>
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
                Prevention:
              </Form.Label>
              <Col sm="auto">
                <Form.Select
                  defaultValue="Choose..."
                  onChange={(e) =>
                    this.setState({ prevention: e.target.value })
                  }
                >
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              {/* <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col> */}
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
                Response:
              </Form.Label>
              <Col sm="auto">
                <Form.Select
                  defaultValue="Choose..."
                  onChange={(e) => this.setState({ response: e.target.value })}
                >
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              {/* <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col> */}
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
                Storage:
              </Form.Label>
              <Col sm="auto">
                <Form.Select
                  defaultValue="Choose..."
                  onChange={(e) => this.setState({ storage: e.target.value })}
                >
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              {/* <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col> */}
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
                Disposal:
              </Form.Label>
              <Col sm="auto">
                <Form.Select
                  defaultValue="Choose..."
                  onChange={(e) => this.setState({ disposal: e.target.value })}
                >
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col>
              {/* <Col sm="auto">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>ABC</option>
                  <option>BIG COMPANY</option>
                  <option>SHELL</option>
                </Form.Select>
              </Col> */}
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
                Other Hazards:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={this.state.otherHazards}
                  onChange={(e) =>
                    this.setState({ otherHazards: e.target.value })
                  }
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
