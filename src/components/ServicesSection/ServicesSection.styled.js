import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 160px;
`;

export const Title = styled.h1`
  font-size: 64px;
  color: ${Colors.primary};
  margin-bottom: 72px;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  gap: 16px;
`;

export const ServicesButton = styled.button`
  width: 248px;
  border: ${({ isActive }) =>
    isActive ? 'none' : `1px solid ${Colors.primary}`};
  border-radius: 24px;
  background-color: ${({ isActive }) => (isActive ? '#FFE66B' : 'transparent')};
  padding: 17px 40px;
  font-size: 20px;
  color: #444444;
  text-align: left;
  cursor: pointer;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const Description = styled.p`
  width: 333px;
  font-size: 16px;
  line-height: 136%;
  font-weight: 300;
  color: ${Colors.primary};
`;
