import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return (
        <div className="navbar">
            <Link to="/"><i className="fas fa-home fa-2x"></i></Link>
        </div>
    )
}

export default Navbar