import React, { useState } from 'react';
import gsap from 'gsap';

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const experienceData = [
    {
      title: 'EasyHire',
      date: 'May 2024 – November 2024',
      description:
        'Developed web application interfaces for EasyHire using React and TypeScript. Integrated REST API for real-time data display. Applied BEM, DRY, and KISS principles to write maintainable code. Collaborated with backend developers to improve frontend-server integration.',
    },
    {
      title: 'Dashboard for Data Visualization',
      date: 'January 2024 – April 2024',
      description:
        'Created an interactive dashboard using React and Material UI. Integrated API for real-time data display. Developed charts and tables with filtering and sorting for user convenience.',
    },
    {
      title: 'AI Video Generation Platform',
      date: 'July 2023 – September 2023',
      description:
        'Developed a responsive interface using React and Tailwind CSS. Configured interaction with AI API for processing user requests. Used Material UI to improve structure and interface usability.',
    },
    {
      title: 'Industrial Equipment Website',
      date: 'April 2023 – June 2023',
      description:
        'Created a professional website with intuitive navigation and order functionality. Developed order forms and conducted SEO optimization to enhance site visibility.',
    },
    {
      title: 'Online Store',
      date: 'January 2023 – March 2023',
      description:
        'Enhanced the store’s interface and functionality, improving user experience. Configured interactive elements using JavaScript and jQuery. Implemented a responsive design for proper display across all devices.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    const content = document.querySelectorAll('.accordion-content')[index];

    // Плавное открытие и закрытие с помощью GSAP
    if (activeIndex === index) {
      gsap.to(content, { height: 0, opacity: 0, duration: 0.5 });
    } else {
      gsap.to(content, { height: 'auto', opacity: 1, duration: 0.5 });
    }
  };

  const scrollToContacts = () => {
    // Плавная прокрутка до блока "Contacts" с помощью GSAP
    gsap.to(window, {
      duration: 1, // Длительность прокрутки
      scrollTo: { y: '#contact', offsetY: 50 }, // Прокрутка до элемента с небольшим отступом сверху
      ease: 'power2.inOut', // Тип easing для плавности
    });
  };

  return (
    <div className="work-experience-container" id="experience">
      <h2 className="work-experience-title">Work Experience</h2>

      {experienceData.map((exp, index) => (
        <div
          key={index}
          className={`accordion ${
            activeIndex === index ? 'accordion-open' : ''
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="accordion-header">
            <div className="accordion-title">
              <span>{exp.title}</span>
              <span>{exp.date}</span>
            </div>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? 'open' : ''
            }`}
          >
            <p>{exp.description}</p>
          </div>
        </div>
      ))}

      {/* Кнопка Contacts */}
      <button className="contacts-btn" onClick={scrollToContacts}>
        Contacts
      </button>
    </div>
  );
};

export default WorkExperience;
