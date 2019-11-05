import React, { PureComponent } from 'react';
import {
    withRouter,
} from 'react-router-dom';

import { connect } from 'react-redux';
// import { loadUser } from '../../actions/authActions';
import store from '../../store'

import { selectLanguage } from 'translate';

import './style.scss';

import { ProfileInfoItem } from '../../components/common'

@withRouter
@connect(mapStateToProps, null)
class Profile extends PureComponent{

    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]    
    state = {
        language: this.lang,
        isLoading: false
    };
    componentDidMount() {
        this.setState({isLoading: !this.state.isLoading})
        // store.dispatch(loadUser())
    }

    componentWillReceiveProps(nextProps) {
        this.updateState();
    }
    
    componentWillUpdate(){
        this.isUserLoad()
    }

    isUserLoad = () => (
        this.props.auth && this.props.auth.user ? this.setState({isLoading: false}) : null
    )

    updateState() {
        const { pathname } = this.props.history.location;
        this.setState({
            language: pathname.split('/')[pathname.split('/').length - 1]
        });
    }


    generateMyProfileInfo = () => {
        if(this.state.isLoading) {
            return <div className="Spinner"/>
        } 
        else if(!this.props.auth.user){
            this.props.history.push('/sign_in/' + this.state.language)
        }
        else  {
            const { auth } = this.props;
            const { user } = this.props.auth;
            const { language } = this.state;

            return (
            <div className="my_profile_content_main">
                <div className="my_profile_content_info">
                    <ProfileInfoItem
                        titleName={'name'}
                        name={language && selectLanguage(language).sign_up_name}
                        value={auth && user ? user.name : 'Name'}
                    />
                    <ProfileInfoItem
                        titleName={'surname'}
                        name={language && selectLanguage(language).sign_up_surname}
                        value={auth && user ? user.surname : 'Surname'}
                    />
                    <ProfileInfoItem
                        titleName={'email'}
                        name={language && selectLanguage(language).sign_up_email}
                        value={auth && user ? user.email : 'Email'}
                    />
                    <ProfileInfoItem
                        titleName={'address'}
                        name={language && selectLanguage(language).sign_up_address}
                        value={auth && user ? user.address : 'Address'}
                    />
                    <span style={{
                        fontSize: '15px',
                        color: '#9a9a9a'
                    }}>
                        * {language && selectLanguage(language).profile_change_info}
                    </span>
                </div>
            </div>
            )
        }
    }

    render(){
        return (
            <section className="MyProfile withStretch flexible vertical">
                <div className="my_profile_content page-content">
                    <h2 
                        className="header-text"
                    >
                        {selectLanguage(this.props.match.params.lang).header_my_profile}
                    </h2>
                    {this.generateMyProfileInfo()}
                </div>
            </section>
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth
});

export default withRouter(connect(
    mapStateToProps,
    null
)(Profile));
