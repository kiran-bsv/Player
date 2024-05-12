import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMedia, playMedia, pauseMedia, 
  previousMedia, nextMedia, 
  setVolume, setPlaybackSpeed, setMediaDuration, setMediaCurrentTime, muteMedia, toggleFullScreen, minimizePlayer } from '../actions/player';
import ReactPlayer from 'react-player';
import MediaControlButtons from './MediaControlButtons';
import VolumeControl from './VolumeControl';
import PlaybackSpeedControl from './PlaybackSpeedControl';
import ProgressControl from './ProgressControl';
import KeyboardEventHandler from './KeyboardEventHandler';

const MediaPlayer = () => {
  const dispatch = useDispatch();
  const media = useSelector((state) => state.player.media);

  const [currentTime, setCurrentTime] = useState(media.currentTime || 0);
  const [duration, setDuration] = useState(media.duration || 0);

  useEffect(() => {
    dispatch(setMedia(media.url, media.type));
  }, [media.url, media.type]);

  useEffect(() => {
    setCurrentTime(media.currentTime);
  }, [media.currentTime]);

  useEffect(() => {
    setDuration(media.duration);
  }, [media.duration]);

  useEffect(() => {
    setVolume(media.volume);
  }, [media.volume]);

  const handlePlayPause = () => {
    if (media.playing) {
      dispatch(pauseMedia());
    } else {
      dispatch(playMedia());
    }
  };

  const handlePrevious = () => {
    dispatch(previousMedia());
  };

  const handleNext = () => {
    dispatch(nextMedia());
  };

  const handleVolumeChange = (e) => {
    dispatch(setVolume(parseFloat(e.target.value)));
  };

  const handlePlaybackSpeedChange = (e) => {
    dispatch(setPlaybackSpeed(parseFloat(e.target.value)));
  };

  const handleProgress = (state) => {
    if (!media.duration) {
      dispatch(setMediaDuration(state.loadedSeconds));
    }
    dispatch(setMediaCurrentTime(state.playedSeconds));
  };

  const handleDuration = (duration) => {
    dispatch(setMediaDuration(duration));
  };


  const handleKeyPress = (event) => {
    switch (event.key) {
      case ' ':
        handlePlayPause();
        break;
      case 'ArrowUp':
        dispatch(setVolume(Math.min(media.volume + 0.05, 1))); // Increase volume
        break;
      case 'ArrowDown':
        dispatch(setVolume(Math.max(media.volume - 0.05, 0))); // Decrease volume
        break;
      case 'ArrowRight':
        dispatch(setMediaCurrentTime(Math.min(media.currentTime + 10, media.duration))); // 10-second forward
        break;
      case 'ArrowLeft':
        dispatch(setMediaCurrentTime(Math.max(media.currentTime - 10, 0))); // 10-second backward
        break;
      case 'm':
      case 'M':
        dispatch(muteMedia(!media.muted)); // Toggle mute
        break;
      case 'f':
      case 'F':
        dispatch(toggleFullScreen()); // Toggle fullscreen
        break;
      case 'Escape':
        dispatch(toggleFullScreen(false)); // Exit fullscreen
        break;
      case 'w':
      case 'W':
        dispatch(minimizePlayer()); // Minimize player
        break;
      case 'n':
      case 'N':
        dispatch(nextMedia()); // Play next media
        break;
      case 'p':
      case 'P':
        dispatch(previousMedia()); // Play previous media
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [dispatch, media]); 
  
  return (
    <div>
      <ReactPlayer
        url={media.url}
        playing={media.playing}
        volume={media.volume}
        playbackRate={media.playbackSpeed}
        width="100%"
        height="500px"
        onProgress={handleProgress}
        onDuration={handleDuration}
        seekTo={media.currentTime}
      />
      <MediaControlButtons
        onPlayPause={handlePlayPause}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      <VolumeControl
        volume={media.volume}
        onChange={handleVolumeChange}
      />
      <PlaybackSpeedControl
        speed={media.playbackSpeed}
        onChange={handlePlaybackSpeedChange}
      />
      <ProgressControl
        currentTime={currentTime}
        duration={duration}
      />
      <progress value={currentTime} max={duration}></progress>
      <KeyboardEventHandler
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default MediaPlayer;
