import "./hero.css";
import '../../index.css';
import salon from '../../assets/images/salon.jpg';
import { Link } from "react-router-dom";


function Hero () {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <span className="tagline">THE OPERATING SYSTEM FOR BEAUTY</span>
                    <h1 className="hero-header">Run the salon <br/><i>of tomorrow.</i></h1>
                    <p class="description">
                    SalonSphere is the all-in-one platform for ambitious salons, spas and studios. 
                    Bookings, payments, clients and growth — finally in one place, beautifully designed.
                    </p>
                    <div class="cta-group">
                        <Link to="/" class="btn btn-primary">Start free trial →</Link>
                        <Link to="/" class="btn btn-secondary">Discover salons </Link>
                    </div>
                    <p class="social-proof">Trusted by 4,000+ studios worldwide</p>
                </div>

                <div className="hero-image">
                    <img src={salon} alt="salon"/>
                </div>
            </section> 

           <section className="marquee">
            <div className="marquee-track">
                <span>BLOW-DRY BARS <span style={{color: '#4fe067'}}>◼</span> EXTENSION AND WEAVE STUDIOS  <span style={{color: '#4fe067'}}>◼</span>  BRAIDING AND LOCS STUDIOS  <span style={{color: '#4fe067'}}>◼</span>  TEXTURE AND CURL STUDIOS  <span style={{color: '#4fe067'}}>◼</span>  SCALP AND WELLNESS STUDIOS <span style={{color: '#4fe067'}}>◼</span>  COLOR-ONLY STUDIOS  <span style={{color: '#4fe067'}}>◼</span>MOBILE AND HOME-BASED HAIR STUDIOS  <span style={{color: '#4fe067'}}>◼</span>  HAIRSTUDIO <span style={{color: '#4fe067'}}>◼</span></span>
                
                <span>BLOW-DRY BARS  <span style={{color: '#4fe067'}}>◼</span>  EXTENSION AND WEAVE STUDIOS  <span style={{color: '#4fe067'}}>◼</span>  BRAIDING AND LOCS STUDIOS  <span style={{color: '#4fe067'}}>◼</span>  TEXTURE AND CURL STUDIOS  <span style={{color: '#4fe067'}}>◼</span>  SCALP AND WELLNESS STUDIOS  <span style={{color: '#4fe067'}}>◼</span>  COLOR-ONLY STUDIOS  <span style={{color: '#4fe067'}}>◼</span>  MOBILE AND HOME-BASED HAIR STUDIOS  <span style={{color: '#4fe067'}}>◼</span>  HAIRSTUDIO <span style={{color: '#4fe067'}}>◼</span></span>
            </div>
        </section>
        </>
    )
}

export default Hero;