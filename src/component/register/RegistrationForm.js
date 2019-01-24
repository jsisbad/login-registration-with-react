/**
 * Created by jay on 24/1/19.
 */
import React, {Component} from 'react';
import './RegistrationForm.css';
export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        let status = true;
        if (this.state.username == '') {
            status = false;
        }
        if (this.state.email == '') {
            status = false;
        }
        if ((this.state.confirmPassword != this.state.password)) {
            status = false;
            alert('Password and Confirm Password does not match');
        }

        if (status) {

            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('address', this.state.address);

            alert("User added Successfully");

        }
        e.preventDefault();

    }

    render() {
        return (

            <div className="col s12">
                <div><h4 className="center-align">Register Here</h4></div>
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type="text" placeholder="Username" name="username" value={this.state.username}
                               onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder="Email" name="email" value={this.state.email}
                               onChange={this.handleChange}/>
                    </div>


                    <div className="input-field">
                        <input type="password" placeholder="Password" name="password" value={this.state.password}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Confirm Password" name="confirmPassword"
                               value={this.state.confirmPassword}
                               onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder="Address" name="address" value={this.state.address}
                               onChange={this.handleChange}/>
                    </div>

                    <div className="row submit">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">add_circle</i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}



