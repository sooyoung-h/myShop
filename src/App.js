import logo from './logo.svg';
import './App.css';
import { Nav, Jumbotron  } from "react-bootstrap";
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <header>
        <span className="dessert" >Dessert</span>
        <ul>
          <li>Home</li>
          <li>Detail</li>
          <li>Cart</li>
        </ul>
      </header>
      <Jumbotron className="background">
        <span>Hello, world!</span>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
      </Jumbotron>

      <div className="divider">
        Dessert make you happy
      </div>

      <div className="items">
        <div className="items__item" >
          <img src={props.state[0].path} ></img>
          
        </div>
        <div className="items__item" >

        </div>
        <div className="items__item" >

        </div>
      </div>

      <footer>
        contact@food.make.you.happy
      </footer>
    </div>
  );
}

function myFunc(state){
  return {state : state}
}

export default connect(myFunc)(App);
