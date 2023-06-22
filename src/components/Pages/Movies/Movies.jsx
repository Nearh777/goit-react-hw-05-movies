import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import getDataMovies from "../../../ApiService/MoviesApi";
import { useFilm } from '../../hooks/useContext';
import FilmList from "../../FilmList/FilmList";
import Form from "../../Form/Form";

const Movies = () => {
    const [searchParams, setsearchParams] = useSearchParams()
    const { setIsloading } = useFilm()
    const [result, setResult] = useState([])
    const [isFound, setIsFound] = useState(false)
    const searchValue = searchParams.get("searchInput")
    console.log(searchValue)
    useEffect(() => {
        if (!searchValue) return;
        getDataMovies(`search/movie?query=${searchValue}`)
            .then(res => {
                setResult(res.results)
                res.results.length === 0 ? setIsFound(true) : setIsFound(false)
            })
            .catch(err => console.log(err))
            .finally(() => setIsloading(false));

    }, [searchValue])

    const move = <>
        <Form searchName={setsearchParams} />
        {isFound && <div>Нічого не знайдено!</div>}
        <FilmList filmList={result} />
    </>

    return move
};

export default Movies;