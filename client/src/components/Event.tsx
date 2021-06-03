import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

type EventProps = {
    top: number;
    height: number;
    description: string;
    color: string;
};

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width: '100%',
        borderRadius: theme.spacing(1),
    },
    content: {
        margin: theme.spacing(1),
    },
}));

const Event = ({ top, height, description, color }: EventProps) => {
    const classes = useStyles();

    return (
        <div
            style={{
                top: top,
                height: height,
                backgroundColor: color,
            }}
            className={classes.root}
        >
            <div className={classes.content}>
                <Typography>{description}</Typography>
            </div>
        </div>
    );
};

export default Event;
