import React from "react";
import { StyledHeader,StyledMeLogo } from "../styles/StyledHeader";
import MtLogo from '../images/logo_transparent.png'
const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <StyledMeLogo src={MtLogo} alt="mtApi-logo"/>
      </div>
    </StyledHeader>
  );
};

export default Header;
