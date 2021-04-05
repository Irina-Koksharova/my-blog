import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
//   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import authSlice from './auth/auth-slice';
import postsSlice from './posts/posts-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

const store = configureStore({
  reducer: {
    // posts: persistReducer(authPersistConfig, authSlice.reducer),
    posts: postsSlice.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };