import '../src/css/App.css';
/* component */
import Left_container from './component/left_container'
import Main_Container from './component/main_container';
import Modal from './component/Modal'
/* data */
import menu from './data/left_data'
import List_Data from './data/list_data'


import { useState } from 'react';
// import {Routes, Route} from 'react-router-dom'

function App() {
  let [openModal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  let handleChangeValue = (newIndex) =>{
    setIndex(newIndex)
  };

  return (
    <div className="App">
      <Left_container menu={menu} />
      <Main_Container openModal={openModal} setModal={setModal} List_Data={List_Data} handleChangeValue={handleChangeValue}/>
      {
        openModal == true ? <Modal openModal={openModal} setModal={setModal} List_Data={List_Data} index={index} ></Modal> : null
      }
    </div>
  );
}


export default App;
