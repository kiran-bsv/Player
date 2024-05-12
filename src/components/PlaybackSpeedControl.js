import React from 'react';
import { useDispatch } from 'react-redux';
import { setPlaybackSpeed } from '../actions/player';

const PlaybackSpeedControl = ({ speed }) => {
  const dispatch = useDispatch();

  const handleSpeedChange = (e) => {
    const speed = Math.round(parseFloat(e.target.value) * 4) / 4;
    dispatch(setPlaybackSpeed(speed));
  };

  return (
    <div>
      <label htmlFor="playbackSpeed"> Speed: {speed}x</label>
      <input 
        type="range" 
        min="0.5" 
        max="4" 
        step="0.25"
        value={speed} 
        onChange={handleSpeedChange}  
      />
    </div>
  );
};

export default PlaybackSpeedControl;
