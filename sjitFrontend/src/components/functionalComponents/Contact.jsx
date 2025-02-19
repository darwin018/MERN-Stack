import { useState } from "react";


function Contact(){
    const [text,setText] = useState("")
    return(
        <div>
            <h1>Contact Page</h1>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
            <h3>String : {text}</h3>
            
        </div>
    )
}
export default Contact;