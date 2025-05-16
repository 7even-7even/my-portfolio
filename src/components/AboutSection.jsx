// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css';

const AboutSection = ({ title, content, image, link }) => {
    return (
        <div className="about-section d-flex">
            <div className="section-text w-50 p-4 d-flex flex-column justify-content-center">
                <h2>{title}</h2>
                {/* Render HTML table or plain text */}
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="section-image w-50 d-flex justify-content-center align-items-center">
                {
                    link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={image} alt={title} className="section-img" />
                        </a>
                    ) : (
                        <img src={image} alt={title} className="section-img" />
                    )
                }
            </div>
        </div>
    );
};

export default AboutSection;
