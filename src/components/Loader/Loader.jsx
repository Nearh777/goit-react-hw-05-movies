import { ColorRing } from 'react-loader-spinner'
import { createPortal } from "react-dom";
import { useFilm } from '../hooks/useContext';
import { LoderContainer } from './Loader.styled';


const Loader = ({ isLoad = false }) => {
    const { isLoading } = useFilm()
    const loader = createPortal(<LoderContainer>
        < ColorRing
            visible={isLoad || isLoading}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        /></LoderContainer>, document.getElementById('root-loading'))
    return loader;
}

export default Loader;