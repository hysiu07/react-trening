import React from 'react';
import './ButtonsPanel.css';

const ButtonsPanel = (props) => {
	return (
		<div className='buttons'>
			<button className='btn' onClick={props.buttonMethod}>Add</button>
			<button className='btn' onClick={props.buttonMethod}>Sub</button>
			<button className='btn' onClick={props.buttonMethod}>Reset</button>
			<button className='btn' onClick={props.buttonMethod}>ReInit</button>
		</div>
	);
};

export default ButtonsPanel