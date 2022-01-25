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

export default class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.SDSLibraryClicked = this.SDSLibraryClicked.bind(this);
    this.NewSDSFormClicked = this.NewSDSFormClicked.bind(this);
  }
  render() {
    return (
      <div>
        <hr />
        <h1>DASHBOARD</h1>
        <hr />
        <div className="container">
          <h2>Product Classification</h2>
          <button>x</button>
          {/* Welcome {this.props.match.params.name}. You can manage the safety data sheets{" "}
            <Link to="/todos">here</Link> */}
        </div>
        <div className="container">
          <h2>Safety Data Sheets</h2>
          <button
            className="btn btn-primary mr-1"
            onClick={this.NewSDSFormClicked}
          >
            New SDS Form
          </button>
          <button className="btn btn-primary mr-1"> Edit SDS Form</button>
          <button className="btn btn-primary mr-1">Generate SDS Report</button>
          <button
            className="btn btn-primary mr-1"
            onClick={this.SDSLibraryClicked}
          >
            View SDS Library
          </button>
          {/* Welcome {this.props.match.params.name}. You can manage the safety data sheets{" "}
            <Link to="/todos">here</Link> */}
        </div>
        <div className="container">
          <h2>Regulatory Information</h2>
          <button>x</button>
          {/* Welcome {this.props.match.params.name}. You can manage the safety data sheets{" "}
            <Link to="/todos">here</Link> */}
        </div>
        <div className="container">
          <h2>Product / Chemical Risk</h2>
          <button>x</button>
          {/* Welcome {this.props.match.params.name}. You can manage the safety data sheets{" "}
            <Link to="/todos">here</Link> */}
        </div>
      </div>
    );
  }
  SDSLibraryClicked() {
    //tester,helloworld
    this.props.history.push("/sdslibrary/tester");
    // this.setState({ showSuccessMessage: true });
    // this.setState({ hasLoginFailed: false });
  }
  NewSDSFormClicked() {
    //tester,helloworld
    this.props.history.push("/newsdsform/tester");
    // this.setState({ showSuccessMessage: true });
    // this.setState({ hasLoginFailed: false });
  }
}
