import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Регистрируем GSAP плагин ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  // Функция для плавной прокрутки
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки

    // Используем GSAP для плавной прокрутки
    gsap.to(window, {
      duration: 1, // Длительность анимации в секундах
      scrollTo: { y: targetId, offsetY: 50 }, // Прокрутка до элемента с небольшим отступом сверху
      ease: 'power2.inOut', // Тип easing
    });
  };

  return (
    <footer id="contact" style={styles.footer}>
      {/* Секция с контактами (слева) */}
      <div style={styles.sectionLeft}>
        <h2 style={styles.heading}>Contacts</h2>
        <ul style={styles.links}>
          <li>
            <a
              href="https://github.com/makarenkoooooo"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:dodiverinwork@gmail.com" style={styles.link}>
              Email
            </a>
          </li>
          <li>
            <a
              href="https://t.me/makarenko99"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>

      {/* Секция с меню (справа) */}
      <div style={styles.sectionRight}>
        <h2 style={styles.heading}>Menu</h2>
        <ul style={styles.links}>
          <li>
            <a
              href="#aboutMe"
              onClick={(e) => handleSmoothScroll(e, '#aboutMe')}
              style={styles.link}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, '#skills')}
              style={styles.link}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              style={styles.link}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleSmoothScroll(e, '#experience')}
              style={styles.link}
            >
              Experience
            </a>
          </li>
        </ul>
      </div>

      {/* Секция с копирайтом (по центру внизу) */}
      <div style={styles.copyright}>
        <p>© 2025 Makaronka</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000', // Черный фон
    color: '#fff', // Белый текст
    display: 'flex',
    flexDirection: 'column', // Вертикальная компоновка
    justifyContent: 'space-between', // Разделение по вертикали
    alignItems: 'center',
    padding: '40px',
  },
  sectionLeft: {
    flex: 1,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingLeft: '40px',
  },
  sectionRight: {
    flex: 1,
    textAlign: 'right',
    alignSelf: 'flex-end',
    paddingRight: '40px',
  },
  heading: {
    fontSize: '36px', // Увеличенный размер заголовка
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  links: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px', // Увеличенный размер текста ссылок
    margin: '15px 0',
    display: 'block',
    transition: 'color 0.3s ease', // Плавное изменение цвета
  },
  linkHover: {
    color: '#aaa', // Серый цвет при наведении
  },
  copyright: {
    marginTop: 'auto', // Расположение снизу
    textAlign: 'center',
    fontSize: '16px',
    color: '#aaa', // Слегка сероватый текст
    paddingTop: '20px',
  },
};

export default Footer;
