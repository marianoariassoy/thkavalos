import { Link, NavLink } from "react-router-dom";
import { useDataContext } from "../context/lanContext";
import NavMenu from "./NavMenu";
import logo from "../assets/images/logo.svg";

const menu = [
  {
    id: 1,
    name: "PROYECTO",
    name_en: "PROJECT",
    url: "/proyecto",
  },
  {
    id: 2,
    name: "UNIDADES",
    name_en: "APARTMENTS",
    url: "/unidades",
  },
  {
    id: 3,
    name: "VILLA URQUIZA",
    name_en: "VILLA URQUIZA",
    url: "/villa-urquiza",
  },
  {
    id: 4,
    name: "CONTACTO",
    name_en: "CONTACT",
    url: "/contacto",
  },
];

const NavBar = () => {
  const { lan } = useDataContext();

  return (
    <div className="flex justify-between items-start px-10 lg:px-20 py-8">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo Avalos" className="logo" />
        </Link>
      </div>
      <nav>
        <ul className="lg:flex justify-between items-center lg:gap-16 font-bold lg:text-sm">
          {menu.map((item) => (
            <li key={item.id}>
              <NavLink to={item.url} className="nav-primary">
                {lan === "es" ? item.name : item.name_en}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NavMenu />
    </div>
  );
};

export default NavBar;
