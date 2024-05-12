import React from 'react';
import { useDispatch } from 'react-redux';
import { setVolume } from '../actions/player'; // make sure to import the action creator

const VolumeControl = ({ volume }) => {
  const displayedVolume = volume * 100;
  const dispatch = useDispatch();

  const handleVolumeChange = (e) => {
    const volume = parseFloat(e.target.value) / 100;
    dispatch(setVolume(volume));
  };

  return (
    <div>
      <label htmlFor="volume">Volume: {Math.round(displayedVolume)}</label>
      <input 
        type="range" 
        min="0" 
        max="100" 
        step="1"
        value={displayedVolume} 
        onChange={handleVolumeChange}  
      />
    </div>
  );
};

export default VolumeControl;
