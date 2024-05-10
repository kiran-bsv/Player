const initialState = {
    media: {
      url: 'https://youtu.be/ezlbjhHj9yI?si=Gt2PmkDIhP_RWVTc',
      type: 'auto', // auto, audio, video
      playing: false,
      volume: 0.5,
      playbackSpeed: 1,
      duration: 0,
      currentTime: 0,
    },
  };
  
  const playerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MEDIA':
        return {
          ...state,
          media: {
            ...state.media,
            url: action.url,
            type: action.mediaType,
            playing: false,
            duration: 0,
            currentTime: 0,
          },
        };
      case 'PLAY_MEDIA':
        return {
          ...state,
          media: {
            ...state.media,
            playing: true,
          },
        };
      case 'PAUSE_MEDIA':
        return {
          ...state,
          media: {
            ...state.media,
            playing: false,
          },
        };
      case 'SET_VOLUME':
        return {
          ...state,
          media: {
            ...state.media,
            volume: action.volume,
          },
        };
      case 'SET_PLAYBACK_SPEED':
        return {
          ...state,
          media: {
            ...state.media,
            playbackSpeed: action.playbackSpeed,
          },
        };
      case 'SET_MEDIA_DURATION':
        return {
          ...state,
          media: {
            ...state.media,
            duration: action.duration,
          },
        };
      case 'SET_MEDIA_CURRENT_TIME':
        return {
          ...state,
          media: {
            ...state.media,
            currentTime: action.currentTime,
          },
        };
      default:
        return state;
    }
  };
  
  export default playerReducer;