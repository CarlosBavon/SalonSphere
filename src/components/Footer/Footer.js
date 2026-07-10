import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const linkStyle = {
        background: 'none',
        border: 'none',
        color: 'inherit',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        padding: 0,
    };
    const navigate = useNavigate();

    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <h2><span style={{ color: '#4fe067' }}>◼</span> SalonSphere</h2>
                        <p className="tagline">
                            The operating system for modern beauty businesses. Built for<br /> ambitious salons, spas and studios.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Platform</h4>
                        <ul>
                            <li>
                                <button
                                    type="button"
                                    style={linkStyle}
                                    onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Bookings
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    style={linkStyle}
                                    onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Payments
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    style={linkStyle}
                                    onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Marketing
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    style={linkStyle}
                                    onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Staff
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <div style={{ marginBottom: '1.8rem' }}>
                            <h4>Company</h4>
                            <ul>
                                <li><button type="button" style={linkStyle}>Pricing</button></li>
                                <li><button type="button" style={linkStyle}>FAQ</button></li>
                                <li>
                                    <button
                                        type="button"
                                        style={linkStyle}
                                        onClick={() => { navigate('/browse'); window.scrollTo(0, 0); }}
                                    >
                                        Discover
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="footer-col">
                            <h4>Get Started</h4>
                            <ul>
                                <li><button type="button" style={linkStyle}>Sign in</button></li>
                                <li><button type="button" style={linkStyle}>Create account</button></li>
                            </ul>
                        </div>
                        <div className="footer-col" style={{ marginTop: '30px' }}>
                            <h4>Privacy</h4>
                            <ul>
                                <li><button type="button" style={linkStyle}>Privacy Policy</button></li>
                                <li><button type="button" style={linkStyle}>Terms and Services</button></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 SalonSphere. All rights reserved.</p>
                    <p className="crafted">Crafted for the next generation of beauty businesses.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;