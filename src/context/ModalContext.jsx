import { createContext, useContext, useState } from "react";
import useFetch from "../utils/fetchData";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { movie, getSingleMovieDetails, isSingleMovieLoading } = useFetch();
    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                setIsModalOpen,
                movie,
                getSingleMovieDetails,
                isSingleMovieLoading,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

const useModalContext = () => {
    return useContext(ModalContext);
};

export { ModalProvider, useModalContext };
