import React, { useRef } from 'react'
import { useState,useEffect } from 'react'

const UseRef= () => {
    var[text,setText] = useState("")
    var prevRender = useRef();
    useEffect(() => {
        prevRender.current = text
        console.log(prevRender.current)
    }, [text])
    return (
        <div>
            <h1>This is use ref example</h1>
            Type your text : {" "}
            <input 
                type='text' 
                value={text} 
                onChange={(e)=>setText(e.target.value) }/>
            <h2>The current render text is :{text}</h2>
            <h3>The previous render text id :{prevRender.current}</h3>
        </div>
    )
}

export default UseRef
