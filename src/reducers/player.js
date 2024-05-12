const initialState = {
    mediaFiles: [
      'https://www.youtube.com/watch?v=k3g_WjLCsXM&ab_channel=T-Series',
      'https://youtu.be/ezlbjhHj9yI?si=Gt2PmkDIhP_RWVTc',
      'https://www.youtube.com/watch?v=VHoT4N43jK8&ab_channel=StromaeVEVO',
      'https://www.youtube.com/watch?v=eEjo3JPIfUE&ab_channel=CreativeCatProductions',
      'https://soundcloud.com/user655549707/sets/indian-songs',
    ],
    media: {
      url: 'https://youtu.be/ezlbjhHj9yI?si=Gt2PmkDIhP_RWVTc',
      type: 'auto', // auto, audio, video
      playing: false,
      volume: 0.5,
      playbackSpeed: 1,
      duration: 0,
      currentTime: 10,
      fullScreen: false,
      minimized: false,
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

      case 'PREVIOUS_MEDIA':
        const previousIndex = state.currentMediaIndex > 0 ? state.currentMediaIndex - 1 : state.mediaFiles.length - 1;
        return {
          ...state,
          media: {
            ...state.media,
            url: state.mediaFiles[previousIndex],
            playing: true,
          },
          currentMediaIndex: previousIndex,
        };

      case 'NEXT_MEDIA':
        const nextIndex = state.currentMediaIndex < state.mediaFiles.length - 1 ? state.currentMediaIndex + 1 : 0;
        return {
          ...state,
          media: {
            ...state.media,
            url: state.mediaFiles[nextIndex],
            playing: true,
          },
          currentMediaIndex: nextIndex,
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

      case 'MUTE_MEDIA':
        return {
          ...state,
          media: {
            ...state.media,
            volume: action.isMuted ? 0 : 0.5,
          },
        };
      
      case 'TOGGLE_FULL_SCREEN':
        return {
          ...state,
          media: {
            ...state.media,
            fullScreen: action.isFullScreen,
          },
        };

      case 'MINIMIZE_PLAYER':
        return {
          ...state,
          media: {
            ...state.media,
            minimized: !state.media.minimized,
          },
        };

      default:
        return state;
    }
  };
  
  export default playerReducer;