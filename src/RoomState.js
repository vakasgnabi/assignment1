/*Run through these quick exercises to solidify your understanding:

Add 2 more buttons: “ON” and “OFF”. 
Turn the light either ON or OFF depending on which button is clicked 
by wiring up the onClick handlers to set the state.
Add another piece of state: the room temperature. 
(Hint: you can call useState more than once!) 
Initialize it to 72 (or 22 for you Celsius types). 
Display the current temperature under the light status.
Add 2 more buttons: “+” and “-”. 
Then add onClick handlers that will increase or decrease 
the temperature by 1 degree when clicked,*/

import React,{useState} from 'react';
import './Room_State.css';

function RoomState(){
    let[isLit,setLit]=useState(false);
    let[currTemp,indecTemp]=useState(22);
    const getVal=(evt)=>{
        if(evt.target.value === "Add"){
          indecTemp(++currTemp);
        }
        else{
            indecTemp(--currTemp);
        }
        
    }
    const setLitVal=(evt)=>{
        if(evt.target.value==="On"){
            setLit(true);
        }
        else{
            setLit(false);
        }
    }

    return (
        <div className={`room ${(isLit?"lit":"dark")}`}>
             <p className="S">This is a Room is {isLit ? "lit":"dark"}</p>
             <button className={`btn`} value="On" onClick={setLitVal}>On</button>
            
            <button className={`btn`}  value="Off" onClick={setLitVal}>Off</button>
            <br /> 
            
           <p className="S">Temperature : {currTemp}</p> 
            <br />
            <button className={`btn`}  value="Add" onClick={getVal}>+</button>
            
            <button className={`btn`}  value="Dec" onClick={getVal}>-</button>
            

        </div>
    )
}

export default RoomState;