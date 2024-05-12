import React, { useEffect } from 'react';

const KeyboardEventHandler = ({ onKeyPress }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      onKeyPress(event.key);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onKeyPress]);

  return null;
};

export default KeyboardEventHandler;
