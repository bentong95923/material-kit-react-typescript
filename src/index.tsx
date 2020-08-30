import React from "react";
import ReactDOM from "react-dom";
//import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "./views/Components/Components";
import LandingPage from "./views/LandingPage/LandingPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import LoginPage from "./views/LoginPage/LoginPage";

//var hist = createBrowserHistory();

ReactDOM.render(
  /* 
    Please read the following link to find the difference between the Hash and Browser Router.
    https://reactrouter.com/web/guides/primary-components#:~:text=At%20the%20core%20of%20every,BrowserRouter%3E%20uses%20regular%20URL%20paths.
  */
  //<HashRouter>
  <BrowserRouter>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </BrowserRouter>,
  // </HashRouter>,
  document.getElementById("root")
);
