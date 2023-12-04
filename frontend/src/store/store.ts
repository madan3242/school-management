import { configureStore } from '@reduxjs/toolkit'
import { studentsReducer } from './students/students'
import {thunk} from 'redux-thunk';
import { teachersReducer } from './teachers/teachers';

const logger = (store) => (next) => (action) => {
//   console.log("Action:", action.type, action.payload);
  return next(action);
};

export const store =  configureStore({
  reducer: {
    students: studentsReducer,
    teachers: teachersReducer
  },
  middleware: [logger, thunk]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;