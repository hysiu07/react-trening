import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}

	tick = () => {
		this.setState({
			date: new Date(),
		});
	};

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.tick();
		}, 1000);
		console.log('montowanie');
	}
	componentDidUpdate() {console.log('update');}

	componentWillUnmount() {
		// clearInterval(this.timerId);
		console.log('odmontowanie');
	}

	render() {
		return (
			<div className='clock'>
				<h4>Time: {this.state.date.toLocaleTimeString()}</h4>
				<span className='show-clock' onClick={this.props.showMethod}>X</span>
			</div>
		);
	}
}

export default Clock;
