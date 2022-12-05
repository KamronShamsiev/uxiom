import React from 'react';
import * as S from './ProjectsSection.styled';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectsSection = () => {
  return (
    <S.Wrapper>
      <S.Title>Projects</S.Title>
      <S.CardWrapper>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </S.CardWrapper>
    </S.Wrapper>
  );
};

export default ProjectsSection;
