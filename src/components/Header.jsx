import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Credit from "../Credit";
import Transactions from "../Transactions";
import Debit from "../Debit";

class Header extends Component {
  state = {};
  render() {
    return (
      <Router>
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <Link to="/">
            <h3 className="navbar-brand">Bus Card System</h3>{" "}
          </Link>
          <div className="row">
            <div className="col">
              <button className="btn btn-success" style={{ borderRadius: 0 }}>
                <Link style={{ color: "white" }} to="/credit">
                  Fill
                </Link>
              </button>
            </div>
            <div className="col">
              <button className="btn btn-warning" style={{ borderRadius: 0 }}>
                <Link to="/debit" style={{ color: "white" }}>
                  Use
                </Link>
              </button>
            </div>
            <div className="col">
              <button className="btn btn-primary" style={{ borderRadius: 0 }}>
                <Link style={{ color: "white" }} to="/transactions">
                  Transactions
                </Link>
              </button>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/credit">
            <Credit />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/debit">
            <Debit />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Header;
