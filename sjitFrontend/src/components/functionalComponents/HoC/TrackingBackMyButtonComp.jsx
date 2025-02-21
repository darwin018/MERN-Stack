// import { Component } from "react"

const trackingBackMyButtonComp = (Component)=>{
    return(props)=>{
        const handleClick = ()=>{
            alert("The tracking info on clicking this Button "+props.trackingInfo.CustID)
        }
        return(
            <form onClick={handleClick}>
                Email: <input type="text" />
                Password: <input type="text" />
                <Component{...props} />
            </form>
        )
    }
}
export default trackingBackMyButtonComp