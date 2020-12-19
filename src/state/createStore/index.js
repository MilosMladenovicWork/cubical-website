import { createStore , combineReducers} from 'redux';
import menuOpened from '../reducers/menuOpened'
import scrollFromTop from '../reducers/scrollFromTop'
import contactFormOpened from '../reducers/contactFormOpened'
import pageLoaded from '../reducers/pageLoaded'
import pageLoadedMinimal from '../reducers/pageLoadedMinimal'

export default preloadedState => {
    return createStore(combineReducers({menuOpened, scrollFromTop, contactFormOpened, pageLoaded, pageLoadedMinimal}), preloadedState);
  };