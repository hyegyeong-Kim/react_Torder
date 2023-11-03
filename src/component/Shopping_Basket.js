function Shopping_Basket ({EA, setEA, limit, List_Data, openCart, setCart}){
  return (
    <div className="Shopping_Basket">
      <ul>
            <li>
            <dl>
              <dt>{List_Data[0].title}</dt>
              <dd><button>삭제</button></dd>
            </dl>
            <span>{List_Data[0].price}</span>
            <div>
            <button onClick={()=>{
                setEA(EA-1);
                limit();
              }}>-</button>
              <span>{EA}</span>
              <button onClick={()=>{
                setEA(EA+1)
              }}>+</button>
            </div>
          </li>
      </ul>
      <div>
        <span>합계</span>
        <span>{List_Data[0].price * EA}</span>
      </div>
      <dl>
        <dt><button onClick={()=>setCart(!openCart)}>닫기</button></dt>
        <dd><button onClick={()=>{
          setCart(false);
        }}>주문하기</button></dd>
      </dl>
    </div>
  )
}

export default Shopping_Basket