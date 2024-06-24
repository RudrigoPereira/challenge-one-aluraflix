import React from "react";
import useMovieData from "../../hooks/useMovieData";
import useScrollHeader from "../../hooks/useScrollHeader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Loading from "../../components/Loading";

const Home = () => {
    const { movieList, bannerData } = useMovieData();
    const blackHeader = useScrollHeader();

    return (
        <>
            <Header black={blackHeader} />
            <Main bannerData={bannerData} movies={movieList} />
            <Footer />
            {movieList.length <= 0 && <Loading />}
        </>
    );
};

export default Home;
