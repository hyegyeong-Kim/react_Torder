import { Link } from "react-router-dom";
import '../css/left_container.css'

function left_container (props){
  return (
    <div className="left_container">
      <span>left_container</span>
      <ul>
        {
          props.menu.map((a,i)=>{
            return (
            <li key={i}>
              <Link to={a.url}>
              {a.title}
              </Link>
            
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default left_container