import "./app-filter.css";

const AppFilter = () => {
    //  btn-light
    //  btn-outline-light
    const buttonDB = [
        { name: 'all', label: 'Усі працівнички' },
        { name: 'rise', label: 'На підвищення' },
        { name: 'over1000', label: 'Зарплатка більше 1000$' }
    ]

    // const clazz = 'btn-light'
    const buttons = buttonDB.map(item => {
        return (
            <button type="button"
                className="btn btn-light">
                {item.label}
            </button>)
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;
