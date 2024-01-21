import styled from 'styled-components';
import { PiHamburgerDuotone } from 'react-icons/pi';
import { Link, useLocation } from 'react-router-dom';
import utils from '../assets/styles/Utils';

export default function Header() {
  const location = useLocation();
  return (
    <HeaderContainer>
      <div>
        <div>
          <Logo>
            <div>
              <PiHamburgerDuotone />
            </div>
            <h2>fastfood</h2>
          </Logo>
          <Nav>
            <StyledLink $isActive={location.pathname === '/orders'} to="/orders">
              Pedidos
            </StyledLink>
            <StyledLink $isActive={location.pathname === '/kitchen'} to="/kitchen">
              Cozinha
            </StyledLink>
            <StyledLink $isActive={location.pathname === '/pickup'} to="/pickup">
              Retirada
            </StyledLink>
          </Nav>
        </div>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: relative;
  z-index: 3;
  height: 48px;
  > div {
    position: fixed;
    width: 100%;
    top: 0;
  }
  > div > div {
    position: relative;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  background-color: darkgreen;
  h2 {
    color: white;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.02em;
  }
  div {
    margin: 0px 5px 0px 25px;
    ${utils.center}
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    svg {
      color: #004400;
    }
  }
`;

const Nav = styled.nav`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 30px;
  ${utils.center}
  gap: 12px;
`;

const StyledLink = styled(Link)<{ $isActive: boolean }>`
  ${utils.center}
  width: 70px;
  height: 22px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: white;
  border-radius: 5px;
  background-color: ${({ $isActive }) => ($isActive ? '#004400' : 'transparent')};
`;
