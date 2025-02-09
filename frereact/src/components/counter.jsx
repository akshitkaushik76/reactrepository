import React from "react";
import { useState } from "react";
function Counter() {
    let [counter,setcounter] = useState(0)
    
    const addvalue = ()=>{
        console.log("value added",counter)
        counter = counter+1
        setcounter(counter)
    }
    const decvaluse = ()=>{
        if(counter>0) {
            counter = counter - 1;
            setcounter(counter)
        }
    }
    return (
        <div>
            <h1>counter app</h1>
            <h2>counter value:{counter}</h2>
            <button onClick={addvalue}> add value</button>
            <button onClick = {decvaluse}> decrease value</button>
            <footer>countervalue:{counter}</footer>
        </div>
    )
}
export default Counter