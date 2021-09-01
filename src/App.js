import React from "react";
import {BrowserRouter as Router, Switch, withRouter} from "react-router-dom";

import RouteLayout from "./layout/RouteLayout";
import DefaultLayout from "./layout/Default";

import Home from "./route/Home";
import Members from "./route/Members";
import Privacy from "./route/Privacy";
import Projects from "./route/Projects";

const App = () => {
    return (
        <Router>
            <Switch>
                <RouteLayout
                    exact
                    path = "/"
                    layout = {DefaultLayout}
                    component = {withRouter(Home)} />
                <RouteLayout
                    exact
                    path = "/members"
                    layout = {DefaultLayout}
                    component = {withRouter(Members)} />
                <RouteLayout
                    exact
                    path = "/projects"
                    layout = {DefaultLayout}
                    component = {withRouter(Projects)} />
                <RouteLayout
                    exact
                    path = "/privacy"
                    layout = {DefaultLayout}
                    component = {withRouter(Privacy)} />
            </Switch>
        </Router>
    );
}

export default App;