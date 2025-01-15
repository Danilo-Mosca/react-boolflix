import Card from "./Card";

/*Componente che filtra i film */
export default function MediaList({ title, list }) {

    return (
        <section className="container py-4 my-4">
            {/* Cambio lo stile e i colori dell'h2 a seconda se vengono mostrati i film più popolari o quelli da me ricercati */}
            {title === "Popular Movies" ? (
                <h2 style={{
                    backgroundColor: "red", marginTop: "50px", marginBottom: "20px", padding: "10px", color: "black", fontWeight: "bold",
                    textAlign: "center", boxShadow: " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                }}>{title}</h2>)
                :
                (
                    <h2 style={{
                        backgroundColor: "black", marginBottom: "20px", padding: "10px", textAlign: "center", color: "red",
                        boxShadow: " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                    }}>{title}</h2>
                )
            }
            < div className="row gy-4">
                {list.map((value) => (
                    <div className="col-12 col-md-4 col-lg-3" key={value.id}>
                        <Card media={value} />
                    </div>
                ))}
            </div>
        </section >
    );
}