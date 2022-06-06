import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 100%;
  height: 62px;
  background-color: #2D333B;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
`;

export const InputWrapper = styled.input`
  width: 40vw;
  height: 30px;
  border-radius: 6px;
  background-color: #22272E;
  color: white;
  border: 1px solid rgba(240, 246, 252, 0.15);
  margin: 10px 3px;
  padding: 0 10px;

  &:focus {
    background-color: #2D333B;
    border: 1px solid rgba(240, 246, 252, 0.1);
    caret-color: white;
    color: #c9d1d9;
  }
  &:focus-visible {
    outline: none;
    border-color: #58a6ff;
    box-shadow: inset 0 0 0 1px #58a6ff;
  }
`;

export const SearchButton = styled.button`
  margin: 10px 3px;
  height: 30px;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #21262d;
  border: 1px solid rgba(240, 246, 252, 0.1);
  cursor: pointer;
  user-select: none;
  color: #c9d1d9;


  &:hover {
    background-color: #30363D;
  }
`;
