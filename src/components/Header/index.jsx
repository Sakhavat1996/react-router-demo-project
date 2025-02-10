import classes from "./header.module.css";
import { Link, NavLink } from "react-router";
export default function Header() {
  return (
    <header className={classes.header}>
      <div>
        <NavLink
          className={({isActive}) => (isActive ? "active" : null)}
          to="/home"
        >
          HOME
        </NavLink>

        <NavLink
          className={({isActive}) => (isActive ? "active" : null)}
          to="/about"
        >
          ABOUT
        </NavLink>

        <NavLink
          className={({isActive}) => (isActive ? "active" : null)}
          to="/fag"
        >
          FAG
        </NavLink>

        <NavLink
          className={({isActive}) => (isActive ? "active" : null)}
          to="/products"
        >
          PRODUCTS
        </NavLink>

        <NavLink
          className={({isActive}) => (isActive ? "active" : null)}
          to="/users"
        >
          USERS
        </NavLink>
      </div>
    </header>
  );
}
