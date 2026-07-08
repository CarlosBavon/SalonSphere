import './Footer.css';

function Footer() {
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
                            <li><a href="#">Bookings</a></li>
                            <li><a href="#">Payments</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Staff</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <div style={{ marginBottom: '1.8rem' }}>
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Discover</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="footer-col">
                            <h4>Get Started</h4>
                            <ul>
                                <li><a href="#">Sign in</a></li>
                                <li><a href="#">Create account</a></li>
                            </ul>
                        </div>
                        <div className="footer-col" style={{ marginTop: '30px' }}>
                            <h4>Privacy</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms and Services</a></li>
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