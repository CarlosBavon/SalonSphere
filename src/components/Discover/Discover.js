import React, { useState, useMemo } from 'react';
import './Discover.css';

const studios = [
    {
        id: 1,
        name: 'Atelier Noir',
        category: 'Hair Salon',
        description:
            'A contemporary hair atelier blending Parisian precision with London edge. Color specialists and editorial cuts.',
    },
    {
        id: 2,
        name: 'Fade & Co Barbers',
        category: 'Barbershop',
        description: 'Old-school straight hair, hot towels. Whisky.',
    },
    {
        id: 3,
        name: 'Verdant Spa & Wellness',
        category: 'Spa Centre',
        description:
            'Botanical-led treatments, deep tissue, and a sauna ritual unlike anywhere else in the city.',
    },
];

const categories = ['All', 'Hair Salon', 'Spa Centre', 'Nail Salon', 'Barbershop', 'Makeup Studio', 'Beauty Salon'];

const DiscoverSection = () => {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredStudios = useMemo(() => {
        return studios.filter((studio) => {
            const matchesSearch = studio.name.toLowerCase().includes(search.toLowerCase()) ||
                studio.description.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = activeCategory === 'All' || studio.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [search, activeCategory]);

    return (
        <section
            id="discover"
            className={`discover-section ${filteredStudios.length === 3 ? 'full-width-section' : ''}`}
        >
            <div className="discover-header">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="category-filters">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="studios-count">
                {filteredStudios.length} {filteredStudios.length === 1 ? 'studio' : 'studios'}
            </div>

            <div className="studios-grid">
                {filteredStudios.map((studio) => (
                    <div key={studio.id} className="studio-card">
                        <span className="studio-category">{studio.category}</span>
                        <h3 className="studio-name">{studio.name}</h3>
                        <p className="studio-description">{studio.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DiscoverSection;