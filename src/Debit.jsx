import React, { Component } from "react";
import { Link } from "react-router-dom";

class Debit extends Component {
  state = {
    tarjeta: { id: 0 },
    monto: 0,
    done: 0
  };

  handleID = e => {
    let tarjeta = this.state.tarjeta;
    tarjeta.id = e.target.value;
    this.setState({ tarjeta: tarjeta });
  };

  handleMonto = e => {
    this.setState({ monto: e.target.value });
  };

  postToAPI = () => {
    const tarjeta = this.state.tarjeta;
    tarjeta.id = parseInt(tarjeta.id);
    const jsonPost = {
      tarjeta: tarjeta,
      monto: parseInt(this.state.monto)
    };

    fetch("http://localhost:8080/test_war/debitar", {
      method: "POST",
      body: JSON.stringify(jsonPost),
      headers: new Headers({ "content-type": "application/json" })
    }).then(() => this.setState({ done: 1 }));
  };

  render() {
    return this.state.done === 0 ? (
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
        <h2 className="display-4">Use my Card</h2>
        <br></br>
        <form>
          <div className="form-group">
            <label>Card ID</label>
            <input
              className="form-control"
              onChange={this.handleID}
              value={this.state.tarjeta.id}
              placeholder="Card ID"
            />
            <small className="form-text text-muted">
              Check the back of your card's number
            </small>
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              className="form-control"
              onChange={this.handleMonto}
              value={this.state.monto}
              placeholder="150"
            />
          </div>
        </form>
        <button className="btn btn-success m-2" onClick={this.postToAPI}>
          Confirm
        </button>
      </div>
    ) : (
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
        <h1>All Done!</h1>
        <p>You used your card, you spent ${this.state.monto}</p>

        <button className="btn btn-success m-2">
          <Link to="/" style={{ color: "white" }}>
            Go home
          </Link>
        </button>
      </div>
    );
  }
}

export default Debit;
