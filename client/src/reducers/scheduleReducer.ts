import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Event, { Day } from '../data/Event';
import getRandomColor from '../util/getRandomColor';

// Define a type for the slice state
interface ScheduleState {
    events: Event[];
}

// Define the initial state using that type
const initialState: ScheduleState = {
    // TODO: initialize with empty string
    events: [
        {
            startTime: {
                hour: 9,
            },
            endTime: {
                hour: 9,
                minute: 50,
            },
            days: [Day.Monday, Day.Wednesday, Day.Friday],
            color: getRandomColor(),
            description: 'ECE 420',
        },
        {
            startTime: {
                hour: 11,
            },
            endTime: {
                hour: 11,
                minute: 50,
            },
            days: [Day.Monday, Day.Wednesday, Day.Friday],
            color: getRandomColor(),
            description: 'CMPUT 366',
        },
        {
            startTime: {
                hour: 12,
            },
            endTime: {
                hour: 12,
                minute: 50,
            },
            days: [Day.Monday, Day.Wednesday, Day.Friday],
            color: getRandomColor(),
            description: 'ECE 422   ',
        },
        {
            startTime: {
                hour: 14,
            },
            endTime: {
                hour: 14,
                minute: 50,
            },
            days: [Day.Monday, Day.Wednesday, Day.Friday],
            color: getRandomColor(),
            description: 'ECE 493',
        },
        {
            startTime: {
                hour: 9,
                minute: 20,
            },
            endTime: {
                hour: 10,
                minute: 50,
            },
            days: [Day.Tuesday, Day.Thursday],
            color: getRandomColor(),
            description: 'CMPUT 325',
        },
        {
            startTime: {
                hour: 14,
            },
            endTime: {
                hour: 16,
                minute: 50,
            },
            days: [Day.Thursday],
            color: getRandomColor(),
            description: 'ECE 420',
        },
    ],
};

export const counterSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Event>) => {
            state.events.push(action.payload);
        },
    },
});

export const { add } = counterSlice.actions;

export default counterSlice.reducer;
