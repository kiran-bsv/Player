export const setMedia = (url, mediaType) => {
    return { type: 'SET_MEDIA', url, mediaType };
  };
  
  export const playMedia = () => {
    return { type: 'PLAY_MEDIA' };
  };
  
  export const pauseMedia = () => {
    return { type: 'PAUSE_MEDIA' };
  };
  
  export const setVolume = (volume) => {
    return { type: 'SET_VOLUME', volume };
  };
  
  export const setPlaybackSpeed = (playbackSpeed) => {
    return { type: 'SET_PLAYBACK_SPEED', playbackSpeed };
  };
  
  export const setMediaDuration = (duration) => {
    return { type: 'SET_MEDIA_DURATION', duration };
  };
  
  export const setMediaCurrentTime = (currentTime) => {
    return { type: 'SET_MEDIA_CURRENT_TIME', currentTime };
  };