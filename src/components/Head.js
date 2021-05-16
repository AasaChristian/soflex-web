import {HeadCont} from './StyledComponent'
import {NavLink} from "react-router-dom"
import {blackOrWhite} from './StyledComponent'


function Head() {

  let userID = localStorage.getItem('id')
  

  return (
    <HeadCont>
        <NavLink to = {"/board"}>
          <div>
            <h2 style={{ color: `${blackOrWhite[1]}`}}>
            Home
            </h2>
          </div>
            </NavLink>
          <NavLink to = {"/"}>
          <h1 style={{fontSize: '250%', marginBottom: '0%', color: `${blackOrWhite[1]}`}}>SoFlex</h1>
          </NavLink>  
        

        <NavLink  to = {"/Login"} onClick={e => {
          localStorage.removeItem('key')
          localStorage.removeItem('username')
          localStorage.removeItem('token')
        }}>


          <div>
          <h2 style={{ color: `${blackOrWhite[1]}`}}>

          {userID === null ? "Login" : "Logout"}

          </h2>
          </div>
          
          </NavLink>
    </HeadCont>
  );
}

export default Head;
