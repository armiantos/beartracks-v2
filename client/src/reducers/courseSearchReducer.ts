import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Course from '../data/Course';

// Define a type for the slice state
interface CourseSearchState {
    search: string;
    searchResults: Course[];
}

// Define the initial state using that type
const initialState: CourseSearchState = {
    search: '',
    searchResults: [],
};

export const counterSlice = createSlice({
    name: 'courseSearch',
    initialState,
    reducers: {
        search: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export const { search } = counterSlice.actions;

export default counterSlice.reducer;
