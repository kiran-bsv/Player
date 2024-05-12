import React from 'react';
import './App.css';
import MediaPlayer from './components/MediaPlayer';
import { Provider } from 'react-redux';
import configureStore from './store';
import Input from './components/input';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Input /> 
        <MediaPlayer />
      </div>
    </Provider>
  );
}

export default App;