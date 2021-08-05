import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        placeItems: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: theme.spacing(3),
        padding: theme.spacing(2),
        alignItems: 'center',
        width: '100%',
    },
    title: {
        flexGrow: 1,
    },
}));

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="static">
            <div className={classes.container}>
                <Typography variant="h6" className={classes.title}>
                    Beartracks
                </Typography>
            </div>
        </AppBar>
    );
};

export default Header;
