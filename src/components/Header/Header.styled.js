import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 91px;
  background-color: ${Colors.primary};
  padding: 32px 32px 0 32px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 171px;
  padding: 44px 34px 0 34px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background: linear-gradient(
    180deg,
    #f9f9f9 44.04%,
    rgba(249, 249, 249, 0) 93.12%
  );
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 120px;
`;

export const VectorsWrapper = styled.div`
  position: relative;
  min-width: ${({ isVisible }) => (isVisible ? '23px' : '45px')};
  top: -51px;
  left: ${({ isVisible }) => (isVisible ? '0' : '-50px')};
  margin: 0 4px;
  transition: all 1s ease;
`;

export const SvgWrapper = styled.div`
  height: 23px;
  margin: 0 2px;
  opacity: ${({ height }) => 1.0 - height * 0.01}};
`;

export const WhiteVectorWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  width: ${({ isVisible }) => (isVisible ? '7px' : '14px')};
  height: ${({ isVisible }) => (isVisible ? '7px' : '14px')};
  top: 70px;
  transition: all 1s ease;
`;

export const Navbar = styled.nav`
  display: flex;
`;

export const NavUl = styled.ul`
  display: flex;
`;

export const NavList = styled.li`
  list-style: none;
  margin: 0 15px;
`;

export const NavItem = styled.a`
  font-size: 18px;
  color: ${Colors.primary};
  text-decoration: none;
  cursor: pointer;
`;

export const ActiveNavItem = styled.a`
  font-size: 18px;
  color: ${Colors.background};
  text-decoration: none;
  background-color: ${Colors.primary};
  padding: 13px 20px;
  border-radius: 24px;
  cursor: pointer;
`;
