import React from "react";
import { useState, useCallback } from "react";
function doublingUpNumber(num){
    return num*2 ;
}
const UseCallback = () => {
    var [number, setNumber] = useState(0);
    var [theme,setTheme] = useState(false);
    var styling = {
        backgroundColor : theme ? "#493D9E" : "#B2A5FF",
        color : theme? "#B2A5FF" :"#493D9E",
    }
    // var slowFunction = (num)=>{
    //     for(var i=0;i<100000000;i++){}
    //     return num*2
    // }
    var numList = useCallback((mul)=>{
        return [number+mul*2,number+mul*4,number+mul*8]
    })
    return (
        <>
        <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        <div style={styling}>
        <h1>This is use callback example</h1>
        Number Box : {""}
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <h2>The number is : {number}</h2>
        {/* <h2>The number is : {doublingUpANumber(number)}</h2> */}
        <h2>The num list :</h2>
        {numList(100).map((val,index)=>(
            <h2 key={index}>{val}</h2>
        ))}
        </div>
        </>
    );
};

export default UseCallback;
