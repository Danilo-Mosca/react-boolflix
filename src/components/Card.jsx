// Importo il CSS Modules dell'header:
import style from "./Card.module.css";
import { useState } from "react";

/* importo le icone FaStar e FaRegStar di React dopo averle installate con il comando:
   npm install react-icons --save
*/
import { FaStar, FaRegStar } from "react-icons/fa";

// Mi ricavo il percorso dell'immagine:
const imgPath = import.meta.env.VITE_IMG_PATH;

// Creo una costante che conterrà la lista delle sigle dei paesi con le quali andremo ad associarci le bandiere:
const flags = ["en","us", "it", "es", "fr", "de", "nl", "pt", "ru", "uk", "ua", "sv", "no", "da", "ro", "kr", "jp"];
function Card({ media }) {
    // Controllo se nell'array flags è contenuta la sigla della lingua di uno dei paesi presenti nell'Array, in caso affermativo
    // ritorno l'abbreviazione del paese corrispondente e assegno alla costante flag il path della bandiera corrispondente, altrimenti
    // lo sostituisco con un placeholder
    const flag = flags.includes(media["original_language"])
        ? media["original_language"] + ".png"
        : "flag-placeholder.png";

    // Funzione che disegna le stelle:
    const drawStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            // Controllo le star con Math.ceil che arrotonda per eccesso:
            const star = i <= Math.ceil(media["vote_average"] / 2) ? (
                // Disegno le stelle come fossero un componente e gli assegno una key:
                <FaStar key={i} />
            ) : (
                <FaRegStar key={i} />
            );
            stars.push(star);
        }
        return stars;
    };
    return (
        <div className={`card ${style.cardWrapper} ${style.cardEffect}`}>
            <img
                src={
                    media.poster_path !== null ?
                        imgPath + media.poster_path
                        :
                        `/img/flags/poster-placeholder.png`}
                className={`card-img-top ${style.cardImg}`}
                // Se media.title esiste (per i film) al testo alternativo gli assegno il media.title, altrimenti se non esiste significa che sto stampando una serie tv e quindi il testo
                // alternativo sarà sarà contenuto in media.name (questo perchè il titolo del film nei film è contenuto nella chiave "title" mentre nelle serie tv è contenuto nella chiave "name")
                // Effettuo il controllo usando lo "Short-Circuiting con l'operatore OR (||)
                alt={media.title || media.name}
            />
            <div className={`card-body ${style.cardInner}`}>
                {/* Come sopra, se un film il titolo del film è nella chiave "title", se una serie è nella chiave "name". Effettuo il controllo usando lo "Short-Circuiting con l'operatore OR (||) */}
                <h5 className="card-title">{media.title || media.name}</h5>
                <p className="card-text">{media.overview}</p>
                <p>Lingua originale:</p>
                <div className={style.flag}>
                    <img src={`/img/flags/${flag}`} alt={flag} className="img-fluid" />
                </div>
                <div>Media recensioni:</div>
                <div className={style.cardStar}>{drawStars()}</div>
            </div>
        </div>
    );
}

export default Card;
