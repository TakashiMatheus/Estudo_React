import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"


// 2 - links com react router doms
const Navbar = () => {
    return(
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link> */}
            <NavLink to="/" 
            //className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}
            >Home</NavLink>
            <NavLink to="/about" //</nav>className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}
            >About</NavLink>
        </nav>
    )
}

export default Navbar