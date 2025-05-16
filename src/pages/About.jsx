// src/pages/About.jsx
import React, { useRef } from 'react';
import './About.css';
import AboutSection from '../components/AboutSection';
import ScrollHint from '../components/ScrollHint';
import aboutImg from '../assets/about.jpg';
import collegeImg from '../assets/college.jpg';
import schoolImg from '../assets/school.jpg';

const About = () => {
    const containerRef = useRef(null);

    const scrollHandler = (e) => {
        const container = containerRef.current;
        if (!container) return;

        const delta = Math.sign(e.deltaY);
        const next = container.scrollLeft + delta * window.innerWidth;

        container.scrollTo({
            left: next,
            behavior: 'smooth',
        });
    };

    return (
        <div className="about-wrapper">
            {/* Mini animation to tell users how to scroll */}
            <ScrollHint />

            {/* Horizontal scrolling container */}
            <div className="about-container" ref={containerRef} onWheel={scrollHandler}>
                <AboutSection
                    title="Career Objective"
                    content="I am a passionate and dedicated Information Technology student with a strong interest in full-stack development. My objective is to leverage my technical skills and problem-solving mindset to build modern, user-friendly web and mobile applications. I aim to work in a dynamic environment where I can continuously grow, contribute meaningfully to real-world projects, and stay updated with the latest technologies in the software development field."
                    image={aboutImg}
                />

                <AboutSection
                    title="Education"
                    content={`
                        <table class="table table-dark table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>Institute Name</th>
                                    <th>Qualification</th>
                                    <th>Year</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>I²IT, Pune</td>
                                    <td>B.E. in IT</td>
                                    <td>2022 - Present</td>
                                    <td>8.38 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Nowrosjee Wadias, Pune</td>
                                    <td>HSC in Science</td>
                                    <td>2021 - 2022</td>
                                    <td>65.35%</td>
                                </tr>
                                <tr>
                                    <td>S. S. English Medium School</td>
                                    <td>SSC</td>
                                    <td>2019 - 2020</td>
                                    <td>87.56%</td>
                                </tr>
                            </tbody>
                        </table>
                    `}
                    image={collegeImg}
                    link="https://en.wikipedia.org/wiki/International_Institute_of_Information_Technology,_Pune"
                />

                <AboutSection
                    title="Internships & Experience"
                    content={`
                        <table class="table table-dark table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>Role</th>
                                    <th>Organization</th>
                                    <th>Duration</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Android Developer Intern</td>
                                    <td>Google For Developers</td>
                                    <td>Jan 2024 - Mar 2024</td>
                                    <td>Developed apps and learned Android fundamentals</td>
                                </tr>
                                <tr>
                                    <td>AI-ML Intern</td>
                                    <td>Google For Developers</td>
                                    <td>Jul 2023 - Sept 2023</td>
                                    <td>Foundational concepts of Artificial Intelligence and Machine Learning</td>
                                </tr>
                            </tbody>
                        </table>
                    `}
                    image={schoolImg}
                    link="https://ssenglishschool.com/"
                />
            </div>
        </div>
    );
};

export default About;
