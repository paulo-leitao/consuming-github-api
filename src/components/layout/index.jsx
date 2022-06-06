import React from 'react'
import Header from '../header'
import * as S from './style'

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <S.InnerContainer>
        {children}
      </S.InnerContainer>
    </S.Container>
  );
};

export default Layout;