import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: ${ props => props.$active ? '#2271D1' : 'white' };
    text-decoration: none;
    font-weight: 900;
    font-size: 20px;
    div {
        display: flex;
        width: 180px;
        height: 54px;
        border: ${ props => props.$active ? '2px solid #2271D1' : '2px solid white' };
        border-radius: 15px;
        box-shadow: ${ props => props.$active ? 'inset 0 0 30px rgba(34, 113, 209, 0.5)': '' };
        justify-content: center;
        align-items: center;
    }
`;

const HeaderLink = ({ url, children }) => {
    const [active, setActive] = useState(false);

    const currentUrl = useLocation().pathname;

    useEffect(() => setActive(url === currentUrl), [currentUrl]);

    return (
        <StyledLink to={url} $active={active}>
            <div>
                {children}
            </div>
        </StyledLink>
    )
}

export default HeaderLink;