import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/contact/contact" activeClassName="active">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header