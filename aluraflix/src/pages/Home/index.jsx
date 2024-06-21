import { useEffect, useState } from "react";
import Tmdb from "../../api/Tmdb";
import MovieRow from "../../components/MovieRow";

const Home = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }

        loadAll();
    }, []);

    return(
        <>
            <section>
                {movieList.map((item, key) => {
                    return <MovieRow key={key} title={item.title} items={item.items}/>
                })}
            </section>
        </>
    )
}

export default Home;