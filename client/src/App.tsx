import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './common/Layout';
import Home from './pages/Home';
import Schedule from './pages/Schedule';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/schedule">
                        <Schedule />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
