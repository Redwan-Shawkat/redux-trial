/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/index";
import { dispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((storeState) => storeState.counter);
  
  return (
    <div>
      <p> Count: {counter} </p>
      <hr />
      <button
        onClick={() =>
          store.dispatch({ type: "counter/Increment", payload: 1 })
        }
      >
        {" "}
        Increment{" "}
      </button>
      <button
        onClick={() =>
          store.dispatch({ type: "counter/Decrement", payload: 1 })
        }
      >
        {" "}
        Decrement{" "}
      </button>
    </div>
  );
};

export default Counter;
