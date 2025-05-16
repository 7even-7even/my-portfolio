// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="overlay">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </div>
        <div className="project-info">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;