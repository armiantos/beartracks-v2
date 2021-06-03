import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Event, { Day } from '../data/Event';
import EventComponent from './Event';

type DayProps = {
    day: Day;
    events: Event[];
    startOfDay: number;
    hourHeight: number;
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
    },
    day: {
        display: 'flex',
    },
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
            <div key={day} className={`${classes.root} ${classes.day}`}>
                <div className={classes.eventColumn}>
                    {events.map((event) => {
                        const start = event.startTime.hour + (event.startTime.minute || 0) / 60;
                        const end = event.endTime.hour + (event.endTime.minute || 0) / 60;

                        const top = (start - startOfDay) * hourHeight;
                        const height = (end - start) * hourHeight;

                        return <EventComponent top={top} height={height} description={event.description} color={event.color} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default DayColumn;
