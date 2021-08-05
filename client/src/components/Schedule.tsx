import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Event, { Day } from '../data/Event';
import DayColumn from './DayColumn';
import addMeridiemSuffix from '../util/addMeridiemSuffix';
import theme from '../styles/theme';
import { Divider } from '@material-ui/core';

export type ScheduleProps = {
    events: Event[];
};

const hourHeight = theme.spacing(8);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        margin: theme.spacing(2),
    },
    sixCol: {
        display: 'grid',
        gap: theme.spacing(2),
        gridTemplateColumns: '5rem repeat(5, 1fr)',
    },
    header: {
        marginBottom: theme.spacing(2),
    },
    schedule: {},
    hour: {
        height: hourHeight,
    },
    timelotsColumn: {
        marginRight: theme.spacing(2),
    },
}));

const Schedule = ({ events }: ScheduleProps) => {
    const classes = useStyles();
    const days = [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday];

    const startOfDay = events.reduce((acc, event) => Math.min(event.startTime.hour, acc), 9);
    const endOfDay = events.reduce((acc, event) => Math.max(event.endTime.hour + 1, acc), 5);

    const hours = [...Array(endOfDay - startOfDay).keys()].map((hour: number) => hour + startOfDay);

    return (
        <div className={classes.root}>
            <div className={clsx(classes.sixCol, classes.header)}>
                {/* First column placeholder     */}
                <div></div>
                {days.map((day) => (
                    <Typography align="center">{Day[day]}</Typography>
                ))}
            </div>

            <div className={clsx(classes.sixCol)}>
                <div className={classes.timelotsColumn}>
                    {hours.map((hour) => (
                        <div key={hour} className={classes.hour}>
                            <Typography align="right">{addMeridiemSuffix(hour)}</Typography>
                        </div>
                    ))}
                </div>

                {days.map((day) => (
                    <DayColumn
                        day={day}
                        events={events.filter((event) => event.days.includes(day))}
                        startOfDay={startOfDay}
                        hourHeight={hourHeight}
                    />
                ))}
            </div>
        </div>
    );
};

export default Schedule;
