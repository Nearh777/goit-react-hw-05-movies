import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import getDataMovies from "../../ApiService/MoviesApi";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Section, LinkButton, FilmCard, FilmPoster, Link } from "./MoveDetails.styled";
import { Container } from "../FilmLayout/FilmLayout.styled";
import { useFilm } from '../hooks/useContext';
import Loader from "../Loader/Loader";

const MoveDetails = () => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [score, setScore] = useState('')
    const [overview, setOverview] = useState('')
    const [genres, setGenres] = useState([])
    const [response, setResponse] = useState('')
    const { setIsloading } = useFilm()
    const { filmId } = useParams()
    const location = useLocation();
    const prevLocation = useRef(location.state?.from ?? '/move')

    useEffect(() => {
        setIsloading(true)
        getDataMovies(`movie/${filmId}`)
            .then(({ original_title, genres, vote_average, poster_path, overview }) => {
                setTitle(`${original_title}`)
                setGenres(genres.map(g => g.name).join(', '))
                setOverview(`${overview}`)
                setImage(`https://image.tmdb.org/t/p/w500${poster_path}`)
                setScore(`${(10 * vote_average).toFixed(0)}%`)
            }).catch(err => setResponse(err.toString())).finally(() => setIsloading(false))
    }, [filmId])

    const moveDetails =
        <>
            {!response &&
                <Section>
                    <Container>
                        <LinkButton to={prevLocation.current}><FaLongArrowAltLeft /> go back</LinkButton>
                        <FilmCard>
                            <FilmPoster src={image} alt={title} />
                            <div>
                                <h2>{title}</h2>
                                <p>User Score: {score}</p>
                                <h3>Overview</h3>
                                <p>{overview}</p>
                                <h3>Genres</h3>
                                <p>{genres}</p>
                            </div>
                        </FilmCard>
                    </Container>
                </Section>}
            {!response &&
                <Section>
                    <Container>
                        <p>Additional information</p>
                        <ul>
                            <li><Link to='cast'>Cast</Link></li>
                            <li><Link to='reviews'>Reviews</Link></li>
                        </ul>
                    </Container>
                </Section>
            }
            <Suspense fallback={<Loader isLoad={true} />}>
                <Outlet />
            </Suspense>
            {response && <div> {response}</div>}
        </>
    return moveDetails
};

export default MoveDetails;
