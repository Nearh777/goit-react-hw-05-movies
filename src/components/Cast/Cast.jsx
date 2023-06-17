import { getMovieCast } from 'ApiService/MoviesApi';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImgCast from '../../img/default-image.jpg';
import {Photo, PhotoList, PhotoItem, Name, Err, Role} from './Cast.styled.jsx';

const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    setStatus(pageStatus.LOADING);
    async function getData() {
      try {
        const data = await getMovieCast(id);
        setCast(data);
        setStatus(pageStatus.SUCCESS);
      } catch (error) {
        setStatus(pageStatus.ERROR);
      }
    }
    getData();
  }, [id]);

  return (
    <>
      {status === pageStatus.LOADING && <Loader />}

      {status === pageStatus.ERROR && (
        <Err>ERROR, CAST NOT FOUND</Err>
      )}

      {status === pageStatus.SUCCESS && cast.length === 0 && (
        <Err>CAST NOT FOUND</Err>
      )}

      {status === pageStatus.SUCCESS && (
        <PhotoList>
          {cast?.map((item, index) => (
            <PhotoItem key={index}>
              <Photo
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                    : defaultImgCast
                }
                alt=""
              />
              <Name>{item.original_name}</Name>
              <Role>
                {item.character ? item.character : 'role'}
              </Role>
            </PhotoItem>
          ))}
        </PhotoList>
      )}
    </>
  );
};



// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import getDataFilm from "../../MoviesApi.js";
// import { Section } from "../MoveDetails/MoveDetails.styled";
// import { Container } from "../FilmLayout/FilmLayout.styled";
// import { Actor, ActorList, ActorPoster, Role } from "./Cast.styled";
// import { useFilm } from "../hooks/useContext";

// const Cast = () => {
//     const [state, setState] = useState([])
//     const [response, setResponse] = useState('')
//     const { filmId } = useParams()
//     const { setIsloading } = useFilm()
//     useEffect(() => {
//         setIsloading(true)
//         getDataFilm(`movie/${filmId}/credits`)
//             .then(({ cast }) => {
//                 setState(cast.slice(0, 5))
//             })
//             .catch(err => setResponse(err.toString()))
//             .finally(() => setIsloading(false))
//     }, [])

//     const cast =
//         (!response ? (<Section>
//             <Container>
//                 <ActorList>
//                     {state.map(act => {
//                         return (
//                             <Actor key={act.id}>
//                                 <ActorPoster src={`https://image.tmdb.org/t/p/w500${act.profile_path}`} alt="" />
//                                 <div>
//                                     <h4>{act.name}</h4>
//                                     <p>{act.character}</p>
//                                 </div>
//                             </Actor>
//                         );
//                     })}
//                 </ActorList>
//             </Container>
//         </Section>) : <div>{response}</div>
//         )

//     return cast
// };

// export default Cast;




