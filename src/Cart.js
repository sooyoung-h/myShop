import React, { useState } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import "./Cart.css";

function Cart(props) {
  return (
    <div className="cart">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">DRINK</th>
            <th scope="col">PRICE</th>
            <th scope="col">NUMBER</th>
            <th scope="col">COUNT</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr>
                <th scope="row">{i}</th>
                <td>{props.state[i].name}</td>
                <td>{props.state[i].price}</td>
                <td>{props.state[i].total}</td>
                <td>
                  <span
                    className="cartBtn"
                    onClick={() => {
                      props.dispatch({ type: "addItem", id: i });
                    }}
                  >
                    +
                  </span>
                  <span
                    className="cartBtn"
                    onClick={() => {
                      props.dispatch({ type: "minusItem", id: i });
                    }}
                  >
                    -
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function myFunc(state) {
  return { state: state };
}

export default connect(myFunc)(Cart);
