import React, { PureComponent } from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { connect } from "react-redux";
import { loadUser } from './actions/authActions';
import store from './store'

import {
    Header,
    Footer,
} from 'components/sections';

import {
    Home,
    AboutUs,
    ContactUs,
    SignIn,
    SignUp,
    Shop,
    Create,
    Profile,
    MyCart,
    // Students,
} from './containers';

//import {CvTemplates} from 'elements';

import Admin from './admin';

import './App.scss';
import './media.scss';

const mapStateToProps = ({logged}) => ({logged})

@withRouter
@connect(mapStateToProps, { loadUser })
class App extends PureComponent {
    componentDidMount() {
        store.dispatch(loadUser());
        if(this.props.location.pathname.split('/').length > 2) {
            this.props.history.push(this.props.location.pathname)
        } else if (this.props.location.pathname.split('/').includes('bk_map_19')){
            this.props.history.push('/bk_map_19');
        } else {
            this.props.history.push('/uk');
        }
    }

    render() {
        return (
            <article>
            <Header 
                lang={this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]} 
            />
            <Switch>
                <Route
                    exact
                    path="/:lang"
                    component={Home}
                />
                <Route path="/about/:lang" component={AboutUs} />
                <Route path="/contact-us/:lang" component={ContactUs} />
                <Route path="/sign_in/:lang" component={SignIn} />
                <Route path="/sign_up/:lang" component={SignUp} />
                <Route path="/shop/:lang" component={Shop} />
                <Route path="/create/:lang" component={Create} />
                <Route path="/profile/:lang" component={Profile} />
                <Route path="/my_cart/:lang" component={MyCart} />
                <Route
                    path="/bk_map_19"
                    component={Admin}
                />
            </Switch>
            <Footer lang={this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]}/>
        </article>
        );
    }
}

export default App;