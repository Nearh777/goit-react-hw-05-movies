import { Outlet } from 'react-router-dom';
import { Container, Header, LinkList, LinkItem, LinkPage } from './FilmLayout.styled'
import Loader from '../Loader/Loader';
import { Suspense } from 'react';


const FilmLayout = () => {
    const filmLayout =
        <>
            <Header>
                <Container>
                    <nav>
                        <LinkList>
                            <LinkItem><LinkPage to='/' end>HOME</LinkPage></LinkItem>
                            <LinkItem><LinkPage to='/movies'>MOVE</LinkPage></LinkItem>
                        </LinkList>
                    </nav>
                </Container>
            </Header>
            <main>
                <Container>
                    <Suspense fallback={<Loader isLoad={true} />}>
                        <Loader />
                        <Outlet />
                    </Suspense>
                </Container>
            </main>

        </>
    return filmLayout
};

export default FilmLayout;


