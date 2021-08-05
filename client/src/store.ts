import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

import courseSearchReducer from './redux/slices/courseSearchSlice';
import scheduleReducer from './redux/slices/scheduleSlice';

const store = configureStore({
    reducer: {
        courseSearch: courseSearchReducer,
        schedule: scheduleReducer,
    },
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
