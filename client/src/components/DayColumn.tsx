import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

type DayProps = {
    day: string;
    events: Event[];
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    header: {
        marginBottom: theme.spacing(4),
    },
    hour: {
        height: theme.spacing(8),
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

    return (
        <div key={day} className={classes.root}>
            <Typography align="center" className={classes.header}>
                {day}
            </Typography>
            {hours.map((hour) => (
                <div key={hour} className={classes.hour}>
                    {addMeridiemSuffix(hour)}
                </div>
            ))}
        </div>
    );
};

export default DayColumn;
