// Cursor.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null); // Ссылка на кастомный курсор (черную точку)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Плавное следование за курсором с использованием GSAP
      gsap.to(cursorRef.current, {
        x: clientX - cursorRef.current.offsetWidth / 2, // Сдвигаем точку на курсор
        y: clientY - cursorRef.current.offsetHeight / 2,
        duration: 0.3, // Задержка в анимации
        ease: 'power3.out', // Плавное движение
      });
    };

    // Добавляем обработчик для отслеживания движения мыши
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Убираем обработчик при размонтировании компонента
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>; // Рендер кастомного курсора
};

export default Cursor;
