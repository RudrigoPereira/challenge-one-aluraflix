import styled from "styled-components";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MovieRowList from "./MovieRowList";
import MovieRowButton from "./MovieRowButton";
import { useState } from "react";

const StyledDiv = styled.div`
    margin-bottom: 30px;

    h2 {
        margin: 0 0 0 30px;
    }
    .movieRow--left{
        left: 0;
    }
    .movieRow--rigth{
        right: 0;
    }

    &:hover .movieRow--left,
    &:hover .movieRow--rigth {
        opacity: 1;
    }

    @media (max-width:760px) {
        .movieRow--left,
        .movieRow--rigth {
            opacity: 1;
        }
    }
`;

const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRigthArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;
        if((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(x);
    }

    return(
        <StyledDiv>
            <h2>{title}</h2>

            <MovieRowButton 
                icon={<NavigateBeforeIcon style={{fontSize: 50}}/>}
                classname={'movieRow--left'}
                onClick={handleLeftArrow}
            />
            <MovieRowButton 
                icon={<NavigateNextIcon style={{fontSize: 50}}/>}
                classname={'movieRow--rigth'}
                onClick={handleRigthArrow}
            />

            <MovieRowList items={items} scrollX={scrollX}/>
        </StyledDiv>
    )
}

export default MovieRow;