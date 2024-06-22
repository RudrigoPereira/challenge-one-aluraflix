import styled from "styled-components";

const StyledSection = styled.section`
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url(https://image.tmdb.org/t/p/original${props => props.$item.backdrop_path});

    .banner--vertical{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
    }
    .banner--horizontal{
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 30%, transparent 70%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-bottom: 100px;
        padding-top: 70px;
    }
    .banner--name{
        font-size: 60px;
        font-weight: bold;
    }
    .banner--info{
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
    }
    .banner--points,
    .banner--year,
    .banner--seasons{
        display: inline-block;
        margin-right: 15px;
    }
    .banner--points {
        color: #46D369;
    }
    .banner--description{
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
    }
    .banner--button{
        margin-top: 30px;
    }
    .banner--button a{
        font-size: 20px;
        font-weight: bold;
        padding: 15px 25px;
        border-radius: 5px;
        text-decoration: none;
        background-color: #FFF;
        color: #000;
        opacity: 1;
        transition: all ease 0.2s;
    }
    .banner--button a:hover{
        opacity: 0.7;
    }
    .banner--genres{
        margin-top: 30px;
        font-size: 18px;
        color: #999;
    }
`;

const Banner = ({ item }) => {
    console.log(item);
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return (
        <StyledSection $item={item}>
            <div className="banner--vertical">
                <div className="banner--horizontal">
                    <div className="banner--name">{item.name}</div>
                    <div className="banner--info">
                        <div className="banner--points">{item.vote_average} pontos</div>
                        <div className="banner--year">{firstDate.getFullYear()}</div>
                        <div className="banner--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="banner--description">{item.overview}</div>
                    <div className="banner--button"><a href="">▶︎ Assistir</a></div>
                    <div className="banner--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </StyledSection>
    )
}

export default Banner;