import React, { Component } from 'react';
import TextChild from './TextChild';
import './NumberUser.css'

// const NumberUser = (props) => {

// 		return <p>{props.userId}</p>;
	
// }

class NumberUser extends Component{

render(){

    return(
       <p className={this.props.userId <= 5 ? 'blue' : 'red'}>{this.props.userId}</p>
    )
}


}

export default NumberUser;
