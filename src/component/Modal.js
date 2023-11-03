import styles from '../css/Modal.module.css'

function Modal ({openModal, setModal, List_Data, index, setCart}){
  return (
    <div className={styles.Modal}>
      <div></div>
            return (
            <dl>
              <dt>
                <img src={List_Data[index].img} alt={List_Data[index].title}/>
              </dt>
              <dd>
                <h4>{List_Data[index].title}</h4>
                <p>
                  {List_Data[index].cont}
                </p>
                <span>
                  가격은 원화로 표기됩니다. <br/> 10% 부가세와 10% 봉사료가 
                  포함되어 있습니다.
                </span>
                <button onClick={()=>{
                  setCart(true);
                  setModal(!openModal)
                }}>장바구니 담기</button>
              </dd>
            </dl>
            )

      <ul onClick={()=>{setModal(!openModal)}}>
        <li>닫기</li>
        <li><button>x</button></li>
      </ul>
    </div>
  )

}

export default Modal