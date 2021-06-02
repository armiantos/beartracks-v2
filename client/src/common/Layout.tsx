import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <CssBaseline />
            {children}
        </>
    );
};

export default Layout;
