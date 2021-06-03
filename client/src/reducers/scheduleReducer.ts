import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Event, { Day } from '../data/Event';
import getRandomColor from '../util/getRandomColor';
import toHours from '../util/toHours';

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
            const event = action.payload;

            for (const day of action.payload.days) {
                const scheduledEvents = state.events.filter((event) => event.days.includes(day));
                for (const scheduledEvent of scheduledEvents) {
                    const scheduledEventStartTime = toHours(scheduledEvent.startTime);
                    const scheduledEventEndTime = toHours(scheduledEvent.endTime);
                    const eventStartTime = toHours(event.startTime);
                    const eventEndTime = toHours(event.endTime);

                    if (
                        (scheduledEventStartTime <= eventStartTime && eventStartTime <= scheduledEventEndTime) ||
                        (eventStartTime <= scheduledEventStartTime && scheduledEventStartTime <= eventEndTime)
                    ) {
                        alert('Schedule conflict!');
                        return;
                    }
                }
            }

            state.events.push(event);
        },
    },
});

export const { add } = counterSlice.actions;

export default counterSlice.reducer;
