import styled from "styled-components"

const StyledDiv = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

const StyledDivList = styled.div`
    width: ${props => props.$listWidth}px;
    margin-left: ${props => props.$scrollX}px;
    transition: all ease 0.5s;

    div{
        display: inline-block;
        width: 150px;
        cursor: pointer;
    }

    img{
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }

    img:hover {
        transform: scale(1);
    }
`;

const MovieRowList = ({ items, scrollX }) => {
    return(
        <StyledDiv>
            <StyledDivList 
                $listWidth={items.results.length * 150}
                $scrollX={scrollX}
            >
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                ))}
            </StyledDivList>
        </StyledDiv>
    )
}

export default MovieRowList