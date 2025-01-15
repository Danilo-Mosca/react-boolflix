import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Card from "./Card";

/*Componente che mostra i film più popolari */
export default function MediaList({ title, list }) {

    // HOOK DI REACT CHE MI CONSENTE DI MANTENERE UN DATO SEMPRE AGGIORNATO TRA LA RERENDERIZZAZIONE DEL COMPONENTE. NON E' UNO STATO: NON POSSO
    // ASSEGNARGLI UN VALORE O UNA VARIABILE, TENGO IN MEMORIA IL SUO VALORE MA NON POSSO CAMBIARGLIELO: 
    // GENERALMENTE VIENE UTILIZZATO PREVALENTEMENTE PER FARE ANIMAZIONI E ROBE SIMILI E 
    // PER RECUPERARE UN ELEMENTO: AL POSTO DI getElementById CHE SU REACT NON E' POSSIBILE USARE,
    // IN QUESTO PROGETTO VIENE UTILIZZATO PER LO SCROLLING A DESTRA E SINISTRA DEL CAROSELLO DI IMMAGINI
    const myRef = useRef(null);

    // Funzione che permette di scrollare a sinistra la barra di scorrimento (per il carosello di immagini):
    function scrollLft() {
        // Così leggo il alore dell'hook myRef
        myRef.current.scrollBy({
            left: -1000,
            behavior: "smooth",
        });
    }

    // Funzione che permette di scrollare a destra la barra di scorrimento (per il carosello di immagini):
    function scrollRgt() {
        // Così leggo il alore dell'hook myRef
        myRef.current.scrollBy({
            left: 1000,
            behavior: "smooth",
        });
    }

    // Style dei pulsanti left e right del carosello
    const carouselStyle = {
        width: '48px',
        height: '48px',
        cursor: 'pointer',
    }

    return (
        <section className="container py-4 my-4  position-relative">
            <h2 style={{
                backgroundColor: "red", marginTop: "50px", marginBottom: "20px", padding: "10px", color: "black", fontWeight: "bold",
                textAlign: "center", boxShadow: " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }}>
                {title}
            </h2>
            
            {/* Con l'attributo ref={myRef} vado ad impostare l'intero <div> come valore corrente di myRef:
            è come se dicessi: document.getElementById("myRef"); 
            per leggere il valore che ho associato all'hook myRef si usa myRef.current
            quindi myRef.current sarebbe il mio <div> e quindi lo uso sopra  nelle funzioni scrollLft() e scrollRgt()
            per far scorrere la barra di scorrimento */}
            <div className="row py-4 flex-nowrap overflow-x-scroll nobar" ref={myRef}>
                {list.map((media) => (
                    <div className="col-12 col-md-4 col-lg-3" key={media.id}>
                        <Card media={media} />
                    </div>
                ))}
            </div>
            <div
                className="position-absolute top-50 start-0 bg-black z-3"
                onClick={scrollLft}
            >
                <FaAngleLeft style={carouselStyle} />
            </div>
            <div
                className="position-absolute top-50 end-0 bg-black z-3"
                onClick={scrollRgt}
            >
                <FaAngleRight style={carouselStyle} />
            </div>
        </section>
    );
}