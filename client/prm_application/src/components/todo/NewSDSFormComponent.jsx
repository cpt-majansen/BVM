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
      tradeName: "",
      synonyms: "",
      productCode: "",
      use: "",
      company: "",
      address: "",
      telephone: "",
      email: "",
      emergencyTelephone: "",
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
    this.saveSDSForm = this.saveSDSForm.bind(this);
    // this.callbackFunction = this.callbackFunction.bind(this);
    // this.changeState = this.changeState.bind(this);
  }

  // changeState(item) {
  //   this.setState({ tradeName: item[0] });
  //   this.setState({ synonyms: item[1] });
  //   this.setState({ productCode: item[2] });
  //   this.setState({ use: item[3] });
  //   this.setState({ company: item[4] });
  //   this.setState({ address: item[5] });
  //   this.setState({ telephone: item[6] });
  //   this.setState({ email: item[7] });
  //   this.setState({ emergencyTelephone: item[8] });
  //   // this.setState({ [item.target.name]: item.target.value });
  // }
  setTradeName(item) {
    this.setState({ tradeName: item });
  }
  setSynonyms(item) {
    this.setState({ synonyms: item });
  }
  setProductCode(item) {
    this.setState({ productCode: item });
  }
  setUse(item) {
    this.setState({ use: item });
  }
  setCompany(item) {
    this.setState({ company: item });
  }
  setAddress(item) {
    this.setState({ address: item });
  }
  setTelephone(item) {
    this.setState({ telephone: item });
  }
  setEmail(item) {
    this.setState({ email: item });
  }
  setEmergencyTelephone(item) {
    this.setState({ emergencyTelephone: item });
  }
  setGHGClassification(item) {
    this.setState({ ghgClassification: item });
  }
  setGHSLabelElements(item) {
    this.setState({ ghsLabelElements: item });
  }
  setSignalWord(item) {
    this.setState({ signalWord: item });
  }
  setHazardStatement(item) {
    this.setState({ hazardStatement: item });
  }
  setPrevention(item) {
    this.setState({ prevention: item });
  }
  setResponse(item) {
    this.setState({ response: item });
  }
  setStorage(item) {
    this.setState({ storage: item });
  }
  setDisposal(item) {
    this.setState({ disposal: item });
  }
  setOtherHazards(item) {
    this.setState({ otherHazards: item });
  }

  saveSDSForm() {
    console.log("tradeName: ", this.state.tradeName);
    console.log("synonyms: ", this.state.synonyms);
    console.log("productCode: ", this.state.productCode);
    console.log("use: ", this.state.use);
    console.log("company: ", this.state.company);
    console.log("address: ", this.state.address);
    console.log("telephone: ", this.state.telephone);
    console.log("email: ", this.state.email);
    console.log("emergencyTelephone: ", this.state.emergencyTelephone);
    console.log("GHG Classification: ", this.state.ghgClassification);
    console.log("GHS Label Elements: ", this.state.ghsLabelElements);
    console.log("signal word: ", this.state.signalWord);
    console.log("hazard statement: ", this.state.hazardStatement);
    console.log("prevention: ", this.state.prevention);
    console.log("response: ", this.state.response);
    console.log("storage: ", this.state.storage);
    console.log("disposal: ", this.state.disposal);
    console.log("otherhazards: ", this.state.otherHazards);
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
          <button className="btn btn=s" onClick={this.saveSDSForm}>
            Save SDS Form
          </button>
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
                  <SDS_SectionOne
                    data={{
                      setTradeName: this.setTradeName.bind(this),
                      setSynonyms: this.setSynonyms.bind(this),
                      setProductCode: this.setProductCode.bind(this),
                      setUse: this.setUse.bind(this),
                      setCompany: this.setCompany.bind(this),
                      setAddress: this.setAddress.bind(this),
                      setTelephone: this.setTelephone.bind(this),
                      setEmail: this.setEmail.bind(this),
                      setEmergencyTelephone:
                        this.setEmergencyTelephone.bind(this),
                    }}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <SDS_SectionTwo
                    data={{
                      setGHGClassification:
                        this.setGHGClassification.bind(this),
                      setGHSLabelElements: this.setGHSLabelElements.bind(this),
                      setSignalWord: this.setSignalWord.bind(this),
                      setHazardStatement: this.setHazardStatement.bind(this),
                      setPrevention: this.setPrevention.bind(this),
                      setResponse: this.setResponse.bind(this),
                      setStorage: this.setStorage.bind(this),
                      setDisposal: this.setDisposal.bind(this),
                      setOtherHazards: this.setOtherHazards.bind(this),
                    }}
                  />
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
