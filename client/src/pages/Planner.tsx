import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CourseSearcher from '../components/CourseSearcher';
import ScheduleComponent from '../components/Schedule';
import Event, { Day } from '../data/Event';
import getRandomColor from '../util/getRandomColor';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
    },
}));

const Planner = () => {
    const classes = useStyles();

    const events: Event[] = [
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
    ];

    return (
        <div className={classes.root}>
            <CourseSearcher />
            <ScheduleComponent events={events} />
        </div>
    );
};

export default Planner;
