import React from 'react';
import { useDispatch } from 'react-redux';
import { setMediaCurrentTime, setMediaDuration } from '../actions/player'; 

const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const ProgressControl = ({ currentTime, duration }) => {
    const dispatch = useDispatch();

    const handleProgressChange = (e) => {
      const time = parseFloat(e.target.value);
      dispatch(setMediaCurrentTime(time));
    };
    

  return (
    <div>
      <label htmlFor="progress">Progress: {formatTime(currentTime)} / {formatTime(duration)}</label>
      <input 
        id="progress"
        type="range" 
        min="0" 
        max={duration} 
        step="1"
        value={currentTime} 
        onChange={handleProgressChange}  
      />
    </div>
  );
};

export default ProgressControl;
