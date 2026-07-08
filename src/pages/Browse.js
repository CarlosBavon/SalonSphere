import { useEffect } from 'react';
import DiscoverSection from "../components/Discover/Discover";

function Browse() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="testimonials">
                <h4 className="testimonial-head"><span style={{ color: '#4fe067' }}>◼</span> DISCOVER</h4>
                <h1 className="testimonial-header">Find the studio that<br /> <i>moves you.</i></h1>
                <DiscoverSection />
            </section>
        </>
    )
};

export default Browse;