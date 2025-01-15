// Importo il CSS Modules dell'header:
import style from "./header.module.css";
// Importo l'hook useState
import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

export function HeaderComponent() {
    const { search } = useGlobalContext();
    const [querySelected, setQuerySelected] = useState("");

    /* Funzione richiamata al click sul pulsante Cerca */
    function handleSearch(event) {
        event.preventDefault();     // prevenisco il ricaricamento della pagina
        // Al click sul pulsante assegno il valore della variabile di stato querySelected al GlobalContext
        search(querySelected);
    }

    /* Funzione richiamata ogni volta che si inserisce del testo nella input search */
    function handleInput(event) {
        // Assegno alla variabile di stato querySelected il valore contenuto nella input search ogni volta che questa viene modificata
        setQuerySelected(event.target.value);
    }

    return (
        <header className={style.header}>
            <nav className="navbar d-flex">
                <div className="container-fluid d-flex">
                    <div className={`navbar-brand ${style["text-header"]}`}>BoolFlex</div>
                    <form className="d-flex" role="search">
                        <input
                            // className="form-control me-2"
                            type="search"
                            placeholder="Cerca..."
                            aria-label="Search"
                            name="query"
                            id="query"
                            onChange={handleInput}
                        />
                        <button
                            className={`btn btn-danger ${style["border-radius-button"]}`}
                            type="submit"
                            onClick={handleSearch}>
                            Cerca
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    );
}