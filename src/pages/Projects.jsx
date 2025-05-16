// src/pages/Projects.jsx
import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';
import dummyImg from '../assets/dummy.jpg';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills.',
    image: dummyImg,
    link: 'https://github.com/7even-7even/portfolio'
  },
  {
    title: 'Hospital Food Management System',
    description: 'A Web Application designed to take care of the diet of Hospital Patients',
    image: dummyImg,
    link: 'https://github.com/7even-7even/Hospital-Food-Management-System'
  },
  {
    title: 'Android',
    description: 'Implementation of various task provided under my Android Development Internship',
    image: dummyImg,
    link: 'https://github.com/7even-7even/Android'
  },
  {
    title: 'SARA: An AI Voice Assistant',
    description: 'An AI Voice assistant made for smart desktop navigation over speech recogniton and NLP model',
    image: dummyImg,
    link: 'https://github.com/7even-7even/SARA-AI-VOICE-ASSISTANT'
  },
  {
    title: 'Urban Assets',
    description: 'An android application made to tarck various daily expenses and income tax calculator',
    image: dummyImg,
    link: 'https://github.com/7even-7even/UrbanAssets'
  },
];

const Projects = () => {
  return (
    <div className="projects-container text-white">
      <h2 className="text-center mt-0 mb-4">My Projects</h2>
      <div className="container">
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;