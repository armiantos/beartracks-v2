import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Event, { Day } from '../data/Event';
import DayColumn from './DayColumn';

export type ScheduleProps = {
    events: Event[];
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gap: theme.spacing(2),
        gridTemplateColumns: 'repeat(5, 1fr)',
        height: '100%',
    },
    column: {},
}));

const Schedule = ({ events }: ScheduleProps) => {
    const classes = useStyles();
    const days = [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday];

    return (
        <div className={classes.root}>
            {days.map((day) => (
                <DayColumn day={day} events={events.filter((event) => event.days.includes(day))} />
            ))}
        </div>
    );
};

export default Schedule;
