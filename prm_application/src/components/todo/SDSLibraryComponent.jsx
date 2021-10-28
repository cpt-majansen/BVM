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

export default class SDSLibraryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          sdsName: "Ethylene Dichloride",
          owner: "Sasol",
          createdBy: "Brian",
          dateCreated: "12-08-2021",
          editedBy: "Matthew",
          editedDate: "14-09-2021",
          active: "Y",
        },
        {
          id: 2,
          sdsName: "Sodium Hypochlorite",
          owner: "Caltex",
          createdBy: "Moloi",
          dateCreated: "09-08-2021",
          editedBy: "Brian",
          editedDate: "12-09-2021",
          active: "Y",
        },
        {
          id: 3,
          sdsName: "Sulfuric Acid",
          owner: "Shell",
          createdBy: "Moloi",
          dateCreated: "05-08-2021",
          editedBy: "Matthew",
          editedDate: "13-09-2021",
          active: "N",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>SAFETY DATA SHEETS</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>SDS Name</th>
                <th>Owner</th>
                <th>Created By</th>
                <th>Date Created</th>
                <th>Edited By</th>
                <th>Date Edited</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.sdsName}</td>
                  <td>{todo.owner}</td>
                  <td>{todo.createdBy}</td>
                  <td>{todo.dateCreated}</td>
                  <td>{todo.editedBy}</td>
                  <td>{todo.editedDate}</td>
                  <td>{todo.active}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
