import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Event, { Day } from '../data/Event';
import DayColumn from './DayColumn';
import addMeridiemSuffix from '../util/addMeridiemSuffix';
import theme from '../styles/theme';

export type ScheduleProps = {
    events: Event[];
};

const hourHeight = theme.spacing(8);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    week: {
        display: 'grid',
        gap: theme.spacing(2),
        gridTemplateColumns: '5rem repeat(5, 1fr)',
        height: '100%',
    },
    header: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
    },
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

    const startOfDay = 8;
    const endOfDay = 22;

    const hours = [...Array(endOfDay - startOfDay).keys()].map((hour: number) => hour + startOfDay);

    return (
        <div className={classes.root}>
            <div className={classes.week}>
                <div></div>
                {days.map((day) => (
                    <Typography align="center" className={classes.header}>
                        {Day[day]}
                    </Typography>
                ))}
            </div>
            <div className={classes.week}>
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
