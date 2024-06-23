import styled from "styled-components"

const StyledDiv = styled.div`
    overflow-x: hidden;
    padding-left: 30px;

    .movieRow--list{
        width: ${props => props.$listWidth}px;
        margin-left: ${props => props.$scrollX}px;
        transition: all ease 0.5s;
    }
    .movieRow--item {
        display: inline-block;
        width: 150px;
        cursor: pointer;
    }
    .movieRow--item img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }
    .movieRow--item img:hover {
        transform: scale(1);
    }
`;

const MovieRowList = ({ items, scrollX }) => {
    return(
        <StyledDiv 
            $listWidth={items.results.length * 150}
            $scrollX={scrollX}
        >
            <div className="movieRow--list">
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                ))}
            </div>
        </StyledDiv>
    )
}

export default MovieRowList