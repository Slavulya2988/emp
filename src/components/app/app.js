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

        this.maxId = 4;
    }

    deleteItem = (kod) => {
        this.setState(state => {
            return { data: state.data.filter(item => item.id !== kod) }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(state => {
            const newArr = [...state.data, newItem]
            return { data: newArr }
        })
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
                    onDeleteApp={this.deleteItem}

                />
                <EmpAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
