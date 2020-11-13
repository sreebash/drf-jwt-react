import React, {Component} from 'react';
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <div><br/><br/><br/>

                <div>
                    <div className="container">

                        <h1 className="mt-4 mb-3">Register
                            <small>Form</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Sign Up</li>
                        </ol>
                        <div className="row container">
                            <form>

                                <div className="form-group">
                                    <label>First name:</label>
                                    <input type="text" placeholder="First Name" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>Last name:</label>
                                    <input type="email" placeholder="Last Name" className="form-control"/>
                                </div>

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
                                    Have an account? <Link to="/login">Log In</Link>
                                </p>
                            </form>
                        </div>
                        <br/><br/> <br/>


                    </div>
                </div>

            </div>
        );
    }
}

export default Register;