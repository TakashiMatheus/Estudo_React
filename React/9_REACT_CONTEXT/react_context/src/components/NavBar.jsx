import { NavLink } from "react-router-dom";
import "./NavBar.css"
const NavBar = () => {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/curiosities">Curiosities</NavLink>
        </nav>
    )
}

export default NavBar;