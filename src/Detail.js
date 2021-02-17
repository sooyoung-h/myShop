import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail(props) {
    let {id} = useParams();
    let history = useHistory();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={props.state[id].path}></img>
                </div>
                <div className="col-md-6 mt-4">
                    <h4>{props.state[id].name}</h4>
                    <p>{props.state[id].content}</p>
                    <p>{props.state[id].price}</p>
                    <button>Add to cart</button>
                    <button onClick={()=>{
                        history.goBack();
                    }}>Go Back</button>
                </div>
            </div>
        </div>
    )
}

function myFunc(state){
    return {state : state}
  }
  
  export default connect(myFunc)(Detail);
  