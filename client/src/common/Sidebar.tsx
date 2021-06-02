import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    sidebar: {
        width: '20rem',
    },
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <nav>
            <Paper square className={classes.root}>
                <List className={classes.sidebar}>
                    <ListItem button>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Schedule</ListItemText>
                    </ListItem>
                </List>
            </Paper>
        </nav>
    );
};

export default Sidebar;
