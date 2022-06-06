import React, { useState, useRef } from 'react'
import useGithub from '../../hooks/github-hooks'
import * as S from './style'

function Header() {

  const { getUser } = useGithub();
  const [ userInput, setUserInput ] = useState();
  const inputRef = useRef(null);

  const submitUsername = () => {
    if ( !userInput ) return;

    getUser(userInput);
    inputRef.current.value = '';
  };

  return (
    <S.SearchWrapper>
        <S.InputWrapper ref={inputRef} type="text" placeholder='Search for user' onChange={(event) => setUserInput(event.target.value)}/>
        <S.SearchButton type='submit' onClick={submitUsername}>Search</S.SearchButton>
    </S.SearchWrapper>
  )
};

export default Header;