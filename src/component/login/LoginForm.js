/**
 * Created by jay on 24/1/19.
 */
import React, {Component} from 'react';
import './LoginForm.css';
import {Redirect} from 'react-router-dom';
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect : false,
            errorMsg:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {

        //Getting local Data
        let username = localStorage.getItem('username');
        let password = localStorage.getItem('password');
        if ((username == e.target.username.value) && (password == e.target.password.value)) {
            localStorage.setItem('status',true);
            this.setState({redirect:true});
            this.setState({errorMsg:'Successfully Logged In'});
        } else {
            this.setState({errorMsg:'Invalid Username or Password'});
            //alert('Invalid Username or Password');
        }
        e.preventDefault();

    }

    render() {
        if(this.state.redirect){return <Redirect to="/dashboard"/>}
        return (
            <div className="col s12">
                <div><h4 className="center-align">Login Here</h4></div>
                <div className="text-center"><p>{this.state.errorMsg}</p></div>
                <form className="col s12" onSubmit={this.handleSubmit}>

                    <div className="input-field">
                        <input type="text" placeholder="Username" name="username" value={this.state.username}
                               onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <input type="password" placeholder="Password" name="password" value={this.state.password}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="row text-center">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}



