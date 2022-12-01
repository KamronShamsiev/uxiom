import React, { useEffect, useState } from 'react';
import * as S from './Header.styled';
import {
  ISvg,
  MSvg,
  USvg,
  WhiteVectorSvg,
  XSvg,
  YellowVectorSvg,
} from '../svgs';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.LogoWrapper>
          <S.SvgWrapper isVisible={isVisible} height={height}>
            <USvg />
          </S.SvgWrapper>
          <S.SvgWrapper isVisible={isVisible} height={height}>
            <XSvg />
          </S.SvgWrapper>
          <S.SvgWrapper isVisible={isVisible} height={height}>
            <ISvg />
          </S.SvgWrapper>
          <S.VectorsWrapper isVisible={isVisible} height={height}>
            <YellowVectorSvg />
            <S.WhiteVectorWrapper isVisible={isVisible}>
              <WhiteVectorSvg />
            </S.WhiteVectorWrapper>
          </S.VectorsWrapper>
          <S.SvgWrapper isVisible={isVisible} height={height}>
            <MSvg />
          </S.SvgWrapper>
        </S.LogoWrapper>
        <S.Navbar>
          <S.NavUl>
            <S.NavList>
              <S.NavItem>Projects</S.NavItem>
            </S.NavList>
            <S.NavList>
              <S.NavItem>Services</S.NavItem>
            </S.NavList>
            <S.NavList>
              <S.NavItem>About</S.NavItem>
            </S.NavList>
            <S.NavList>
              <S.ActiveNavItem>Lets Talk</S.ActiveNavItem>
            </S.NavList>
          </S.NavUl>
        </S.Navbar>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
