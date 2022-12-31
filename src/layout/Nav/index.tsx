import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNav } from "./Nav.styles";

type NavProps = {
  name: string;
  link: string;
  style?: React.CSSProperties;
};

const Nav = ({ link, name, style }: NavProps) => {
  let activeClassName = "active";
  return (
    <StyledNav style={style}>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? `nav-link nav-link__${activeClassName}` : "nav-link"
        }
      >
        {name}
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
