import userReducer from './user/user.reducer';
import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // whitelist is an array of reducers that you want to persist in the storage
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig,rootReducer)