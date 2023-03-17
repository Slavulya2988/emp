import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmpList from '../emp-list/emp-list';
import EmpAddForm from '../emp-add-form/emp-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Миколка Вершігорьский', salary: 800, increase: false, id: 1 },
                { name: 'Олежик Мурашенко', salary: 3000, increase: true, id: 2 },
                { name: 'Ангелка Тролова', salary: 5000, increase: false, id: 3 }
            ]
        }
    }

    render() {
        const { data } = this.state
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmpList
                    DB={data}
                    onDeleteApp={id => console.log(id)}
                />
                <EmpAddForm />
            </div>
        );
    }
}

export default App;
