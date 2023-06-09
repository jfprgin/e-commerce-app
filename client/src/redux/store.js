import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const stripe = require('stripe')('sk_test_51NCVAZJ6EHePnkkvseMnja5g38PcfbrQWFVxwz9e7mHx9A5yD8i2zxqi35DkBl4bQt0Mp5egE2B9sWpdc2ud1HVQ00Xl3plDyb');

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)