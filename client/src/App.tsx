import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './common/Layout';
import Home from './pages/Home';
import Planner from './pages/Planner';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/planner">
                        <Planner />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
