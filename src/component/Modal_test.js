import styles from '../css/Modal.module.css'

function Modal ({openModal, setModal, img, title, cont}){
  return (
    <div className={styles.Modal}>
      <div></div> {/*배경*/}

      {/* 아이템 */}
      <dl>
        <dt>
          <img src={img} alt={title}/>
        </dt>
        <dd>
          <h4>{title}</h4>
          <p>
            {cont}
          </p> 
          <span>
            가격은 원화로 표기됩니다. <br/> 10% 부가세와 10% 봉사료가 
            포함되어 있습니다.
          </span>
          <button>장바구니 담기</button>
        </dd>
      </dl>
      {/* 아이템 */}
     
      <ul onClick={()=>{setModal(!openModal)}}>
        <li>닫기</li>
        <li><button>x</button></li>
      </ul>
    </div>
  )

}

Modal.defaultProps = {
  img   : '',
  title : '',
  cont  : ''   
}

export default Modal