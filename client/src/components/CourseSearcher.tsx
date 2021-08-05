import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import searchCourse from '../redux/thunks/searchCourseThunk';
import { addCourseToSchedule } from '../redux/slices/scheduleSlice';
import { useAppSelector } from '../store';
import { setSearchTerm } from '../redux/slices/courseSearchSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: theme.spacing(4),
    },
    search: {
        width: '100%',
    },
}));

const CourseSearcher: React.FC = () => {
    const classes = useStyles();

    const { searchTerm, searchResults } = useAppSelector((state) => state.courseSearch);

    const dispatch = useDispatch();

    return (
        <Paper className={classes.root}>
            <TextField
                label="Class name"
                className={classes.search}
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                onKeyDown={async (e) => {
                    if (e.key === 'Enter') {
                        dispatch(searchCourse(searchTerm));
                    }
                }}
            />

            <List>
                {searchResults.map((search) => (
                    <ListItem
                        key={search.code}
                        button
                        onClick={(_e) =>
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
        </Paper>
    );
};

export default CourseSearcher;
