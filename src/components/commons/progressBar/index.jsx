import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import * as S from './styles';

const ProgressBar = ({ start, max, color,width }) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(oldValue => {
        const newValue = oldValue*2;
        if(newValue === 100){
          clearInterval(interval);
        }
        return newValue;
      });
    }, 100);
  }, []);

  return (
      <S.Container color={color} width={width}>
        <progress value={value} max={max} />
      </S.Container>
  );
};

ProgressBar.propTypes = {
  start: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string  
}

ProgressBar.defaultProps = {
  start: 2,
  max: 100,
  color: "lightBlue",
  width: "250px"
}

export default ProgressBar