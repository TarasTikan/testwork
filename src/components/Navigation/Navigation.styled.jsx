import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 50px;
  padding: 27px 25px;
  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
  > nav {
    display: flex;
  }
`;
export const ListLink = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 17px;
  font-weight: 650;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #ebd8ff;
  }
  &.active {
    color: #ebd8ff;
  }
`;