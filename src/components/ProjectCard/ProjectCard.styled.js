import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 540px;
  height: 570px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 400px;
  border-top-left-radius: 28px;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardTitle = styled.h2`
  font-size: 34px;
  color: ${Colors.primary};
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
`;

export const CardDate = styled.p`
  font-size: 16px;
  color: ${Colors.primary};
`;

export const CardCategory = styled.p`
  font-size: 16px;
  color: ${Colors.primary};
`;

export const CardDescription = styled.p`
  width: 392px;
  height: 60px;
  font-size: 16px;
  color: ${Colors.primary};
`;
