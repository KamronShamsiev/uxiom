import React from 'react';
import * as S from './MainLayout.styled';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <S.ContentWrapper>
        <S.ContentContainer>{children}</S.ContentContainer>
      </S.ContentWrapper>
      <Footer />
    </S.Container>
  );
};

export default MainLayout;
