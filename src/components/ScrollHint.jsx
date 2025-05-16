// src/components/ScrollHint.jsx
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import scrollAnim from '../assets/scroll.json'; // Path to Lottie file
import './ScrollHint.css';

const ScrollHint = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className="scroll-hint-lottie">
      <Lottie animationData={scrollAnim} loop={false} />
      <p className="scroll-message">Scroll to Explore</p>
    </div>
  ) : null;
};

export default ScrollHint;
