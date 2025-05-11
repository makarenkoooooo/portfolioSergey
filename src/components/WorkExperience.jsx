import React, { useState } from 'react'
import gsap from 'gsap'

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const experienceData = [
    {
      title: 'EasyHire Platform',
      date: 'September 2023 – December 2023',
      description:
        'Developed user interfaces for the EasyHire hiring automation platform using React and TypeScript. Integrated REST API for real-time data retrieval. Applied BEM, DRY, and KISS principles to write clean and maintainable code. Collaborated closely with backend developers to improve integration and user experience.',
    },
    {
      title: 'Dashboard for Data Visualization (EdStat)',
      date: 'January 2024 – April 2024',
      description:
        'Created an interactive data dashboard using React and Material UI. Integrated external APIs for real-time data display. Built complex charts and tables with dynamic filtering and sorting to enhance usability and business insights.',
    },
    {
      title: 'AI Video Generation Platform (CopyReels)',
      date: 'July 2023 – September 2023',
      description:
        'Built a responsive frontend using React and Tailwind CSS for an AI-based video generation tool. Configured interaction with AI APIs to process and automate video content. Utilized Material UI to improve layout and UX.',
    },
    {
      title: 'WayStar Landing Page',
      date: 'April 2024',
      description:
        'Developed a responsive landing page using HTML and CSS. Implemented contact form submission via PHP and deployed the project to a live hosting server. Focused on clean layout, cross-browser support, and ease of use.',
    },
    {
      title: 'Industrial Equipment Website (GameChanger)',
      date: 'January 2023 – May 2023',
      description:
        'Designed and developed a website for an industrial equipment supplier, focusing on UX and functional ordering. Built advanced filters, quote calculators, and submission forms. Conducted SEO optimization to increase search visibility.',
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
    const content = document.querySelectorAll('.accordion-content')[index]

    // Плавное открытие и закрытие с помощью GSAP
    if (activeIndex === index) {
      gsap.to(content, { height: 0, opacity: 0, duration: 0.5 })
    } else {
      gsap.to(content, { height: 'auto', opacity: 1, duration: 0.5 })
    }
  }

  const scrollToContacts = () => {
    // Плавная прокрутка до блока "Contacts" с помощью GSAP
    gsap.to(window, {
      duration: 1, // Длительность прокрутки
      scrollTo: { y: '#contact', offsetY: 50 }, // Прокрутка до элемента с небольшим отступом сверху
      ease: 'power2.inOut', // Тип easing для плавности
    })
  }

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
  )
}

export default WorkExperience
