import React from 'react';
import '../styles/OurWorks.scss';
import lineAboutEnd from '../assets/lineAboutEnd.png';
import OurWorksItem from "./OurWorksItem";

const OurWorks = ({ works, onWorkClick }) => {
    return (
        <section id="our-works" className="our-works">
            <img className="line-about-end" src={lineAboutEnd} />
            
                <h2>Our Works</h2>
                <div className="works-list">
                    {works.map((work) => (
                        <OurWorksItem key={work.id} work={work} onClick={onWorkClick} />
                    ))}
                </div>
        </section>
    );
};

export default OurWorks;
