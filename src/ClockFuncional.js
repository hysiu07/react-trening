import React, { useState, useEffect} from 'react';
import './ClockFuncional.css'

const ClockFuncional = (props) => {


    const [date, setDate] = useState(new Date())

    const tick = () => {
      setDate(new Date())
    }

    useEffect(() => {
        let timerId = setInterval(()=>{
            tick()
        },1000)
        console.log('montaz i update');
        
        return(()=>{
            clearInterval(timerId)
            console.log('odmontowanie');
        })
    },[date])

    
 
	return (
		<div className='clock'>
			<h4>Time: {date.toLocaleTimeString()}</h4>
			<span className='show-clock' onClick={props.showMethod}>
				X
			</span>
		</div>
	);
};

export default ClockFuncional;
