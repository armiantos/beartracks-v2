import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Course from '../data/Course';

// Define a type for the slice state
interface CourseSearchState {
    searchResults: Course[];
}

// Define the initial state using that type
const initialState: CourseSearchState = {
    searchResults: [],
};

export const counterSlice = createSlice({
    name: 'courseSearch',
    initialState,
    reducers: {
        searchCourse: (state, action: PayloadAction<string>) => {
            // TODO: call server and possibly integrate with react-redux
        },
    },
});

export const { searchCourse } = counterSlice.actions;

export default counterSlice.reducer;
