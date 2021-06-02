import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        maxWidth: '100%',
    },
}));

const Layout: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Header />
            <div className={classes.root}>{children}</div>
        </>
    );
};

export default Layout;
