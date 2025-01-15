/* Creazione della GlobalContext che conterrà tutte le chiamate API al server https://www.themoviedb.org/ */
import { createContext, useState, useContext } from "react";
import axios from "axios";

//Api url e endpoint per axios
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const lang = import.meta.env.VITE_LANGUAGE;

const GlobalContext = createContext();  //creo il Context e gli do il nome GlobalContext

// Creo un Provider (customizzato per fornire i dati)
// Per creare un Provider dobbiamo passare i children ai componenti figli (i componenti che consumeranno i dati che gli passeremo):
const GlobalProvider = ({ children }) => {
    // Stati del Provider accessibili ai componenti Consumer che inizializzo a zero:
    // useState dei film:
    const [movies, setMovies] = useState([]);
    // useState delle Serie TV:
    const [series, setSeries] = useState([]);
    // const [isSearching, setIsSearching] = useState(false);
    // variabile di stato per il Loader:
    const [isLoading, setIsLoading] = useState(false);

    // Mi creo l'oggetto params contenente l'apiUrl, la key e la lingua per la chiamata all'API:
    const params = {
        api_key: apiKey,
        query: "",
        language: lang,
    }

    /* Funzione di chiamata all'API per i film */
    function getMedia(query) {
        params.query = query.value;
        // console.log(params.query);
        
        // Al caricamento dei post setto la variabile di stato isLoading a true, così da permettere la visualizzazione del componente <Loader />
        setIsLoading(true);     

        // chiamo axios a cui passo l'apiUrl e i parametri per la query string che sono: la query ricercata, l'API key
        // e la lingua con cui voglio visualizzare le card
        axios.get(apiUrl + "search/movie", { params: params })
            .then((res) => {
                // console.log(res.data.results);
                setMovies(res.data.results);
                setIsLoading(false);    // Una volta completato il caricamento setto la variabile di stato isLoading a false così da nascondere il componente <Loader />
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);    // Per sicurezza setto anche qui a false la variabile di stato isLoading per nascondere il componente <Loader />
                console.log("Finito");
            });
    }

    /* Funzione di chiamata all'API per i film */
    function getSerie(query) {
        params.query = query.value;
        // console.log(params.query);

        // Come per la funzione getMedia(), al caricamento dei post setto la variabile di stato isLoading a true, così da permettere la visualizzazione del componente <Loader />
        setIsLoading(true);
        
        // chiamo axios a cui passo l'apiUrl e i parametri per la query string quali la query ricercata l'API key 
        // e la lingua con cui voglio visualizzare le card
        axios.get(apiUrl + "search/tv", { params: params })
            .then((res) => {
                // console.log(res.data.results);
                setSeries(res.data.results);
                setIsLoading(false);    // Una volta completato il caricamento setto la variabile di stato isLoading a false così da nascondere il componente <Loader />
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);    // Per sicurezza setto anche qui a false la variabile di stato isLoading per nascondere il componente <Loader />
                console.log("Finito");
            });
    }

    function search() {
        getMedia(query);
        getSerie(query);
    }

    // Oggetto contenente i dati da passare al value per offrirli ai Consumer (i componenti racchiusi nel Provider di GLobalContext)
    // ovvero lo useState movies e la funzione search
    const collectionData = {
        search,
        movies,
        series,
        isLoading,
    }

    return (
        <GlobalContext.Provider value={collectionData}>{children}</GlobalContext.Provider>
    );
}

// Creo una hook customizzato (per consumare dati)
function useGlobalContext() {
    // Gli hook personalizzati utilizzano altri hook esistenti e ritornano un nuovo hook
    const context = useContext(GlobalContext);
    // In questo caso ritorno GlobalContext:
    return context;
}

export { GlobalProvider, useGlobalContext };