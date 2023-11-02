import styles from '../css/TostPop.module.css'

function TostPop (){
  return (
    <div className={styles.TostPop}>
      <span>장바구니가 비었습니다.</span>
      <button>X</button>
    </div>
  )
}

// export default TostPop