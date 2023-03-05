import React, { Component } from 'react';
import NumberUser from './NumberUser';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';
import ClockFuncional from './ClockFuncional';
import './TextChild.css';

class TextChild extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
			lastName: this.props.lastName,
			numberUser: this.props.number,
			text: '',
			showClock: true,
		};
		// this.changeNumber = this.changeNumber.bind(this)
	}

	changeNumber = (e) => {

		this.target = e.target.innerText;
        // mozna uzyc this. mozna uzyc zmiennej

		let numberUser = this.state.numberUser;
		// console.log(target);

		if (this.target === 'Add') {
			this.setState({
				numberUser: numberUser + 1,
			});
		} else if (this.target === 'Sub') {
			this.setState({
				numberUser: numberUser - 1,
			});
		} else if (this.target === 'Reset') {
			this.setState({
				numberUser: (numberUser = 0),
			});
		} else {
			this.setState({
				numberUser: this.props.number,
			});
		}

		// this.setState({
		//     numberUser: numberUser
		// })
	};

	// subNumber = (e) => {
	// 	this.setState({
	// 		numberUser: this.state.numberUser - 1,
	// 	});
	// 	console.log(e.target.innerText);
	// };

	changeValue = (e) => {
		this.text = e.target.value;

		this.setState({
			text: this.text,
		});
	};

	toggleClock = () =>{
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            })
        })

    }

	render() {
		let randomNumber = Math.floor(Math.random() * 10);

		let clockEl = '';

		// if (this.state.showClock) {
		// 	clockEl = <Clock showMethod={this.toggleClock}/>;
		// } else {
		// 	clockEl = <span onClick={this.toggleClock}>Show Clock</span>;
		// }

		if (this.state.showClock) {
			clockEl = <ClockFuncional showMethod={this.toggleClock}/>;
		} else {
			clockEl = <span onClick={this.toggleClock}>Show Clock</span>;
		}

		return (
			<div className='container'>
				<p className='name'>Moje imię to : {this.props.name}</p>
				<p className='last-name'>A nazwisko to : {this.state.lastName}</p>
				<p className='number-user'>
					Number user:
					<NumberUser userId={this.state.numberUser} />
				</p>
				<p>Random Number: {randomNumber}</p>
				<ButtonsPanel buttonMethod={this.changeNumber} />
				<input type='text' className='input' onChange={this.changeValue} />
				<p className={this.state.text.length <= 5 ? 'blue' : 'red'}>
					{this.state.text}
				</p>
				{clockEl}
			</div>
		);
	}
}

export default TextChild;
