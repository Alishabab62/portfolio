import React, { useState, useEffect } from 'react';

const Title = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 150);
  
      return () => clearTimeout(timeout);
    }
    else{
        setCurrentIndex(0)
        setDisplayText('');
    }
  }, [currentIndex, text]);

  return <div className='text-5xl font-bold md:h-10 h-40 text-white'>{displayText}</div>;
};

export default Title;