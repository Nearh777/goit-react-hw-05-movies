import { useLocation } from 'react-router-dom';
import { Container } from '../FilmLayout/FilmLayout.styled'
import { Link, LinksList } from './FilmList.styled'

const FilmList = ({ filmList }) => {
    const location = useLocation();

    const films =
        <Container>
            <LinksList>
                {filmList.map(film => {
                    return <li key={film.id}><Link to={`/move/${film.id}`} state={{ from: location }}>{film.title ?? film.name}</Link></li>
                })}
            </LinksList>
        </Container>
    return films
};

export default FilmList;