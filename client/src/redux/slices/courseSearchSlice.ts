import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Course from '../../data/Course';
import searchCourse from '../thunks/searchCourseThunk';

interface CourseSearchState {
    searchResults: Course[];
    searchTerm: string;
}

const initialState: CourseSearchState = {
    searchResults: [],
    searchTerm: '',
};

export const counterSlice = createSlice({
    name: 'courseSearch',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(searchCourse.fulfilled, (state: CourseSearchState, action: PayloadAction<Course[]>) => {
            state.searchResults = action.payload;
        });
    },
});

export const { setSearchTerm } = counterSlice.actions;

export default counterSlice.reducer;
