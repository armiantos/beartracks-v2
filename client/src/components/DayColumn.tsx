import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import EventType, { Day } from '../data/Event';
import Event from './Event';

type DayProps = {
    day: Day;
    events: EventType[];
    startOfDay: number;
    hourHeight: number;
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        display: 'flex',
    },
    day: {},
    timelotsColumn: {
        marginRight: theme.spacing(2),
    },
    eventColumn: {
        flexGrow: 1,
        position: 'relative',
    },
}));

const DayColumn = ({ day, events, startOfDay, hourHeight }: DayProps) => {
    const classes = useStyles();

    return (
        <div key={day} className={classes.root}>
            <div className={classes.eventColumn}>
                {events.map((event) => {
                    const start = event.startTime.hour + (event.startTime.minute || 0) / 60;
                    const end = event.endTime.hour + (event.endTime.minute || 0) / 60;

                    const top = (start - startOfDay) * hourHeight;
                    const height = (end - start) * hourHeight;

                    return <Event top={top} height={height} description={event.description ?? ''} color={event.color ?? grey[400]} />;
                })}
            </div>
        </div>
    );
};

export default DayColumn;
