import styled from "styled-components"
import Logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom"
import { Container } from "../styled/Global"

const HeaderContainer = styled.header`
    padding: 24px 0;
    height: 64px;
    background: #34383E;

    img {
        height: 56px;
        margin-top: 4px;
    }
`

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <Link to={'/'}>
                    <img src={Logo} alt="Tegeta Leasing" />
                </Link>
            </Container>
        </HeaderContainer>
    )
}

export default Header