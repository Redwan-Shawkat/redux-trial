import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {store} from "../src/store/index"
import {dispatch} from "react-redux";
import Counter from "../src/components/Counter";

function App({children}) {

  
  const theme = useSelector((storeState) => storeState.theme)

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <Counter/>
    </div>
  );
}

export default App;
