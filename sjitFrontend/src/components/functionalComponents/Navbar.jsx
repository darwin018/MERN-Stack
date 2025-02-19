import { Link } from 'react-router-dom';
import '../css/Navbar.css'
// import UseEffect from './Hooks/UseEffect.jsx'

const Navbar = () =>{
    return(
        <header>
            <nav>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                <div>
                <li class ="dropdown"><a>Hooks</a>
                <ul class="dropdown-menu">
                    <li><Link to='/use-State'>Use State</Link></li>
                    <li><Link to='/use-Effect'>Use Effect</Link></li>
                </ul></li>
                </div>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/Signup'>Sign-Up</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;