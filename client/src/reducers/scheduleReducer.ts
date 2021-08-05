import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Event, { Day } from '../data/Event';
import getRandomColor from '../util/getRandomColor';
import toHours from '../util/toHours';

interface ScheduleState {
    events: Event[];
}

const initialState: ScheduleState = {
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
            description: 'ECE 422',
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
        addCourseToSchedule: (state, action: PayloadAction<Event>) => {
            const course = action.payload;

            for (const day of action.payload.days) {
                const addedCourses = state.events.filter((event) => event.days.includes(day));
                for (const addedCourse of addedCourses) {
                    const addedCourseStartTime = toHours(addedCourse.startTime);
                    const addedCourseEndTime = toHours(addedCourse.endTime);
                    const courseStartTime = toHours(course.startTime);
                    const courseEndTime = toHours(course.endTime);

                    if (
                        (addedCourseStartTime <= courseStartTime && courseStartTime <= addedCourseEndTime) ||
                        (courseStartTime <= addedCourseStartTime && addedCourseStartTime <= courseEndTime)
                    ) {
                        alert('Schedule conflict!');
                        return;
                    }
                }
            }

            course.color = getRandomColor();

            state.events.push(course);
        },
    },
});

export const { addCourseToSchedule } = counterSlice.actions;

export default counterSlice.reducer;
