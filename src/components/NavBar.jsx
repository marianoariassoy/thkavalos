import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <div className="flex justify-between items-start px-10 lg:px-20 py-8">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo Avalos" className="logo" />
        </Link>
      </div>
      <nav>
        <ul className="lg:flex justify-between items-center lg:gap-16 font-bold lg:text-sm">
          <li>
            <NavLink to="/proyecto" className="nav-primary">
              PROYECTO
            </NavLink>
          </li>
          <li>
            <NavLink to="/unidades" className="nav-primary">
              UNIDADES
            </NavLink>
          </li>
          <li>
            <NavLink to="/villa-urquiza" className="nav-primary">
              VILLA URQUIZA
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="nav-primary">
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavMenu />
    </div>
  );
};

export default NavBar;
