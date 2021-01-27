import Logo from '../images/myMovies.jpg'
import "./Header.css"

const Header = (props) => {

  const nav = 
  <nav className="navbar is-flex">
    <a href="http://localhost:3000/my-movies">
      <p>My Movies</p>
    </a>
    <a href="http://localhost:3000/search">
      <img src={Logo} alt="logo" width="100" />
    </a>
  </nav>

  return nav
}

export default Header