import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist'

const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//it is a persisted version of our store
export const persistor = persistStore(store);
export default { store, persistor };