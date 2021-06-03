import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#33877c',
            main: '#00695c',
            dark: '#004940',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffef62',
            main: '#ffeb3b',
            dark: '#b2a429',
            contrastText: '#000',
        },
    },
});

export default theme;
