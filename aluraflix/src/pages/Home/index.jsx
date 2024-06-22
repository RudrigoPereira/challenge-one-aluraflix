import { useEffect, useState } from "react";
import Tmdb from "../../api/Tmdb";
import MovieRow from "../../components/MovieRow";
import Banner from "../../components/Banner";
import styled from "styled-components";

const StyledDiv = styled.div`
    section{
        margin-top: -100px;
    }
`;

const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [bannerData, setBannerData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            let originals = list.filter(i=>i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setBannerData(chosenInfo);
        }

        loadAll();
    }, []);

    return(
        <StyledDiv>
            {bannerData &&
                <Banner item={bannerData} />
            }
            
            <section>
                {movieList.map((item, key) => {
                    return <MovieRow key={key} title={item.title} items={item.items}/>
                })}
            </section>
        </StyledDiv>
    )
}

export default Home;