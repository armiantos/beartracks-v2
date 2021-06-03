import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CourseSearcher from '../components/CourseSearcher';
import ScheduleComponent from '../components/Schedule';
import { useAppSelector } from '../store';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
    },
}));

const Planner = () => {
    const classes = useStyles();
    const events = useAppSelector((state) => state.schedule.events);

    return (
        <div className={classes.root}>
            <CourseSearcher />
            <ScheduleComponent events={events} />
        </div>
    );
};

export default Planner;
