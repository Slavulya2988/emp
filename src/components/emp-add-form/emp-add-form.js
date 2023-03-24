import { Component } from 'react';
// import './emp-add-form.css';
import './emp-add-form.scss';

class EmpAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSave = (e) => {
        const { name, salary } = this.state;
        e.preventDefault();
        if (name.length < 3 || !salary) {
            return;
        }
        else {
            this.props.onAdd(name, salary);
            this.setState({
                name: '',
                salary: ''
            })
        }


    }

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Додати нового працівничка</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSave}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звати?"
                        value={name}
                        name='name'
                        onChange={this.onChangeInput} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Зарплатка в $?"
                        value={salary}
                        name='salary'
                        onChange={this.onChangeInput} />

                    <button type="submit"
                        className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        )
    }
}

export default EmpAddForm;
