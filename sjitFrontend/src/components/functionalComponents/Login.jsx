const Login = ()=>{
    return(
        <div className="login">
            <form>
                <label for="email">e-Mail :</label>
                <input type="email" placeholder="Enter Your e-Mail" value="@sjit.ac.in" required />

                <label for="Password">Password :</label>
                <input type="password" placeholder="Enter Password" required />

                <button type="submit">Log-in</button>
            </form>
        </div>
    )
}
export default Login