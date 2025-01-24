import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TechnicalSkills = () => {
  const skillsRef = useRef(null);
  const projectsButtonRef = useRef(null); // Ссылка на кнопку

  useEffect(() => {
    // Анимация появления блока с навыками
    gsap.fromTo(
      skillsRef.current,
      {
        opacity: 0,
        y: '50px', // Начальная позиция
      },
      {
        opacity: 1,
        y: 0, // Плавное появление
        duration: 1.5,
        ease: 'power4.out', // Плавная анимация
      }
    );
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop,
        behavior: 'smooth', // Плавная прокрутка
      });
    }
  };

  return (
    <div id="skills" className="technical-skills" ref={skillsRef}>
      <h2 className="skills-title">Technical Skills</h2>
      <p className="skills-description">
        I am staying updated with the latest skills in the tech industry because
        things change quickly and it affects my work.
      </p>
      <ul className="skills-list">
        <li>
          <strong>Languages:</strong> HTML, CSS, JavaScript (ES5/ES6),
          TypeScript
        </li>
        <li>
          <strong>Frameworks and Libraries:</strong> React, WordPress,
          Material-UI, Bootstrap
        </li>
        <li>
          <strong>Developer Tools:</strong> Git, Gitlab, Vite, Webpack, CI/CD,
          VS Code
        </li>
      </ul>

      {/* Кнопка перехода на проект */}
      <button
        ref={projectsButtonRef}
        className="projects-button"
        onClick={scrollToProjects}
      >
        View Projects
      </button>
    </div>
  );
};

export default TechnicalSkills;
