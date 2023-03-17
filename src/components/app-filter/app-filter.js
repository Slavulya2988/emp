import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                className="btn btn-light">
                Усі працівнички
            </button>
            <button type="button"
                className="btn btn-outline-light">
                На підвищення
            </button>
            <button type="button"
                className="btn btn-outline-light">
                Зарплатка більше 1000$
            </button>
        </div>
    )
}

export default AppFilter;
