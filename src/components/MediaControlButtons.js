import React from 'react';

const MediaControlButtons = ({ onPlayPause, onPrevious, onNext }) => {
  return (
    <div>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onPlayPause}>Play/Pause</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default MediaControlButtons;
