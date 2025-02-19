import { useState } from "react";


function About(){
    var initialValue = 0
    var str = 'SJIT'
    var [num,setNum] = useState(initialValue)
    function handleDecrement(){
        setNum(num-1)
    }
    // function handleIncrement(){
    //     setNum(num+1)
    // }
    return(
        <div>
            <h1>About Page</h1>
            <h2>State Intitial Value is {initialValue}</h2>
            <button onClick={handleDecrement}>-</button>
            <h3>Updating State: {num}</h3>
            <button onClick={()=>setNum(num+1)}>+</button>
        </div>
    )
}
export default About;