import "./hero.css"
import '../../index.css';
import salon from '../../assets/images/salon.jpg'

function Hero () {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="tagline">THE OPERATING SYSTEM FOR BEAUTY</span>
                <h1 className="hero-header">Run the salon <br/><i>of tomorrow.</i></h1>
                <p class="description">
                SalonSphere is the all-in-one platform for ambitious salons, spas and studios. 
                Bookings, payments, clients and growth — finally in one place, beautifully designed.
                </p>
                <div class="cta-group">
                    <a href="#" class="btn btn-primary">Start free trial →</a>
                    <a href="#" class="btn btn-secondary">Discover salons </a>
                </div>
                <p class="social-proof">Trusted by 4,000+ studios worldwide</p>
            </div>

            <div className="hero-image">
                <img src={salon}/>
            </div>
        </section> 
    )
}

export default Hero;