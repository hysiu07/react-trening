import React, { useState } from 'react';
import './TextChildSecond.css'
import ButtonsColor from './ButtonsColor';

const TextChildSecond = (props) => {
	let name = 'Zbigniew';

	const [newColor, setColor] = useState('black');

	const changeColor = (e) => {

		let target = e.target.innerText;
		if (target === 'Green') {
			setColor('lime');
		}else if( target === 'Gold'){
            setColor('gold')
        }else if( target === 'Red'){
            setColor('red')
        }else {
            setColor('black')
        }

		console.log(target);
	};
	return (
		<div className='container'>
			<p style={{ color: newColor }}>Moje imie to: {props.name}</p>
			<p>Imie kolegi: {name}</p>
			<p>Numer user: {props.number} </p>
			<div className='buttons'>
				<button className='btn' onClick={changeColor}>
					Green
				</button>
				<button className='btn' onClick={changeColor}>
					Gold
				</button>
				<button className='btn' onClick={changeColor}>
					Red
				</button>
			</div>
                <button className='reset'onClick={changeColor}>Reset</button>
		</div>
	);
};

export default TextChildSecond;
