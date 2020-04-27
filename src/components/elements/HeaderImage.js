import React, { useContext } from "react";
import { StyledHeaderImage } from "../styles/StyledHeaderImage";

const HeaderImage = ({ title, text, image }) => {
  return (
    <StyledHeaderImage image={image}>
      <div className="headerImage-content">
        <div className="headerImage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeaderImage>
  );
};

export default HeaderImage;
