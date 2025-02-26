import '../css/signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = ()=>{

    const handleSignup = ()=> {
        axios.post("http://localhost:3001/signup",{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            phoneNumber:phoneNumber
        })
    }
    
    
    return(
        <div className="signup-container">
        <form>
            <div className="input-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" required />
            </div>

            <div className="input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name" required />
            </div>

            <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
            </div>

            

            

            <div className="input-group">
                <label>Mobile Number</label>
                <input type="tel" placeholder="Enter your mobile number" required />
            </div>

           

            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to='/Login'>Log in</Link></p>
        </div>
        
    )
}
export default Signup