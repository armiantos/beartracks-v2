import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import Course, { ComponentType } from '../data/Course';
import { Day } from '../data/Event';

async function searchCourse(className: string): Promise<Course[]> {
    const lecturers = ['Alice', 'Bob', 'Charlie'];

    return lecturers.map((lecturer) => ({
        code: 'ECE 322',
        courseComponents: [
            {
                type: ComponentType.Lecture,
                contactName: lecturer,
                event: {
                    startTime: { hour: 8 },
                    endTime: { hour: 8, minute: 50 },
                    days: [Day.Monday, Day.Wednesday, Day.Friday],
                },
            },
        ],
    }));
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: theme.spacing(4),
    },
}));

const CourseSearcher = () => {
    const classes = useStyles();

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState<Course[]>([]);

    return (
        <Paper className={classes.root}>
            <TextField
                label="Class name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={async (e) => {
                    if (e.key === 'Enter') {
                        setSearchResults(await searchCourse(search));
                    }
                }}
            />
            {search !== '' && (
                <List>
                    {searchResults.map((search) => (
                        <ListItem button>
                            <ListItemText primary={search.code} secondary={search.courseComponents} />
                        </ListItem>
                    ))}
                </List>
            )}
        </Paper>
    );
};

export default CourseSearcher;
