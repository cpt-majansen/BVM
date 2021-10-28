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
import SDS_SectionOne from "./SDS_SectionOne";
import SDS_SectionTwo from "./SDS_SectionTwo";
import SDS_SectionThree from "./SDS_SectionThree";
import SDS_SectionFour from "./SDS_SectionFour";
import SDS_SectionFive from "./SDS_SectionFive";
import SDS_SectionSix from "./SDS_SectionSix";
import SDS_SectionSeven from "./SDS_SectionSeven";
import SDS_SectionEight from "./SDS_SectionEight";
import SDS_SectionNine from "./SDS_SectionNine";
import SDS_SectionTen from "./SDS_SectionTen";
import SDS_SectionEleven from "./SDS_SectionEleven";
import SDS_SectionTwelve from "./SDS_SectionTwelve";
import SDS_SectionThirteen from "./SDS_SectionThirteen";
import SDS_SectionFourteen from "./SDS_SectionFourteen";
import SDS_SectionFifteen from "./SDS_SectionFifteen";
import SDS_SectionSixteen from "./SDS_SectionSixteen";

export default class NewSDSFromComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tradename: "",
      synonyms: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div>
        <div className="Container">
          <hr></hr>
          <h4>NEW SDS FORM</h4>
          <hr></hr>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="1">SECTION 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">SECTION 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">SECTION 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4">SECTION 4</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="5">SECTION 5</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6">SECTION 6</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="7">SECTION 7</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="8">SECTION 8</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="9">SECTION 9</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="10">SECTION 10</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="11">SECTION 11</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="12">SECTION 12</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="13">SECTION 13</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="14">SECTION 14</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="15">SECTION 15</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="16">SECTION 16</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <SDS_SectionOne />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <SDS_SectionTwo />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <SDS_SectionThree />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <SDS_SectionFour />
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <SDS_SectionFive />
                </Tab.Pane>
                <Tab.Pane eventKey="6">
                  <SDS_SectionSix />
                </Tab.Pane>
                <Tab.Pane eventKey="7">
                  <SDS_SectionSeven />
                </Tab.Pane>
                <Tab.Pane eventKey="8">
                  <SDS_SectionEight />
                </Tab.Pane>
                <Tab.Pane eventKey="9">
                  <SDS_SectionNine />
                </Tab.Pane>
                <Tab.Pane eventKey="10">
                  <SDS_SectionTen />
                </Tab.Pane>
                <Tab.Pane eventKey="11">
                  <SDS_SectionEleven />
                </Tab.Pane>
                <Tab.Pane eventKey="12">
                  <SDS_SectionTwelve />
                </Tab.Pane>
                <Tab.Pane eventKey="13">
                  <SDS_SectionThirteen />
                </Tab.Pane>
                <Tab.Pane eventKey="14">
                  <SDS_SectionFourteen />
                </Tab.Pane>
                <Tab.Pane eventKey="15">
                  <SDS_SectionFifteen />
                </Tab.Pane>
                <Tab.Pane eventKey="16">
                  <SDS_SectionSixteen />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
