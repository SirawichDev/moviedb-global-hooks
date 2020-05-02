import styled from "styled-components";

export const StyledHeader = styled.div`
  box-sizing: border-box;
  .header-content {
    max-width: 1280px;
    min-height: 100px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      min-height: 0px;
    }
  }
`;

export const StyledMeLogo = styled.img`
  width: 200px;
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  -webkit-backface-visibility: hidden; 
  @media screen and(max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 5px;
  }
`;
