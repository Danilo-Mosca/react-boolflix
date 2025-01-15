import { useState, useEffect } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import MediaList from './MediaList'
import MediaListCarousel from './MediaListCarousel'
// Importo il componente Loader che simula il caricamento della pagina
import Loader from "../components/Loader";

function MainComponent() {
    // Destrutturo useGlobalContext da cui prelevo le variabile di stato movies, series, isLoading (per il Loader), popularMovies (per i film popolari
    // del momento) perchè qui non ho bisogno di settarle e isSearching per vedere se sono state fatte ricerche e usarla come condizione per visualizzare
    // una determinata risposta: ad esempio una stringa con "Non ci sono film per la parola ricercata!" ecc.
    const { movies, series, isLoading, popularMovies, isSearching } = useGlobalContext();

    return (
        <main className='container-fluid '>

            {/* Se la variabile di stato isLoading è true, allora visualizzo il componente Loader con l'icona di caricamento, altrimenti nulla */}
            {isLoading && <Loader />}

            <section>
                {!isSearching ? (
                    // Gli passo lo stesso componente <MediaList /> ma come props gli passo la variabile di stato contentente 
                    // la la lista dei film più popolari:
                    <MediaListCarousel title="Popular Movies" list={popularMovies} key="popular" />
                ) :
                    (movies.length < 1) && (series.length < 1) ?
                        (<>
                            <h1 className='mt-5 pt-5 text-center align-middle'>
                                La ricerca non ha prodotto risultati! Prova con qualcos'altro!
                            </h1>
                            <MediaListCarousel title="Popular Movies" list={popularMovies} key="popular" />

                        </>)
                        : (<>
                            <h1 className='mt-5 pt-5 text-center align-middle'>
                                La ricerca ha prodotto i seguenti risultati!
                            </h1>
                            <MediaList title="Movies" list={movies} key="movies" />
                            {/* Anche per le serie tv gli passo lo stesso componente <MediaList/> 
                            ma gli passo come props la variabile di stato series */}
                            <MediaList title="Series" list={series} key="series" />
                        </>)
                }
            </section>
        </main>

    );
}

export default MainComponent;