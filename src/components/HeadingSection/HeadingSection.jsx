import React from 'react';
import * as S from './HeadingSection.styled';
import { BlackVector, WhiteVectorSvg, YellowVectorSvg } from '../svgs';

const HeadingSection = () => {
  return (
    <S.Wrapper>
      <S.LeftSection>
        <S.SectionTitle>
          Hi, we are Uxiom. A web design agency based in Budapest.
        </S.SectionTitle>
        <S.SectionDescription>
          We design and develop websites, web applications, and mobile apps that
          move business forward.
        </S.SectionDescription>
      </S.LeftSection>
      <S.RightSection>
        <S.YellowVectorWrapper>
          <YellowVectorSvg />
        </S.YellowVectorWrapper>
        <S.BlackVectorWrapper>
          <BlackVector />
        </S.BlackVectorWrapper>
      </S.RightSection>
    </S.Wrapper>
  );
};

export default HeadingSection;
