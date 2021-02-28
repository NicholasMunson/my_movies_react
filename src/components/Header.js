import Logo from '../images/myMoviesClipBoard.png'
import "./Header.css"
import { useState } from 'react'
import { Link } from "react-router-dom";

const url = "http://localhost:3000/"

const Header = (props) => {
  const [burgerStatus, setBergerStatus] = useState(false)

  const burgerStatusHandler = () => {
    let status = burgerStatus
    setBergerStatus(!status)
  }


  const navReturn = 
  <header className="has-background-light	">
    <nav className="is-flex is-justify-content-space-between navbar" role="navigation" aria-label="main navigation">
      <ul className="is-felx navbar-brand">
        <li>
          <a role="button" href={url}>
            <img className="navbar-item " src={Logo} alt="my movies logo" width="100"></img>
          </a>
        </li>
      </ul>
      <ul id="navbar-items" className={`navbar-menu ${burgerStatus === true ? "is-active" : ""} `}>
        <div className="navbar-end">
          <div className="navbar-item">
            <li>
              <a  role="button" href={url+"search"}><Link to='/'>Home</Link></a>
            </li>
          </div>
          <div  className="navbar-item">
            <li>
              <a role="button" href={url+"about"}><Link to='/about'>About</Link></a>
            </li>
          </div>
          <div className="navbar-item">
            <li>
              <a  role="button" href={url+"collection"}><Link to='/collection'>Collection</Link></a>
            </li>
          </div>
        </div>
      </ul>
      <div className="navbar-brand">
        <div className="navbar-end">
          <a onClick={burgerStatusHandler} role="button" className={`navbar-burger ${burgerStatus === true ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </nav>
  </header>

  return navReturn
}

export default Header