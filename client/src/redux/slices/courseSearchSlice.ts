import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Course from '../../data/Course';
import searchCourse from '../thunks/searchCourseThunk';

interface CourseSearchState {
    searchResults: Course[];
}

const initialState: CourseSearchState = {
    searchResults: [],
};

export const counterSlice = createSlice({
    name: 'courseSearch',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchCourse.fulfilled, (state: CourseSearchState, action: PayloadAction<Course[]>) => {
            state.searchResults = action.payload;
        });
    },
});

export default counterSlice.reducer;
