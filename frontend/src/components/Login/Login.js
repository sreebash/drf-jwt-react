import React, {Component} from 'react';
import {Form, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div><br/><br/><br/>

                <div>
                    <div className="container">

                        <h1 className="mt-4 mb-3">Login
                            <small>Form</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Login</li>
                        </ol>
                        <div className="row container">
                            <form>

                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="email" placeholder="Email address" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>


                                <button type="submit" className="btn btn-primary btn-block">Log In</button>
                                <p className="forgot-password text-right">
                                    Need an account? <Link to="/register">Sign Up</Link>
                                </p>
                            </form>
                        </div>
                        <br/><br/>  <br/>


                    </div>
                </div>

            </div>

        );
    }
}

export default Login;