import { memo,useState } from "react"

const Number = ()=>{ 
    var [num,setNum] = useState(0)
    const doublingNumber =(num)=>{
        return num*2
    }
    return(
        <div>
            Number Box :<input type="number" value={num} onChange={(e)=> setNum(e.target.value)}/>
            <h2>This is Number :{num}</h2>
            <h2>Doubling up the number : {doublingNumber(num)}</h2>
        </div>
    )
}
export default memo(Number)