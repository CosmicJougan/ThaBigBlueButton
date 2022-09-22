import React, { useState } from 'react'
import './buttons.css';
import Infoscreen from '../infoscreen/infoscreen';

function Buttons(){
    
    const[Active, setActive] = useState({StartButton})
    
    const handleStart=()=>{
        setActive({StopButton})
    }
    const handleStop=()=>{
        setActive({InfoScreen})
    }
    const handleInfo=()=>{
        setActive({StartButton})
    }



       function StartButton(){
        return(
<           div>
                        <button className='startButton' onClick={handleStart}>
                            start
                        </button>
            </div>
        )
            
       }
       function StopButton(){
        return(
            <div>
                        <button className='stopButton' onClick={handleStop}>
                            stop
                        </button>
            </div>
        )
       }
        function InfoScreen(){
        return(
            <div>
                        <Infoscreen/>
                        <button onClick={handleInfo}>
                            verder
                        </button>
            </div>
        )
        } 
            
        return(
            {StartButton}
        )
            
}
export default Buttons;