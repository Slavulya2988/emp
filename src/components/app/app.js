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
                { name: 'Миколка Вершігорьский', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Олежик Мурашенко', salary: 3000, increase: true, rise: false, id: 2 },
                { name: 'Ангелка Тролова', salary: 5000, increase: false, rise: false, id: 3 }
            ]
        }

        this.maxId = 4;
        this.term = ''
    }

    deleteItem = (kod) => {
        this.setState(({ data }) => {
            return { data: data.filter(item => item.id !== kod) }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem]
            return { data: newArr }
        })
    }

    ToggleRiseIncrease = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))

    }

    searchEmp = (massiv, term) => {
        if (term.length === 0) {
            return massiv
        }
        return massiv.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (str) => {
        this.setState({ term: str })
    }

    render() {
        const emp = this.state.data.length;
        const empIncrease = this.state.data.filter(item => item.increase).length;
        const { data } = this.state
        const vissibleDB = this.searchEmp(data, this.term);

        return (
            <div className="app">
                <AppInfo empCount={emp}
                    empIncrease={empIncrease} />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>

                <EmpList
                    DB={vissibleDB}
                    onDeleteApp={this.deleteItem}
                    onToggle={this.ToggleRiseIncrease}
                />

                <EmpAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
