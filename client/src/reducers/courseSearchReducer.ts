import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import Course, { ComponentType } from '../data/Course';
import { Day } from '../data/Event';

interface CourseSearchState {
    searchResults: Course[];
}

const initialState: CourseSearchState = {
    searchResults: [],
};

export const searchCourse = createAsyncThunk('searchCourse', async (course: string, _thunkAPI) => {
    // TODO: Call server
    const courses: Course[] = [
        {
            code: course,
            courseComponents: [
                {
                    contactName: 'Bob',
                    event: {
                        startTime: {
                            hour: 8,
                        },
                        endTime: {
                            hour: 8,
                            minute: 50,
                        },
                        days: [Day.Monday],
                    },
                    type: ComponentType.Lecture,
                },
            ],
        },
    ];
    return courses;
});

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
