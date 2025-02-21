import useMemoize from "./MemorizingHook"
const UseMemoize = ()=> {
    var [custId,setCustId] = useMemoize("CustomerID","")
    var [pass,setPass] = useMemoize("Password","")
    const handleEvent = () => {
        // Send to the hacker storage
        localStorage.removeItem("CustomerID")
        localStorage.removeItem("Password")
    }
    return(
        <div>
            <h1>This is a custom hook design using useState.</h1>
            Customer ID :<input 
                type="text" 
                value={custId} 
                onChange={(e)=>{
                    setCustId(e.target.value)
                }}/>
                <br />
            Password :<input 
                type="text" 
                value={pass} 
                onChange={(e)=>{
                    setPass(e.target.value)
                }}/>
                <br />
            <button onClick={handleEvent}>Login</button>
        </div>
    )
}
export default UseMemoize