import React, { PureComponent } from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { connect } from "react-redux";
import { loadUser } from './actions/authActions';
import store from './store'
import { Provider } from 'react-redux';

import {
    Header,
    // Footer,
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
    // CourseItemPage,
    // Students,
} from 'containers';

//import {CvTemplates} from 'elements';

// import Admin from './admin';

import './App.scss';
import './media.scss';

const mapStateToProps = ({logged}) => ({logged})

@withRouter
@connect(mapStateToProps, null)
class App extends PureComponent {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    componentWillMount(){
        if(this.props.location.pathname.split('/').length > 2) {
            this.props.history.push(this.props.location.pathname)
        } else if (this.props.location.pathname.split('/').includes('admin')){
            this.props.history.push('/admin');
        } else {
            this.props.history.push('/uk');
        }
    };

    generateRoutes = () => (
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
        </Switch>
    );

    render() {
        console.log('this.props in app::', this.props)
        return (
            <article>
                <Header 
                    lang={this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]} 
                />
                {/* {this.props.logged && <Login/>} */}
                {this.generateRoutes()}
                {/* <Footer lang={this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]}/> */}
            </article>
        );
    }
}


withRouter(App)

export default App;