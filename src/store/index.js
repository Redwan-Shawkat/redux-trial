/** @format */
import React from "react";
import { createStore } from "redux";
// import {composeWithDevTools} from "@redux-devtools/extension";
import { combineReducers } from "redux";


  const counterReducer = (state = 20, action) => {
    switch (action.type){
       case "counter/Increment":{
        return state + action.payload;
       } 
       case "counter/Decrement":{
         return state - action.payload;
       }
       default:{
         return state;
       }
    }
  };

 const rootReducer = combineReducers ({
  counter: counterReducer,
  //theme: themeReducer,
 })
  
export const store = createStore(rootReducer, /*composeWithDevTools()*/);