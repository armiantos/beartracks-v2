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
        gridTemplateColumns: 'repeat(5, 1fr)',
        height: '100%',
    },
    column: {},
}));

const Schedule = ({ events }: ScheduleProps) => {
    const classes = useStyles();
    const days = Object.keys(Day);

    return (
        <div className={classes.root}>
            {days.map((day) => (
                <DayColumn day={day} events={[]} />
            ))}
        </div>
    );
};

export default Schedule;
