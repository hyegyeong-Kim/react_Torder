
import '../css/main.css';
import Menu_List from '../component/menu_List'
// import TosPop from './tostPop';
import { useState, useEffect } from 'react';


function Main_Container ({openModal, setModal , List_Data, handleChangeValue,}){
  let [PopUp, setPopUp] = useState(false);
  const handleToast = () => {
    setPopUp(true);
  };
  useEffect(() => {
    if (PopUp) {
      setTimeout(() => setPopUp(false), 1500);
    }
  }, [PopUp]);

  return(
    <div className="main_Container">
      <ul>
        <li>안주플래터</li>
        <li>안주</li>
      </ul>
      <Menu_List openModal={openModal} setModal={setModal} List_Data={List_Data} handleChangeValue={handleChangeValue}/>
      <div className='Menu_Bottom'>
        <ul>
          <li>한국어</li>
          <li>영어</li>
          <li>중국어</li>
          <li>중국어2</li>
          <li>일본어</li>
        </ul>
        <div>
          <button onClick={handleToast}>주문내역</button>
          <button onClick={handleToast}>장바구니</button>
        </div>
      </div>
      {
        PopUp == true ? <TostPop PopUp={PopUp} setPopUp={setPopUp}></TostPop> : null
      }
     
    </div>
  )
}

function TostPop (props){
  
  
  return (
    <div className="TostPop">
      <span>장바구니가 비었습니다.</span>
      <button onClick={()=>{props.setPopUp(!props.PopUp)}} >X</button>
    </div>
  )
}




export default Main_Container