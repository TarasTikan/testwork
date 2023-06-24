import {  Outlet} from "react-router-dom";
import { Container, Header, ListLink, StyledLink } from "./Navigation.styled";
import Logo from '../../images/Logo.png';
export const Navigation = ()=> {
    return (
      <Container>
        <Header>
          <img src={Logo} alt="LogoCompany" height={80} width={80} />
          <nav>
            <ListLink>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/tweets">Tweets</StyledLink>
              </li>
            </ListLink>
          </nav>
        </Header>
        <Outlet />
      </Container>
    );
}