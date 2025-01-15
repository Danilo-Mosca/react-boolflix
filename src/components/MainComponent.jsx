import { useState, useEffect } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import MediaList from './MediaList'
import SerieList from './SerieList'
// Importo il componente Loader che simula il caricamento della pagina
import Loader from "../components/Loader";

function MainComponent() {
    // Destrutturo useGlobalContext da cui prelevo solo la variabile di stato movies, series e isLoading (per il Loader) perchè qui non ho bisogno di settarle
    const { movies, series, isLoading } = useGlobalContext();

    return (
        <main className='container-fluid '>
            
            {/* Se la variabile di stato isLoading è true, allora visualizzo il componente Loader con l'icona di caricamento, altrimenti nulla */}
            {isLoading && <Loader />}

            <section>
                {((movies.length < 1) && (series.length < 1)) ? (
                    <h1 className='mt-5 text-center align-middle'>
                        Cerca un film o una serie tv!
                    </h1>
                ) :
                    (<>
                        <MediaList title="Movies" list={movies} />
                        <SerieList name="Series" list={series} />
                    </>)}
            </section>
        </main>

    );
}

export default MainComponent;