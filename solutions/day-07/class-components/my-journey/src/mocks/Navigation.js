import { NavLink, Outlet } from 'react-router-dom'

let NavigationBar = () => {
    return (
        <div id='navbar-wrapper'>
            <nav>
                <ul className='navbar'>
                    <NavLink className="navlink-li" to="/home">Home</NavLink>
                    <NavLink className="navlink-li" to="/about">About</NavLink>
                    <NavLink className="navlink-li" to="/contact">Contact</NavLink>
                    <NavLink className="navlink-li" to="/challenges">Challenges</NavLink>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavigationBar;