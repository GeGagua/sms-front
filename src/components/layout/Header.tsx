import styled from "styled-components";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  height: 56px;

  img {
    height: 32px;
    margin: 0 auto;
    display: block;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img src={Logo} alt="Tegeta Leasing" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
