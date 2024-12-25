'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterButton = () => setIsHidden(true); // Hide cursor with fade-out
    const handleMouseLeaveButton = () => setIsHidden(false); // Show cursor with fade-in

    // Add event listeners for all buttons and links globally
    const buttons = document.querySelectorAll('button');
    const links = document.querySelectorAll('a');
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', handleMouseEnterButton);
      button.addEventListener('mouseleave', handleMouseLeaveButton);
    });

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnterButton);
      link.addEventListener('mouseleave', handleMouseLeaveButton);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', handleMouseEnterButton);
        button.removeEventListener('mouseleave', handleMouseLeaveButton);
      });

      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnterButton);
        link.removeEventListener('mouseleave', handleMouseLeaveButton);
      });

      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const smoothFollow = () => {
      setCursorStyle((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      requestAnimationFrame(smoothFollow);
    };

    smoothFollow();

    return () => cancelAnimationFrame(requestAnimationFrame(smoothFollow));
  }, [position]);

  return (
    <div className={`fixed pointer-events-none border-2 border-darkGrey w-7 h-7 rounded-full transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      style={{
        top: cursorStyle.y,
        left: cursorStyle.x,
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
