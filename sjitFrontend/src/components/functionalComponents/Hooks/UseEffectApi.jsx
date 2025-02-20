import { useEffect, useState } from "react"
import axios from 'axios'
const UseEffectApi = ()=>{
    var [post,setPost] = useState([])
    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res)=> {
                setPost(res.data) 
                
            })
            .catch((err)=> console.log("couldn't read the api",err))
    },[])
    return(
        <div>
            <h1>This is use effect API</h1>
            <h2>We are going to fetch data from JSON Placeholder and display the data</h2>
            <ol>
            {post.map((pos) => (
                
                    <li key ={pos.id}>{pos.body}</li>
                
            ))}
            </ol>
        </div>
    )
}
export default UseEffectApi