import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: fit-content;
  width: 20vw;
  /* background-color: blue; */
  flex-direction: column;
  margin-top: 24px;
  user-select: none;
`;

export const WrapperUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 10px;
  height: 100%;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Counter = styled.a`
  font-size: 14px;
  color: #768390;
  margin: 0 3px;
  text-decoration: none;

  
  & > span {
    font-weight: 600;
    margin-right: 3px;
    color: #C9D1D9;
  }
    
  &:hover, &:hover > span, &:hover > svg {
    color: #539bf5;
    fill: #539bf5;
  }

  & > svg {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    fill: #768390;
    overflow: visible;
    vertical-align: text-bottom;
  }

  &:first-child {
      margin-left: 0;
  }

`;

export const WrapperImg = styled.img`
  border-radius: 50%;
  border: 2px solid rgba(144, 157, 171, 0.5);
  width: 250px;
  margin: 10px;
`;

export const WrapperName = styled.span`
  font-size: 24px;
  line-height: 1.25;
`;

export const WrapperUsername = styled.a`
  font-size: 20px;
  font-style: normal;
  color: #768390;
  font-weight: 300;
  line-height: 24px;
  text-decoration: none;

  &:hover {
      color: #539bf5;
  }
`;
