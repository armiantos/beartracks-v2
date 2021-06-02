import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Header from './Header';
import theme from '../styles/theme';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        maxWidth: '100%',
    },
}));

const Layout: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <div className={classes.root}>{children}</div>
        </ThemeProvider>
    );
};

export default Layout;
