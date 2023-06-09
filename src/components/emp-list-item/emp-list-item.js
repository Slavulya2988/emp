
import './emp-list-item.css';

const EmpListItem = (props) => {

	const { name, onDeleteEL, onToggle, rise, increase, onUpdateSalary, salary } = props;


	let classNames = "list-group-item d-flex justify-content-between";
	if (increase) {
		classNames += ' increase';
	}
	if (rise) {
		classNames += ' like';
	}

	return (
		<li className={classNames}>
			<span className="list-group-item-label"
				onClick={onToggle}
				data-toggle='rise'
				style={{ fontSize: '1.5em', color: '#3d5a80' }}
			>{name}</span>
			<input type="text"
				className="list-group-item-input"
				// defaultValue={salary + "$"}
				name='salary'
				value={salary}
				onChange={onUpdateSalary}
			/>
			<div className='d-flex justify-content-center align-items-center'>
				<button type="button"
					className="btn-cookie btn-sm "
					onClick={onToggle}
					data-toggle='increase'>
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button"
					className="btn-trash btn-sm "
					onClick={onDeleteEL}
				>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	)
}



export default EmpListItem;
