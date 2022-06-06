import styled from "styled-components";

export const Wrapper = styled.li `
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  width: 42%;
  max-height: 10vw;
  border: 1px solid #444c56;
  border-radius: 6px;
  margin-bottom: 16px;
  margin-right: 8px;
  margin-left: 8px;
  padding: 16px;
`;

export const WrapperName = styled.a `
  font-size: 14px;
  color: #539bf5;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const WrapperDescription = styled.span `
  margin-top: 8px;
  margin-bottom: 16px;
  color: #768390;
  font-size: 12px;
  flex: 1 0 auto;
`;

export const Footer = styled.div `
  display: flex;
  position: relative;
`;

/* Defining color by language type */

// const JavasCript = {
//   main: "yellow"
// }

export const Language = styled.span `
  font-size: 12px;
  /* background-color: ${props => props.theme.main}; */
  font-weight: 300;
  color: #768390;
  margin-right: 8px;
`;

export const Star = styled.a `
  font-size: 12px;
  font-weight: 300;
  text-decoration: none;
  color: #768390;

  & > svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    fill: #768390;
    overflow: visible;
    vertical-align: text-bottom;
  }

  &:hover , &:hover > svg {
    color: #539bf5;
    fill: #539bf5;
  }
`;