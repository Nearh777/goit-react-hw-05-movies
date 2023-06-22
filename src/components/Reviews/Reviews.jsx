import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDataMovies from "../../ApiService/MoviesApi";
import { Section } from "../MoveDetails/MoveDetails.styled";
import { Container } from "../FilmLayout/FilmLayout.styled";
import { Review, ReviewsList } from "./Reviews.styled";
import { useFilm } from "../hooks/useContext";


const Reviews = () => {
    const [state, setState] = useState([])
    const [responseErr, setResponseErr] = useState('')
    const { filmId } = useParams()
    const { setIsloading } = useFilm()

    useEffect(() => {
        setIsloading(true)
        getDataMovies(`movie/${filmId}/reviews`)
            .then(({ results }) => {
                console.log(review)
                setState(results)
            })
            .catch(err => setResponseErr(err.toString()))
            .finally(() => setIsloading(false))

    }, [])

    const review =
        <Section>
            <Container>
                <ReviewsList>
                    {state.map((rev, i) => {
                        return (
                            <Review key={rev.id} index={i}>
                                <h4>{rev.author}</h4>
                                <p>{rev.content}</p>
                            </Review>
                        );
                    })}
                </ReviewsList>
            </Container>
        </Section>

    const reviews = (
        <>
            {state.length === 0 && <div>reviews not found</div>}
            {responseErr && <div>{responseErr}</div>}
            {state.length !== 0 && review}
        </>);

    return reviews;
};

export default Reviews;


