import React from 'react';
import ScheduleComponent from '../components/Schedule';

import Event, { Day } from '../data/Event';
import getRandomColor from '../util/getRandomColor';

const Schedule = () => {
    const events: Event[] = [
        {
            startTime: {
                hour: 8,
            },
            endTime: {
                hour: 8,
                minute: 50,
            },
            days: [Day.Monday, Day.Wednesday, Day.Friday],
            color: getRandomColor(),
            description: 'ECE 240',
        },
        {
            startTime: {
                hour: 9,
            },
            endTime: {
                hour: 10,
                minute: 20,
            },
            days: [Day.Tuesday, Day.Thursday],
            color: getRandomColor(),
            description: 'ECE 212',
        },
    ];

    return <ScheduleComponent events={events} />;
};

export default Schedule;
