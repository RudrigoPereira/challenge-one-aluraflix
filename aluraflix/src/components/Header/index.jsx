import styled from "styled-components";
import HeaderLink from "../HeaderLink";

const HeaderStyled = styled.header`
    height: 125px;
    background-color: black;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0 7px 30px rgba(34, 113, 209, 0.5);
    display: flex;
    align-items: center;
    padding: 0 50px;
    justify-content: space-between;
    img {
        max-width: 169px;
    }
    nav {
        display: flex;
        gap: 25px;
    }
`;

const Header = () => {
    return(
        <HeaderStyled>
            <img src="/images/aluraflixLogo.svg" />
            <nav>
                <HeaderLink url="/">
                    HOME
                </HeaderLink>
                <HeaderLink url="/novo-video">
                    NOVO VÍDEO
                </HeaderLink>
            </nav>
        </HeaderStyled>
    )
}

export default Header;