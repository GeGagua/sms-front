import styled from "styled-components";
import Logo from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../styled/BackButton";
import { FC } from "react";

const HeaderContainer = styled.header`
  height: 56px;
  position: relative;
  width: 100%;
  min-height: 56px;
  max-width: 1048px;
  margin: 0 auto;

  img {
    height: 32px;
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 992px) {
    height: 32px;
    min-height: 32px;
    img {
      height: 16px;
    }
  }
`;

interface IProps {
  hideBack?: boolean
  back?: boolean
}

const Header: FC<IProps> = ({ hideBack, back }) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      {!hideBack && <BackButton onClick={() => back ? navigate('/mobile') : navigate(-1)} />}
      <Link to={"/"}>
        <img src={Logo} alt="Tegeta Leasing" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
