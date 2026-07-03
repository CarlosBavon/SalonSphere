import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar () {
    return (
        <>
            <nav className="nav">
                <div className="nav-logo">
                    <Link to="/">SalonSphere</Link>
                </div>
                <div className="nav-links">
                    <Link className="nav-link">Discover</Link>
                    <Link className="nav-link">Platform</Link>
                    <Link className="nav-link">Pricing</Link>
                    <Link className="nav-link">FAQ</Link>
                </div>
                <div className="nav-cta">
                    <button>Sign In</button>
                    <button>Book Now</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;