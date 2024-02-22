import styled from "styled-components";
import Logo from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../styled/BackButton";

const HeaderContainer = styled.header`
  height: 56px;
  position: relative;
  width: 100%;
  max-width: 1048px;
  margin: 0 auto;

  img {
    height: 32px;
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 992px) {
    height: 32px;
    img {
      height: 16px;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate(-1)} />
      <Link to={"/"}>
        <img src={Logo} alt="Tegeta Leasing" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
