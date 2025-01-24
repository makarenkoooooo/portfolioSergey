import React, { useState } from 'react';

import img1 from '../images/imgProject1.png';
import img2 from '../images/imgProject2.png';
import img3 from '../images/imgProject3.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Coffee Shop Website',
      description:
        'Website for a coffee shop with a sleek and functional design using HTML, CSS, and JavaScript.',
      image: img1,
      detailedDescription:
        'Developed a responsive website for a coffee shop using HTML, CSS, and JavaScript. The website features a modern layout with a menu section, location map, and contact form. Optimized for both mobile and desktop devices.',
      timeFrame: 'Frontend Developer, March 2023 – April 2023',
      location: 'Remote',
    },
    {
      title: 'Industrial Equipment Website',
      description:
        'Professional website for industrial equipment with ordering functionality.',
      image: img2,
      detailedDescription:
        'Created a professional website with convenient navigation and ordering functionality. Developed order forms and conducted SEO optimization to improve website visibility.',
      timeFrame: 'Frontend Developer, January 2023 – March 2023',
      location: 'Remote',
    },
    {
      title: 'Frontend Dashboard for Data Visualization',
      description:
        'Interactive dashboard for visualizing data in real-time with charts and tables.',
      image: img3,
      detailedDescription:
        'Created an interactive dashboard using React and Material UI. Integrated API for displaying real-time data, developed graphs and tables with filtering and sorting for user convenience.',
      timeFrame: 'Frontend Developer, January 2024 – April 2024',
      location: 'Remote',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Функция прокрутки к WorkExperience
  const scrollToWorkExperience = () => {
    const workExperienceSection = document.getElementById('experience');
    workExperienceSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        I create responsive websites and applications that enhance user
        experience and streamline workflows.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-text">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
            <h2>{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-img"
            />
            <p>{selectedProject.detailedDescription}</p>
          </div>
        </div>
      )}

      {/* Кнопка для перехода к компоненту WorkExperience */}
      <div>
        <button
          className="scroll-to-work-button"
          onClick={scrollToWorkExperience}
        >
          Go to Work Experience
        </button>
      </div>
    </div>
  );
};

export default Projects;
