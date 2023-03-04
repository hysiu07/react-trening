import React from 'react';
import TextChild from './TextChild';
import TextChildSecond from './TextChildSecond';
import './Text.css'

const Text = (props) => {
	console.log(props);


    return (
        <div className='box'>
            <p className='title'>Dzieci w komponencie klasowym</p>
            <TextChild name="Daniel" lastName="Hys" number={33}/>
            <TextChild name="Eliza" lastName="Hys" number={45}/>
            <TextChild name="Sandra" lastName="Hys" number={2}/>
            <TextChild name="Radek" lastName="KaczyŁebski" number={-500}/>
            <hr />
            <p className='title'>Dzieci w komponencie funkcyjnym</p>
            <TextChildSecond name="Karol" number="250"/>
            <TextChildSecond name="Izabela" number="76"/>
            <TextChildSecond name="Wiesiek" number="99"/>
        </div>
     )



};

// function Text(props) {
// 	console.log(props);


// }

export default Text;
