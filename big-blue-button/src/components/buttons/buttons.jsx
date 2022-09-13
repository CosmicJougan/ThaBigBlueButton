import React, { useState } from 'react'
import './buttons.css';
import Infoscreen from '../infoscreen/infoscreen';

function Buttons(){
    
    const[active, setActive] = useState(0)
    
    return(
       
        <div>
            <div>
                        <button className='startButton' >
                            start
                        </button>
            </div>
            <div>
                        <button className='stopButton' >
                            stop
                        </button>
            </div>
            <div>
                <Infoscreen/>
            </div>
        </div>
        
        
    
    )
    
}
export default Buttons;