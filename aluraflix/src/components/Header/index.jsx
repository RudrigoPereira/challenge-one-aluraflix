import styled from "styled-components";
// import HeaderLink from "./HeaderLink";

const StyledHeader = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: ${props => props.$black ? '#141414' : 'transparent'};
    border-bottom: 4px solid ${props => props.$black ? '#2271D1' : 'transparent'};
    box-shadow: 0 7px 30px ${props => props.$black ? 'rgba(34, 113, 209, 0.5)' : 'transparent'};
    transition: all ease 0.5s;

    img{
        height: 30px;
    }

    /* height: 125px;
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
    } */
`;

const Header = ({ black }) => {
    return(
        <StyledHeader $black={black}>
            <img src="/images/aluraflixLogo.svg" alt="Logo AluraFlix"/>
            {/* <nav>
                <HeaderLink url="/">
                    HOME
                </HeaderLink>
                <HeaderLink url="/novo-video">
                    NOVO VÍDEO
                </HeaderLink>
            </nav> */}
        </StyledHeader>
    )
}

export default Header;