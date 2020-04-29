import styled from "styled-components";

export const StyledHeader = styled.div`
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    background: linear-gradient(
        to bottom,
        #d5dee7 0%,
        #e8ebf2 50%,
        #e2e7ed 100%
      ),
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.02) 50%,
        rgba(255, 255, 255, 0.02) 61%,
        rgba(0, 0, 0, 0.02) 73%
      ),
      linear-gradient(
        33deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      );
    background-blend-mode: normal, color-burn;
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
  top: -50px;
  left: 0;

  @media screen and(max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 5px;
  }
`;
