import "./app-filter.css";

const AppFilter = (props) => {
    //  btn-light
    //  btn-outline-light
    const buttonDB = [
        { name: 'all', label: 'Усі працівнички' },
        { name: 'rise', label: 'На підвищення' },
        { name: 'over1000', label: 'Зарплатка більше 1000$' }
    ]


    const buttons = buttonDB.map(item => {
		const active = props.filter === item.name
		const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button type="button"
                className = {`btn ${clazz}`}
					 key={item.name}
				    onClick={() => props.onFilterSelect(item.name)}
					>
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
