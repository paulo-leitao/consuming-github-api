import styled from "styled-components";

export const Container = styled.div`
  progress {
    top: 0;
    left: 0;
    position: absolute;
  }

  progress[value] {
    width: ${(props) => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 3px;
    border-radius: 20px;
    background-color: transparent;
  }

  progress[value]::-webkit-progress-value {
    height: 3px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
  }
`;