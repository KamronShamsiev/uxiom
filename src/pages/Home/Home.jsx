import React from 'react';
import MainLayout from '../../layout/MainLayout';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';

const Home = () => {
  return (
    <MainLayout>
      <ProjectsSection />
      <ServicesSection />
    </MainLayout>
  );
};

export default Home;
