import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const Wrapper = styled(Tabs)`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;

export const TabWrapper = styled(TabList)`
  height: 40px;
  margin-top: 24px;
  margin-left: 2rem;
  margin-right: 2rem;
  /* background-color: green; */
  display: flex;
  align-items: flex-end;
  user-select: none;
`;

export const CustomTab = styled(Tab)`
  width: fit-content;
  height: 30px;
  border: 0;
  margin: 0 3px;
  padding: 0 10px;
  position: relative;
  align-items: center;
  color: #adbac7;
  text-align: center;
  line-height: 30px;
  cursor: pointer;

  &::marker {
    content: none;
  }

  &:hover {
    border-radius: 6px;
    background-color: rgba(144, 157, 171, 0.12);
  }

  &.active {
    font-weight: 400;
  }
  &.active::after {
    content: "";
    height: 2px;
    width: 100%;
    right: 0;
    bottom: calc(50% - 25px);
    position: absolute;
    border-radius: 6px;
    background-color: #f47067;

  }

  & > span {
    background-color: #444C56;
    margin-left: 8px;
    padding: 0 6px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 2rem;
  }

  & > svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    fill: #768390;
    overflow: visible;
    vertical-align: text-bottom;
  }
`;

export const ContentWrapper = styled(TabPanel) `
  display:none;
  /* background-color: black; */
  height: 80vh;
  margin-bottom: 2rem;

  &.active {
    display: flex;
  }
`;

export const RepoList = styled.ol `
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
`;
