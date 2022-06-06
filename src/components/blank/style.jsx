import styled from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;

  & > img {
    width: 400px;
    height: 400px;
    filter: drop-shadow( 0 5px 20px #768390);
  }
`;