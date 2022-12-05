import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 296px;
  background-color: ${Colors.primary};
  padding: 79px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const FooterItem = styled.a`
  font-size: 16px;
  color: ${Colors.white};
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
`;

export const Address = styled.address`
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${Colors.white};
  font-style: normal;
  margin-bottom: 15px;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Contact = styled.a`
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${Colors.white};
  text-decoration: none;
`;
