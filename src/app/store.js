import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import htmlReducer from '../features/html/htmlSlice'
import cssReducer from '../features/css/cssSlice'

export const store = configureStore({
  reducer: {
    html: htmlReducer,
    css: cssReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
});