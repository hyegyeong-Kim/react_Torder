import styles from '../css/menu_list.module.css'


function Menu_List({setModal, List_Data, handleChangeValue}){

  return (
    <div className={styles.menu_List}>
        <ul>
          {
            List_Data.map((a,i)=>{
              return (
              <li key={i} onClick={()=>{
                setModal(true); 
                handleChangeValue(i);
                }}>
                <dl>
                  <dt> <img src={a.img} alt={a.title}/></dt>
                  <dd>{a.title}</dd>
                  <dd>{a.price}</dd>
                </dl>
              </li>
              )
            })
          }
        </ul>
      </div>
  )
}
export default Menu_List