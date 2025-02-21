import Button from "./Button"
import trackingBackMyButtonComp from "./TrackingBackMyButtonComp"
const Hoc = ()=>{
    const ButtonTrack = trackingBackMyButtonComp(Button)
    return(
        <div>
            <h1>Welcome to Higher order Components (Hoc)</h1>
            <Button value = {"Login"}/>
            <ButtonTrack value={"Login"} trackingInfo = {{"CustID":"Hello","Password":"password"}}/>
        </div>
    )
}
export default Hoc