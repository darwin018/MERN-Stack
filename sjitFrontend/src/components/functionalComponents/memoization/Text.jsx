import { memo,useState } from "react"

const Text=()=>{
    var [text,setText] = useState("")
    return(
        <div>
            Text Box :<input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h2>The text : {text}</h2>
        </div>
    )
}
export default memo(Text) 