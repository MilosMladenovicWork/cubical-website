import { createStore , combineReducers} from 'redux';
import menuOpened from '../reducers/menuOpened'
import scrollFromTop from '../reducers/scrollFromTop'
import contactFormOpened from '../reducers/contactFormOpened'

export default preloadedState => {
    return createStore(combineReducers({menuOpened, scrollFromTop, contactFormOpened}), preloadedState);
  };