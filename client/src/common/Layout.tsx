import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Header from './Header';
import theme from '../styles/theme';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    app: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
    },
}));

const Layout: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                <Header />
                <div className={classes.app}>
                    <Sidebar />
                    <main>{children}</main>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
