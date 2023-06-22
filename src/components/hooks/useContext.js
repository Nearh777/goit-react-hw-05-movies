import { createContext, useContext, useState } from "react";

const FilmContext = createContext();

export const useFilm = () => useContext(FilmContext);

export const FilmProvider = ({ children }) => {
    const [isLoading, setIsloading] = useState(false);

    return (
        <FilmContext.Provider value={{ isLoading, setIsloading }}>
            {children}
        </FilmContext.Provider>
    );
};

export default FilmProvider;