import React from 'react';
import * as S from './Footer.styled';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.FooterItem>Home</S.FooterItem>
        <S.FooterItem>Work</S.FooterItem>
        <S.FooterItem>Services</S.FooterItem>
      </S.LeftSide>
      <S.RightSide>
        <S.Address>1077, Budapest, Király u. 25</S.Address>
        <S.ContactsWrapper>
          <S.Contact href="tel:+11445557777">+11 44 555 7777</S.Contact>
          <S.Contact>|</S.Contact>
          <S.Contact href="mailto:hello@uxiomda.com">
            hello@uxiomda.com
          </S.Contact>
        </S.ContactsWrapper>
      </S.RightSide>
    </S.Wrapper>
  );
};

export default Footer;
