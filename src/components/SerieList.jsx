import Card from "./Card";

/*Componente che filtra le serie tv */
export default function SerieList({ name, list }) {
    return (
        <section className="container py-4 my-4">
            <h2>{name}</h2>
            <div className="row gy-4">
                {list.map((serie) => (
                    <div className="col-12 col-md-4 col-lg-3" key={serie.id}>
                        <Card media={serie} />
                    </div>
                ))}
            </div>
        </section>
    );
}