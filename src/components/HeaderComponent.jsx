// Importo i CSS Modules dell'header:
import style from "./header.module.css";
export const HeaderComponent = () => {
    return (
        <header className={style.header}><nav className="navbar d-flex">
                <div className="container-fluid d-flex">
                <div className={`navbar-brand ${style["text-color"]}`}>BoolFlex</div>
                    <form className="d-flex" role="search">
                        <input
                            // className="form-control me-2"
                            type="search"
                            placeholder="Cerca..."
                            aria-label="Search"
                        />
                    <button className={`btn btn-danger ${style["border-radius-button"]}`} type="submit">
                            Cerca
                        </button>
                    </form>
                </div>
            </nav></header>
    );
}