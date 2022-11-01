import React from "react"
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <ul className="ul">
            <li>
                <Link to="/">HomePage</Link>
                </li>
                <li> <Link to="/favorites">Favorites</Link></li>
                <li><Link className='navtxt' to='/About'><div >About</div></Link><br />

            </li>
        </ul>
    )
}
export default Navbar
