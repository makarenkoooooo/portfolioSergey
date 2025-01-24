import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Main = () => {
  const nameRef = useRef(null); // Ссылка на имя и фамилию
  const titleRef = useRef(null); // Ссылка на мини-тайтл
  const buttonRef = useRef(null); // Ссылка на кнопку "About Me"

  useEffect(() => {
    // Анимация появления имени и фамилии с движением снизу
    gsap.fromTo(
      nameRef.current,
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
    );

    // Анимация мини-тайтла с задержкой
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: '100vh',
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
        delay: 1.0,
      }
    );

    // Появление кнопки с задержкой
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
        delay: 2.0,
      }
    );
  }, []);

  const scrollToAboutMe = () => {
    document.getElementById('aboutMe').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main">
      <h1 ref={nameRef} className="main-title">
        SERGEY DODIVERIN
      </h1>
      <h2 ref={titleRef} className="main-subtitle">
        Frontend Developer
      </h2>

      {/* Убираем использование состояния и сразу отображаем кнопку */}
      <button
        ref={buttonRef}
        className="about-me-btn"
        onClick={scrollToAboutMe}
      >
        About Me
      </button>
    </div>
  );
};

export default Main;
