import logo from './logo.svg';
import './App.css';
import { Nav, Jumbotron  } from "react-bootstrap";
import { Route } from 'react-router-dom';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { connect } from "react-redux";

function Modal(props) {
  //하위로 컴포넌트를 뺴놓을 때마다 태그 속성으로 보내주고 props.( )로 받기!
  return (
    <div className="detailModal">
      <img src={props.state[props.num].path}></img>
      <h4 className="item__name" >{props.state[props.num].name}</h4>
      <p className="item__content" >{props.state[props.num].content}</p>
      <p className="item__price" >{props.state[props.num].price}원</p>
      <button className="item__detailBtn smallBtn" onClick={()=>{
        props.modalChange(false);
      }}>Close</button>
    </div>
  )
}

function Home(props) {
  //!! 여기서 props.(  )는 리덕스에서 받아온 데이터가 아닌
  //상위 컴포넌트가 태그 속성으로 전달해준 데이터임 !!
  let [modal, modalChange] = useState(false);
  let [num, numChange] = useState(0);

  
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
          <span className="jumbo__title" >Enjoy your dessert time</span>
          <p className="jumbo__content" >
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
        </Jumbotron>

        <div className="divider">
          Dessert makes you happy
        </div>

        <div className="items">
          {
            props.state.map((a,i)=>{
              return (
                <div className="items__item" >
                  <img src={props.state[i].path}></img>
                  <h4 className="item__name" >{props.state[i].name}</h4>
                  <p className="item__content" >{props.state[i].content}</p>
                  <p className="item__price" >{props.state[i].price}원</p>
                  <button className="item__detailBtn smallBtn" onClick={()=>{
                    modalChange(true);
                    numChange(i);
                  }}>Detail</button>
                  <button className="item__addBtn smallBtn" onClick={()=>{
                    console.log('add button');
                  }}>Add</button>
                  
                </div>
              )
            })
          }
        </div>
        {
            modal === true
            ? <Modal state={props.state} num={num} modalChange={modalChange} ></Modal>
            : null
        }

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