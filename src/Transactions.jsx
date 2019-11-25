import React, { Component } from "react";
import { Link } from "react-router-dom";

class Transactions extends Component {
  state = {
    fetched: 0,
    transacciones: [],
    id: 0
  };

  getAPI = () => {
    fetch("http://localhost:8080/test_war/transacciones/" + this.state.id)
      .then(res => res.json())
      .then(res => {
        this.setState({ transacciones: res, fetched: 1 });
      });
  };

  handleID = e => {
    this.setState({ id: e.target.value });
  };
  render() {
    return (
      <div
        className="container"
        style={{
          marginTop: 150,
          textAlign: "center",
          width: "70%",
          padding: 20,
          border: "1px solid #DDD"
        }}
      >
        {this.state.fetched === 0 ? (
          <div>
            <h1>Transactions</h1>
            <br></br>
            <input onChange={this.handleID} value={this.state.id}></input>
            <button className="btn btn-success m-2" onClick={this.getAPI}>
              Search
            </button>
          </div>
        ) : (
          this.state.transacciones.map(transaccion => (
            <div
              style={{
                textAlign: "left",
                border: "1px solid #DDD",
                padding: 20
              }}
            >
              <p>Date: {transaccion.fecha}</p>
              <p>Quantity: ${transaccion.monto}</p>
              <p>Operation: {transaccion.operacion} </p>
            </div>
          ))
        )}
        <button className="btn btn-success m-2">
          <Link to="/" style={{ color: "white" }}>
            Back
          </Link>
        </button>
      </div>
    );
  }
}

export default Transactions;
