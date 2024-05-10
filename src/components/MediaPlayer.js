import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMedia, playMedia, pauseMedia, setVolume, setPlaybackSpeed, setMediaDuration, setMediaCurrentTime } from '../actions/player';
import ReactPlayer from 'react-player';


const MediaPlayer = () => {
  const dispatch = useDispatch();
  const media = useSelector((state) => state.player.media);

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    dispatch(setMedia(media.url, media.type));
  }, [media.url, media.type]);

  const handlePlayPause = () => {
    if (media.playing) {
      dispatch(pauseMedia());
    } else {
      dispatch(playMedia());
    }
  };

  const handleVolumeChange = (e) => {
    dispatch(setVolume(parseFloat(e.target.value)));
  };

  const handlePlaybackSpeedChange = (e) => {
    dispatch(setPlaybackSpeed(parseFloat(e.target.value)));
  };

  const handleProgress = (state) => {
    if (state.playedSeconds !== media.currentTime) {
      dispatch(setMediaCurrentTime(state.playedSeconds));
    }
    if (state.playedSeconds === state.loadedSeconds && media.duration === 0) {
      dispatch(setMediaDuration(state.loadedSeconds));
    }
  };

  const handleDuration = (duration) => {
    dispatch(setMediaDuration(duration));
  };
  

  return (
    <div>
      <ReactPlayer
        url={media.url}
        playing={media.playing}
        volume={media.volume}
        playbackRate={media.playbackSpeed}
        width="100%"
        height="100%"
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div>
        <button onClick={handlePlayPause}>{media.playing ? 'Pause' : 'Play'}</button>
        <input type="range" value={media.volume} onChange={handleVolumeChange} />
        <input type="range" value={media.playbackSpeed} onChange={handlePlaybackSpeedChange} />
        <div>{media.duration ? `${media.currentTime}/${media.duration}` : '0/0'}</div>
      </div>
    </div>
  );
};

export default MediaPlayer;