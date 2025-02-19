import { Link } from 'react-router-dom';
import '../css/Navbar.css'
// import UseEffect from './Hooks/UseEffect.jsx'

const Navbar = () =>{
    return(
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                <div>
                <span>Hooks</span>
                <ol>
                    <li><Link to='/use-State'>Use State</Link></li>
                    <li><Link to='/use-Effect'>Use Effect</Link></li>
                </ol>
                </div>
                <li><Link to='/Contact'>Contact</Link></li>
            </nav>
        </header>
    )
}
export default Navbar;