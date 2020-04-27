import styled from "styled-components";

export const StyledHeader = styled.div`
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      min-height: 0px;
    }
  }
`;

export const StyledMeLogo = styled.img`
  width: 200px;
  position:absolute;
  top: -50px;
  left:0;

  @media screen and(max-width: 500px){
    display: inline-block;
    width: 80px;
    margin-top: 5px;
  }
`;
