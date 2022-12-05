import React from 'react';
import * as S from './ProjectCard.styled';

const ProjectCard = () => {
  return (
    <S.CardWrapper>
      <S.CardImage src="assets/images/projectImg.png" />
      <S.CardTitleWrapper>
        <S.CardTitle>Project Name</S.CardTitle>
        <S.CardInfoWrapper>
          <S.CardDate>11/22</S.CardDate>
          <S.CardCategory>Education</S.CardCategory>
        </S.CardInfoWrapper>
      </S.CardTitleWrapper>
      <S.CardDescription>
        Lorem ipsum dolor sit amet consectetur. Orci magna mauris aenean egestas
        sed turpis nisl ut.
      </S.CardDescription>
    </S.CardWrapper>
  );
};

export default ProjectCard;
