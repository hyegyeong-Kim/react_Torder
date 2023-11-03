import '../src/css/App.css';
/* component */
import Left_container from './component/left_container'
import Main_Container from './component/main_container';
import Modal from './component/Modal'
import Shopping_Basket from './component/Shopping_Basket'
/* data */
import menu from './data/left_data'
import List_Data from './data/list_data'

/* 내장API */
import { useState } from 'react';
// import {Routes, Route} from 'react-router-dom'

function App() {
  let [openModal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  let handleChangeValue = newIndex =>setIndex(newIndex);
  let [EA, setEA] = useState(1)
  let limit = () =>{
    if(EA <= 1){
      setEA(1)
    }
  };
  let [openCart, setCart] = useState(false);

  return (
    <div className="App">
      <Left_container menu={menu} />
      <Main_Container openModal={openModal} 
      setModal={setModal} List_Data={List_Data}
      handleChangeValue={handleChangeValue}/>
      {
        openModal == true ? <Modal 
        openModal={openModal} setModal={setModal} 
        List_Data={List_Data} index={index} 
        setCart ={setCart}></Modal> : null
      }
      {
        openCart == true ?  <Shopping_Basket 
        EA={EA} setEA={setEA} limit={limit} List_Data={List_Data} 
        setCart={setCart} openCart={openCart}
        /> : null
      }
    </div>
  );
}


export default App;
