import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const AboutMe = () => {
  const aboutTextRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    // Анимация появления текста "About Me"
    gsap.fromTo(
      aboutTextRef.current,
      {
        opacity: 0,
        y: '100vh',
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
      }
    )

    // Анимация появления кнопки с задержкой
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: '50px',
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
        delay: 1.5,
      }
    )
  }, [])

  const scrollToTechnicalSkills = () => {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="aboutMe" className="about-me">
      <h2 ref={aboutTextRef} className="about-me-title">
        Frontend Developer with 2 years of experience in building responsive and
        user-friendly web applications. Skilled in HTML, CSS, and
        JavaScript/TypeScript, with strong hands-on experience in React and
        SCSS. Focused on writing clean, maintainable code and delivering
        high-quality UI solutions.
      </h2>
      <button
        ref={buttonRef}
        className="about-me-btn"
        onClick={scrollToTechnicalSkills}
      >
        Technical Skills
      </button>
    </div>
  )
}

export default AboutMe
