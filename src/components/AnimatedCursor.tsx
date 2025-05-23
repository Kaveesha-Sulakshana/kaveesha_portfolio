import React, { useEffect, useState } from 'react';
export const AnimatedCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
      setHidden(false);
    };
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleLinkHoverOn = () => setLinkHovered(true);
    const handleLinkHoverOff = () => setLinkHovered(false);
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', updatePosition);
    document.addEventListener('mouseleave', () => setHidden(true));
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    const addHoverListeners = () => {
      const allLinks = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      allLinks.forEach(el => {
        el.addEventListener('mouseenter', handleLinkHoverOn);
        el.addEventListener('mouseleave', handleLinkHoverOff);
      });
    };
    // Add listeners on mount and when DOM might have changed
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', updatePosition);
      document.removeEventListener('mouseleave', () => setHidden(true));
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      const allLinks = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      allLinks.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverOn);
        el.removeEventListener('mouseleave', handleLinkHoverOff);
      });
      observer.disconnect();
    };
  }, []);
  const cursorSize = clicked ? 12 : linkHovered ? 30 : 20;
  const cursorOpacity = hidden ? 0 : 1;
  return <>
      {/* Main cursor */}
      <div className="fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-300 ease-out" style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      width: `${cursorSize}px`,
      height: `${cursorSize}px`,
      backgroundColor: '#6EC6B0',
      transform: 'translate(-50%, -50%)',
      opacity: cursorOpacity
    }} />
      {/* Trailing cursor */}
      <div className="fixed pointer-events-none z-40 rounded-full mix-blend-difference transition-all duration-500 ease-out" style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      width: `${cursorSize * 2}px`,
      height: `${cursorSize * 2}px`,
      border: '1px solid #6EC6B0',
      transform: 'translate(-50%, -50%)',
      opacity: cursorOpacity * 0.5
    }} />
    </>;
};