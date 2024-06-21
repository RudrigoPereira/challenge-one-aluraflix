import styled from "styled-components";

const StyledDiv = styled.div`
    margin-bottom: 30px;

    h2 {
        margin: 0 0 0 30px;
    }
    .movieRow--listarea {
        overflow-x: hidden;
        padding-left: 30px;
    }
    .movieRow--list {
        width: 9999999999px;
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

const MovieRow = ({ title, items }) => {
    return(
        <StyledDiv>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </StyledDiv>
    )
}

export default MovieRow;