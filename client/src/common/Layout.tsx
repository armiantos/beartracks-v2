import React, { PropsWithChildren, ReactNode } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Header from './Header';
import theme from '../styles/theme';
import Sidebar from './Sidebar';

const useStyles = makeStyles(() => ({
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
    content: {
        width: '100%',
        flexGrow: 1,
    },
}));

type LayoutProps = { children?: ReactNode };

const Layout: React.FC<LayoutProps> = (props: PropsWithChildren<LayoutProps>) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                <Header />
                <div className={classes.app}>
                    <Sidebar />
                    <main className={classes.content}>{props.children}</main>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
