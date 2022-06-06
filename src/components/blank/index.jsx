import React from 'react'
import * as S from './style'
import Mascot from '../assets/github.gif'

const Blank = () => {
  return (
    <S.Wrapper>
      <img src={Mascot} alt='Github mascot'/>
    </S.Wrapper>
  )
}

export default Blank