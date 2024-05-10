import { createStore, combineReducers } from 'redux';
import playerReducer from './reducers/player';

const rootReducer = combineReducers({
  player: playerReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
