import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./bootstrap.css";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";
import DashboardComponent from "./DashboardComponent";
import SDSLibraryComponent from "./SDSLibraryComponent";
import LogoutComponent from "./LogoutComponent";
import NewSDSFromComponent from "./NewSDSFormComponent";
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./FooterComponent";

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
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
          <div className="mt-2 col-md-12"></div>
          <div className="mt-2 col-md-12"></div>
          <FooterComponent />
        </Router>
        {/* <LoginComponent /> 
        <WelcomeComponent/> */}
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
