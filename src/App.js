import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './App.css';
import Header from './components/Header';
import Cursor from './components/Cursor';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';

// Регистрируем плагин ScrollTo с GSAP
gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  useEffect(() => {
    // Создаем плавную прокрутку страницы
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); // Отменяем стандартное поведение прокрутки
      const scrollAmount = event.deltaY; // Получаем направление прокрутки

      gsap.to(window, {
        scrollTo: window.scrollY + scrollAmount, // Плавно прокручиваем на величину deltaY
        duration: 0.1, // Длительность анимации (чем больше значение, тем медленнее прокрутка)
        ease: 'power4.out', // Плавная анимация
      });
    };

    // Добавляем обработчик прокрутки на колесо мыши
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Очистка после размонтирования компонента
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      {/* Используем компонент кастомного курсора */}
      <Cursor />

      {/* Контент страницы */}
      <Header />
      <Main />
      <AboutMe />
      <TechnicalSkills />
      <Projects />
      <WorkExperience />
      <Footer />
    </>
  );
};

export default App;
