import EmpListItem from '../emp-list-item/emp-list-item';

import './emp-list.css';

const EmpList = ({ DB, onDeleteApp }) => {

    const elements = DB.map(item => {
        const { id, ...itemProps } = item;
        // return <EmpListItem name={item.name} salary={item.salary} />
        //використання обєект спред оператора
        return (
            <EmpListItem
                key={id}
                {...itemProps}
                onDeleteEL={() => onDeleteApp(id)}

            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmpList;
