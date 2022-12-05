import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 107px;
`;

export const Title = styled.h1`
  font-size: 64px;
  color: ${Colors.primary};
  text-align: center;
  margin-bottom: 50px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
`;
