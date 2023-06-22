// import React from 'react';
// import Box from 'helpers/Box/Box';
// import {Title} from './HomePage.styled.jsx';


// const HomePage = () => {
//   return (
//     <Box>
//       <Title >Trending movies of the week</Title>
//       {/* <MovieList /> */}
//     </Box>
//   )
// }

// export default HomePage



import { useEffect, useState } from "react";
import getDataMovies from "../../../ApiService/MoviesApi";
import FilmList from "../../FilmList/FilmList";
import { useFilm } from '../../hooks/useContext';

const Home = () => {
    const [filmList, setFilmList] = useState([])
    const { setIsloading } = useFilm()

    useEffect(() => {
        setIsloading(true)
        getDataMovies('trending/all/week')
            .then(res => {
                setFilmList(res.results);
                return;
            })
            .catch(err => console.log(err))
            .finally(() => setIsloading(false));
    }, [])

    const home =
        <>
            {filmList && <FilmList filmList={filmList} />}
        </>
    return home
};

export default Home;
