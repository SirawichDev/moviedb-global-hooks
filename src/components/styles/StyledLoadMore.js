import styled from "styled-components";

export const StyledLoadMore = styled.button`
  background: blue;
  width: 25%;
  min-width: 200px;
  height: 70px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 1px;
  font-family: "Abel", sans-serif;
  font-size: 28px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;

  :hover {
    background-color: black;
    opacity: 0.8;
  }
`;
