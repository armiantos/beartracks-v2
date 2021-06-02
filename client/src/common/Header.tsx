import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        placeItems: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        alignItems: 'center',
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="static">
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h6" className={classes.title}>
                    <Link href="/" color="inherit" underline="none">
                        Beartracks
                    </Link>
                </Typography>
                <Link href="/schedule" color="inherit" underline="none">
                    Schedule
                </Link>
            </Container>
        </AppBar>
    );
};

export default Header;
