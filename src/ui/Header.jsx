import React from "react";

const Header = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

Header.defaultProps = {
  hero: "defaultHero",
};

export default Header;
