/**
 * Created by jay on 24/1/19.
 */
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../component/login/LoginForm';
import Registration from '../component/register/RegistrationForm';

const Dashboard = () => <div><h1>Dashboard</h1><p>You Are now logged in....</p></div>;
const isLoggedIn = (localStorage.getItem('status')!='undefined') ? localStorage.getItem('status') : false;
const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={(isLoggedIn) ? Dashboard : Login} />
            <Route path="/registration/" component={(isLoggedIn) ? Dashboard : Registration} />
            <Route path="/dashboard/" component={(isLoggedIn) ? Dashboard : Login} />
        </div>
    </Router>
);

export default AppRouter;
