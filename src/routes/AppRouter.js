/**
 * Created by jay on 24/1/19.
 */
import React from "react";
import {BrowserRouter as Router, Redirect, Route, Link} from "react-router-dom";
import Login from '../component/login/LoginForm';
import Registration from '../component/register/RegistrationForm';
import Dashboard from '../component/dashboard/Dashboard';

const AppRouter = () => (

    <Router>
        <div>
            <Route path="/" exact component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/registration" component={Registration}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
        </div>
    </Router>

);
function PrivateRoute({component: Component, ...rest}) {
    let isLoggedIn = localStorage.getItem('status');
    console.log(false);
    return (
        <Route
            {...rest}
            render={
            (props) => (isLoggedIn=='true') ? (<Component {...props} />) :(<Redirect to={"/login"}/>)
            }
        />
    );
}

export default AppRouter;
