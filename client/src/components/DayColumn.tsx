import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Event, { Day } from '../data/Event';
import EventComponent from './Event';
import theme from '../styles/theme';

type DayProps = {
    day: Day;
    events: Event[];
};

const hourHeight = theme.spacing(8);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
    },
    header: {
        marginBottom: theme.spacing(4),
    },
    day: {
        display: 'flex',
    },
    hour: {
        height: hourHeight,
    },
    timelotsColumn: {
        marginRight: theme.spacing(2),
    },
    eventColumn: {
        flexGrow: 1,
        position: 'relative',
    },
}));

function addMeridiemSuffix(hour: number) {
    return hour / 12 < 1 ? `${hour} AM` : hour === 12 ? `${hour} PM ` : `${hour % 12} PM`;
}

const DayColumn = ({ day, events }: DayProps) => {
    const classes = useStyles();

    const startOfDay = 8;
    const endOfDay = 22;

    const hours = [...Array(endOfDay - startOfDay).keys()].map((hour: number) => hour + startOfDay);

    console.debug(`day: ${Day[day]} has events: ${events}`);

    return (
        <div key={day} className={classes.root}>
            <Typography align="center" className={classes.header}>
                {Day[day]}
            </Typography>

            <div key={day} className={`${classes.root} ${classes.day}`}>
                <div className={classes.timelotsColumn}>
                    {hours.map((hour) => (
                        <div key={hour} className={classes.hour}>
                            <Typography align="right">{addMeridiemSuffix(hour)}</Typography>
                        </div>
                    ))}
                </div>
                <div className={classes.eventColumn}>
                    {events.map((event) => {
                        const top = event.startTime.hour + (event.startTime.minute || 0) / 60 - startOfDay;
                        const height =
                            event.endTime.hour +
                            (event.endTime.minute || 0) / 60 -
                            (event.startTime.hour + (event.startTime.minute || 0) / 60);
                        return (
                            <EventComponent
                                top={top}
                                height={height}
                                description={event.description}
                                color={event.color}
                                hourHeight={hourHeight}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DayColumn;
