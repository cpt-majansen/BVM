import React, { Component, ReactDOM } from "react";
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
// import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "tester",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  loginClicked() {
    //tester,helloworld
    if (
      this.state.username === "tester" &&
      this.state.password === "helloworld"
    ) {
      this.props.history.push(`/dashboard/${this.state.username}`);
      // this.setState({ showSuccessMessage: true });
      // this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        <hr></hr>
        <h1>Login</h1>
        <hr></hr>
        <div className="mt-2 col-md-12"></div>
        <div className="login-container">
          {/* <ShowLoginMessage
            hasLoginFailed={this.state.hasLoginFailed}
            showSuccessMessage={this.state.showSuccessMessage}
          /> */}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {/* {this.state.showSuccessMessage && <div>Login Successful</div>} */}

          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">Username:</Col>
              <Col md="auto">
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <div className="mt-2 col-md-12"></div>
            <Row className="justify-content-md-center">
              <Col md="auto">Password:</Col>
              <Col md="auto">
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <div class="mt-2 col-md-12"></div>
            <Row className="justify-content-md-center">
              <button className="btn btn=s" onClick={this.loginClicked}>
                Login
              </button>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
