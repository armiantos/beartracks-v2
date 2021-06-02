import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Header from './Header';
import theme from '../styles/theme';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        maxWidth: '100%',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        marginLeft: drawerWidth,
    },
}));

const Layout: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <nav className={classes.drawer}>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <List>
                        <ListItem button>
                            <ListItemText>Schedule</ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </nav>
            <main className={classes.content}>
                <Header />
                <div className={classes.root}>{children}</div>
            </main>
        </ThemeProvider>
    );
};

export default Layout;
