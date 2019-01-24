/**
 * Created by jay on 24/1/19.
 */
import React, {Component} from 'react';
import './LoginForm.css';
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
            //alert('Successfully Logged In')
        } else {
            alert('Invalid Username or Password');
        }
        e.preventDefault();

    }

    render() {
        return (
            <div className="col s12">
                <div><h4 className="center-align">Login Here</h4></div>
                <form className="col s12" onSubmit={this.handleSubmit}>

                    <div className="input-field">
                        <input type="text" placeholder="Username" name="username" value={this.state.username}
                               onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <input type="password" placeholder="Password" name="password" value={this.state.password}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="row submit">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Login
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}



