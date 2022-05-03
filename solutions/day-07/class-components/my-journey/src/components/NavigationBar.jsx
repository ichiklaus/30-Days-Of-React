import { NavLink, Outlet } from "react-router-dom";
import { welcomeSection, myInfo } from "../utils/MyInfo";
import Header from "..//layouts/Header";

let NavigationBar = () => {
  return (
    <div id="Content">
      <nav>
        <ul className="navbar">
          <NavLink className="navlink-li" to="/">
            Home
          </NavLink>
          <NavLink className="navlink-li" to="/about">
            About
          </NavLink>
          <NavLink className="navlink-li" to="/journey">
            Journal
          </NavLink>
          <NavLink className="navlink-li" to="/contact">
            Contact
          </NavLink>
          <NavLink className="navlink-li" to="/extra-content">
            Extra Content
          </NavLink>
          {/* <NavLink className="navlink-li" to="/invoices">
            Invoices
          </NavLink>
          <NavLink className="navlink-li" to="/expenses">
            Expenses
          </NavLink> */}
        </ul>
      </nav>
      <Header welcomeSection={welcomeSection} myInfo={myInfo} />
      <Outlet />
    </div>
  );
};

export default NavigationBar;
