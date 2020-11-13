import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import BlogListingPage from "../pages/BlogListingPage";
import BlogPostPage from "../pages/BlogPostPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar/Navbar";

class AppRoute extends Component {
    render() {
        return (


            <div>
                <Switch>
                    <Route exact path="/posts" component={BlogListingPage}/>
                    <Route exact path="/post-detail" component={BlogPostPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route component={NotFound}/>
                </Switch>


            </div>


        );
    }
}

export default AppRoute;