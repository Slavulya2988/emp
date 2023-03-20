import './app-info.css';

const AppInfo = ({ empCount, empIncrease }) => {
    return (
        <div className="app-info">
            <h1>Облік працівничків в компанії ХРУМКИ</h1>
            <h2>Загальна кількість працівничків: {empCount} </h2>
            <h2>Премію отримають: {empIncrease} </h2>
        </div>
    )
}

export default AppInfo;
