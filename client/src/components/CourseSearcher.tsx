import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import { searchCourse } from '../reducers/courseSearchReducer';
import { addCourseToSchedule } from '../reducers/scheduleReducer';
import { useAppSelector } from '../store';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: theme.spacing(4),
    },
}));

const CourseSearcher = () => {
    const classes = useStyles();

    const [search, setSearch] = useState('');
    const searchResults = useAppSelector((state) => state.courseSearch.searchResults);

    const dispatch = useDispatch();

    return (
        <Paper className={classes.root}>
            <TextField
                label="Class name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={async (e) => {
                    if (e.key === 'Enter') {
                        dispatch(searchCourse(search));
                    }
                }}
            />
            {search !== '' && (
                <List>
                    {searchResults.map((search) => (
                        <ListItem
                            button
                            onClick={(e) =>
                                dispatch(
                                    addCourseToSchedule({
                                        ...search.courseComponents[0].event,
                                        description: search.code,
                                    })
                                )
                            }
                        >
                            <ListItemText primary={search.code} secondary={search.courseComponents[0].contactName} />
                        </ListItem>
                    ))}
                </List>
            )}
        </Paper>
    );
};

export default CourseSearcher;
