import styled from "styled-components";

const StyledFooter = styled.footer`
    height: 125px;
    background-color: black;
    border-top: 4px solid #2271D1;
    box-shadow: 0 -7px 30px rgba(34, 113, 209, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    img {
        max-width: 169px;
    }
`;
const Footer = () => {
    return(
        <StyledFooter>
            <img src="/images/aluraflixLogo.svg" />
        </StyledFooter>
    )
}

export default Footer;