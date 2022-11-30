import styled from 'styled-components';
import Colors from '../constants/Colors';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 32px;
  background-color: ${Colors.primary};
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 92px);
  padding-top: 80px;
  background-color: ${Colors.background};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  color: black;
`;
