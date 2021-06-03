import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    sidebar: {
        width: '20rem',
    },
}));

type ListItemLinkProps = {
    text: string;
    href: string;
};

const ListItemLink: React.FC<ListItemLinkProps> = (props) => {
    return (
        <ListItem button component="a" href={props.href}>
            <ListItemText>{props.text}</ListItemText>
        </ListItem>
    );
};

const Sidebar = () => {
    const classes = useStyles();

    return (
        <nav>
            <Paper square className={classes.root}>
                <List className={classes.sidebar}>
                    <ListItemLink href="/planner" text="Class planner" />
                    <ListItemLink href="#" text="Exam schedule" />
                    <Divider />
                    <ListItemLink href="#" text="Grades" />
                    <ListItemLink href="#" text="Transcript " />
                </List>
            </Paper>
        </nav>
    );
};

export default Sidebar;
