import Card from "./Card";

/*Componente che filtra i film */
export default function MediaList({ title, list }) {
    return (
        <section className="container py-4 my-4">
            <h2>{title}</h2>
            <div className="row gy-4">
                {list.map((movie) => (
                    <div className="col-12 col-md-4 col-lg-3" key={movie.id}>
                        <Card media={movie} />
                    </div>
                ))}
            </div>
        </section>
    );
}