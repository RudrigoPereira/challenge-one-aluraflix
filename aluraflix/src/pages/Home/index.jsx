import { useEffect, useState } from "react";
import Tmdb from "../../api/Tmdb";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [bannerData, setBannerData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

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

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return(
        <>
            <Header black={blackHeader}/>
            <Main bannerData={bannerData} movies={movieList}/>
            <Footer />
        </>
    )
}

export default Home;