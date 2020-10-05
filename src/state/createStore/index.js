import { createStore , combineReducers} from 'redux';
import menuOpened from '../reducers/menuOpened'
import scrollFromTop from '../reducers/scrollFromTop'

export default preloadedState => {
    return createStore(combineReducers({menuOpened, scrollFromTop}), preloadedState);
  };