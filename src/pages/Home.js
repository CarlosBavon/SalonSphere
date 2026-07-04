import Hero from "../components/Hero/hero";
import React from 'react';
import './Home.css';

function Home () {

    const features = [
        {
            id: 1,
            icon: <i class="fa-regular fa-calendar"></i>,
            title: "Intelligent bookings",
            desc: "Calendar, waitlists, deposits, rescheduling and automated reminders — out of the box."
        },
        {
            id: 2,
            icon: <i class="fa-regular fa-credit-card"></i>,
            title: "Payments anywhere",
            desc: "Card, Apple Pay, M-Pesa. Tips, no-show protection and instant payouts to your account."
        },
        {
            id: 3,
            icon: <i class="fa-solid fa-user-group"></i>,
            title: "Staff & rotas",
            desc: "Manage stylists, set commissions, control permissions and publish schedules in seconds."
        },
        {
            id: 4,
            icon: <i class="fa-solid fa-chart-column"></i>,
            title: "Revenue analytics",
            desc: "See exactly what's driving growth — by service, stylist, branch or season."
        },
        {
            id: 5,
            icon: <i class="fa-regular fa-message"></i>,
            title: "Client messaging",
            desc: "Realtime chat, enquiries and broadcast campaigns. All in one inbox."
        },
        {
            id: 6,
            icon: <i class="fa-brands fa-openai"></i>,
            title: "AI assistant",
            desc: "Suggests best times, predicts churn and writes campaigns. Always on, never off."
        }
    ];

    return (
        <>
            <Hero/>
            <section className="platform">
                <h4 className="platform-head"><span style={{color: '#4fe067'}}>◼</span> The Platform</h4>
                <div className="plat-hero">
                    <h1 className="platform-header">Every tool your<br/> studio runs on.<br/><i style={{color: 'grey'}}>Replaced by one.</i></h1>

                    <p className="plat-hero-p">From the first tap on a booking link to the last receipt of the day — SalonSphere is the connective tissue that keeps your business calm, profitable and growing.</p>
                </div>
                
                <div className="feature-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-card-h3">{feature.title}</h3>
                            <p className="feature-card-p">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className="stats">
                <div className="stat">
                    <h2 className="stat-header">12,400+</h2>
                    <p className="stat-desc">Bookings processed daily</p>
                </div>
                <div className="stat">
                    <h2 className="stat-header">98%</h2>
                    <p className="stat-desc">On-time client retention</p>
                </div>
                <div className="stat">
                    <h2 className="stat-header">3.4×</h2>
                    <p className="stat-desc">Avg revenue lift in 6 months</p>
                </div>
                <div className="stat">
                    <h2 className="stat-header">&lt; 2 min</h2>
                    <p className="stat-desc">From signup to first booking</p>
                </div>
            </div>
        </>
    )
}

export default Home;