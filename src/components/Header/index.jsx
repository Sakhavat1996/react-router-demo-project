import { NavLink } from "react-router";
// import { useTabs } from "./TabsContext";
import classes from "./header.module.css";

export default function Header({ onAddTab }) {
  const links = [
    { to: "/home", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/fag", label: "FAG" },
    { to: "/products", label: "PRODUCTS" },
    { to: "/users", label: "USERS" },
  ];

  const handleClick = (to, label) => {
    onAddTab(to, label);
  };

  return (
    <header className={classes.header}>
      <div>
        {links.map((link) => (
          <NavLink
            key={link.to}
            className="header-link"
            to={link?.to}
            onClick={() => handleClick(link.to, link.label)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
