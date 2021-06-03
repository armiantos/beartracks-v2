import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

type Class = {
    courseName: string;
};

async function searchClass(className: string): Promise<Class[]> {
    const classNames = ['ECE 322', 'ECE 340', 'ECE 420'];

    return classNames.map((className) => ({
        courseName: className,
    }));
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: theme.spacing(4),
    },
}));

const ClassSearcher = () => {
    const classes = useStyles();

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState<Class[]>([]);

    return (
        <Paper className={classes.root}>
            <TextField
                label="Class name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={async (e) => {
                    if (e.key === 'Enter') {
                        setSearchResults(await searchClass(search));
                    }
                }}
            />
            {search !== '' && (
                <List>
                    {searchResults.map((search) => (
                        <ListItem button>
                            <ListItemText primary={search.courseName} />
                        </ListItem>
                    ))}
                </List>
            )}
        </Paper>
    );
};

export default ClassSearcher;
