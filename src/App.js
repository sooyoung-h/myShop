import logo from './logo.svg';
import './App.css';
import { Nav, Jumbotron  } from "react-bootstrap";
import { Route } from 'react-router-dom';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { connect } from "react-redux";

function Home(props) {
  //!! 여기서 props.(  )는 리덕스에서 받아온 데이터가 아닌
  //상위 컴포넌트가 태그 속성으로 전달해준 데이터임 !!
  return(
      <div className="home">
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
          Dessert makes you happy
        </div>

        <div className="items">
          <div className="items__item" >
          <img src={props.state[0].path}></img>
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
    
  )
}

function App(props) {
  return (
    <div className="App">
      <Route path="/">
        <Home state={props.state} ></Home>
        {/* 리덕스로 받아온 스테이트를 다시 하위컴포넌트로 전달해줄 경우 */}
      </Route>
      <Route path="/detail/:id">
      </Route>
      <Route path="/cart">
      </Route>
    </div>
  );
}

function myFunc(state){
  return {state : state}
}

export default connect(myFunc)(App);