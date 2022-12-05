import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Wrapper = styled.section`
  width: 100%;
  height: 490px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 166px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SectionTitle = styled.h1`
  width: 680px;
  font-size: 66px;
  font-weight: 400;
  color: ${Colors.primary};
`;

export const SectionDescription = styled.p`
  width: 410px;
  font-size: 24px;
  font-weight: 400;
  color: ${Colors.primary};
`;

export const RightSection = styled.div`
  position: relative;
  height: 100%;
`;

export const YellowVectorWrapper = styled.div`
  width: 330px;
  height: 330px;
`;

export const BlackVectorWrapper = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: -30px;
`;
