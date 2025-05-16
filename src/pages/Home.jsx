// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import profileImage from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf';
import { useNavigate } from 'react-router-dom'; // 👈 Importing navigation hook

const Home = () => {
  const navigate = useNavigate(); // 👈 Hook to programmatically navigate

  return (
    <div className="home-body d-flex">
      {/* Left - Image */}
      <div className="home-image">
        <img src={profileImage} alt="Profile" className="img-fluid" />
      </div>

      {/* Right - Text Content */}
      <div className="home-content text-white">
        <div className="main-content px-5">
          <h1 className="display-3 fw-bold">My<br />Portfolio</h1>
          <p className="mt-3 text-light w-75">
            Hi, I'm <strong>Siddharth Ohal</strong> — an aspiring Full-Stack Developer with a passion for building modern, responsive web experiences. Currently pursuing my B.E. in Information Technology, I specialize in creating clean and functional UIs backed by powerful backend systems.
            <br /><br />
            This portfolio showcases the journey, the skills, and the ambition of a developer who's always eager to learn and grow in the tech industry.
          </p>
          <div className="buttons mt-4">
            <button
              className="btn btn-light me-3"
              onClick={() => navigate('/about')} // 👈 Navigates to About page
            >
              Explore Now
            </button>
            <a href={resumePDF} download className="btn btn-outline-light">
              <i className="bi bi-download me-2"></i>Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
