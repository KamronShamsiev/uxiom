import React, { useState } from 'react';
import * as S from './ServicesSection.styled';

const ServicesArray = [
  {
    name: 'Research',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elementum vitae quam sed curabitur proin sit. Nunc viverra at porttitor feugiat sed urna. Felis pellentesque et lectus pellentesque.',
  },
  {
    name: 'Design',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elementum vitae quam sed curabitur proin sit. Nunc viverra at porttitor feugiat sed urna. Felis pellentesque et lectus pellentesque.',
  },
  {
    name: 'Development',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elementum vitae quam sed curabitur proin sit. Nunc viverra at porttitor feugiat sed urna. Felis pellentesque et lectus pellentesque.',
  },
  {
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elementum vitae quam sed curabitur proin sit. Nunc viverra at porttitor feugiat sed urna. Felis pellentesque et lectus pellentesque.',
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('Research');
  const [serviceIndex, setServiceIndex] = useState(0);

  const handleServiceChange = (name, index) => {
    setActiveService(name);
    setServiceIndex(index);
  };

  return (
    <S.Wrapper>
      <S.Title>Our Services</S.Title>
      <S.ServicesWrapper>
        <S.ButtonsWrapper>
          {ServicesArray.map((service, index) => (
            <S.ServicesButton
              isActive={service.name === activeService}
              onClick={() => handleServiceChange(service.name, index)}
            >
              {service.name}
            </S.ServicesButton>
          ))}
        </S.ButtonsWrapper>
        <S.DescriptionWrapper>
          <S.Description>
            {ServicesArray[serviceIndex].description}
          </S.Description>
        </S.DescriptionWrapper>
      </S.ServicesWrapper>
    </S.Wrapper>
  );
};

export default ServicesSection;
