import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import courseSearchReducer from './reducers/courseSearchReducer';
import scheduleReducer from './reducers/scheduleReducer';

const store = configureStore({
    reducer: {
        courseSearch: courseSearchReducer,
        schedule: scheduleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
