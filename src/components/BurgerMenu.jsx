import React, { useState } from 'react';
import '../BurgerMenu.css';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для блокировки/разблокировки скролла
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Функция для плавной прокрутки
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки
    setIsOpen(false); // Закрываем меню
    document.body.style.overflow = 'auto'; // Разблокируем скролл

    // Используем GSAP для плавного скролла к целевому элементу
    gsap.to(window, {
      duration: 1, // Длительность анимации в секундах
      scrollTo: { y: targetId, offsetY: 50 }, // Прокрутка до элемента с небольшим отступом сверху
      ease: 'power2.inOut', // Тип easing
    });
  };

  return (
    <>
      {/* Бургер-кнопка */}
      <button
        className={`burger-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* Боковое меню */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <h3>Menu</h3>
          <ul>
            <li>
              <a
                href="#aboutMe"
                onClick={(e) => handleSmoothScroll(e, '#aboutMe')}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, '#skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleSmoothScroll(e, '#experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Contact
              </a>
            </li>
          </ul>
          <p className="footer-text">
            Get in touch
            <br />
            <a href="mailto:dodiverinwork@gmail.com">dodiverinwork@gmail.com</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
