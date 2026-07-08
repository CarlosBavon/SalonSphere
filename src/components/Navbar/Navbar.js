import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const goToBrowse = () => {
        navigate('/browse');
        window.scrollTo(0, 0);
    };

    const handleSectionClick = (sectionId, e) => {
        e.preventDefault();

        if (window.location.pathname !== '/') {
            navigate('/', { state: { scrollTo: sectionId } });
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="nav">
            <div className="nav-logo">
                <Link to="/" onClick={handleLogoClick}>
                    <span style={{ color: '#4fe067' }}>◼</span> SalonSphere
                </Link>
            </div>

            <div className="nav-links">
                <Link
                    className="nav-link"
                    to="/browse"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Discover
                </Link>

                <a
                    href="#platform"
                    className="nav-link"
                    onClick={(e) => handleSectionClick('platform', e)}
                >
                    Platform
                </a>

                <a
                    href="#pricing"
                    className="nav-link"
                    onClick={(e) => handleSectionClick('pricing', e)}
                >
                    Pricing
                </a>

                <a
                    href="#faq"
                    className="nav-link"
                    onClick={(e) => handleSectionClick('faq', e)}
                >
                    FAQ
                </a>
            </div>

            <div className="nav-cta">
                <button>Sign In</button>
                <button onClick={goToBrowse}>Book Now</button>
            </div>
        </nav>
    );
}

export default Navbar;