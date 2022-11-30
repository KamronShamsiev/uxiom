import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 91px;
  background-color: ${Colors.primary};
  padding: 32px 32px 0 32px;
  position: sticky;
  top: 0;
`;

export const Header = styled.div`
  width: 100%;
  height: 171px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background: linear-gradient(
    180deg,
    #f9f9f9 44.04%,
    rgba(249, 249, 249, 0) 93.12%
  );
`;
