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

export default class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/dashboard/:name" component={DashboardComponent} />
            <Route path="/sdslibrary" component={SDSLibraryComponent} />
            <Route path="/logout" component={LogoutComponent} />
            <Route path="/newsdsform" component={NewSDSFromComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
        {/* <LoginComponent /> 
        <WelcomeComponent/> */}
      </div>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <div>
            <a className="navbar-brand">PRM Application</a>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/dashboard/tester">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/sds">
                SDS
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <div>
        <h1>You are logged out of the PRM system</h1>
        <div className="container">Enjoy Your Day</div>
      </div>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">
          All Rights Reserved 2021 BVM Product Risk Management
        </span>
      </footer>
    );
  }
}

class NewSDSFromComponent extends Component {
  render() {
    return (
      <div>
        <div className="Container">
          <h1>NEW SDS FORM</h1>
          <hr></hr>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">SECTION 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">SECTION 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="second">hello 2</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

class SDSLibraryComponent extends Component {
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

class ErrorComponent extends Component {
  render() {
    return <div>An error occured.</div>;
  }
}

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.SDSLibraryClicked = this.SDSLibraryClicked.bind(this);
    this.NewSDSFormClicked = this.NewSDSFormClicked.bind(this);
  }
  render() {
    return (
      <div>
        <h1>DASHBOARD</h1>
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

class LoginComponent extends Component {
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
      <div className="login-container">
        <h1>Login</h1>
        <div className="mt-2 col-md-12"></div>
        <div className="login-inner-container">
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

// function ShowLoginMessage(props) {
//   if (props.hasLoginFailed && !props.showSuccessMessage) {
//     return <div>Invalid Credentials</div>;
//   } else if (!props.hasLoginFailed && props.showSuccessMessage) {
//     return <div>Login Successful</div>;
//   }
//   return null;
// }
