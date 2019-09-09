import React, { PureComponent } from 'react';
import {
    withRouter,
    NavLink
} from 'react-router-dom';

import { connect } from 'react-redux';
import { loadUser } from '../../actions/authActions';
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
        store.dispatch(loadUser())
    }

    // componentWillMount(){
    //     this.setState({isLoading: !this.state.isLoading})
    // }

    componentWillReceiveProps(nextProps) {
        this.updateState();
    }
    
    componentWillUpdate(){
        console.log('this.props:00000:', this.props)
        this.isUserLoad()
    }

    isUserLoad = () => (
        this.props.auth && this.props.auth.user ? this.setState({isLoading: !this.state.isLoading}) : null
    )

    updateState() {
        this.setState({
            language: this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length - 1]
        });
    }

    toggleIsLoading = () => (
        this.setState({isLoading: !this.state.isLoading})
    )

    generateMyProfileInfo = () => {
        if(this.state.isLoading) {
            return <div className="Spinner"/>
        } 
        // else if(!this.props.auth.user){
        //     this.props.history.push('/sign_in/' + this.state.language)
        // }
        else  {
            return (
            <div className="my_profile_content_main">
                <div className="my_profile_content_info">
                    <ProfileInfoItem
                        titleName={'name'}
                        name={this.state.language && selectLanguage(this.state.language).sign_up_name}
                        value={this.props.auth && this.props.auth.user ? this.props.auth.user.name : 'Name'}
                    />
                    <ProfileInfoItem
                        titleName={'surname'}
                        name={this.state.language && selectLanguage(this.state.language).sign_up_surname}
                        value={this.props.auth && this.props.auth.user ? this.props.auth.user.surname : 'Surname'}
                    />
                    <ProfileInfoItem
                        titleName={'email'}
                        name={this.state.language && selectLanguage(this.state.language).sign_up_email}
                        value={this.props.auth && this.props.auth.user ? this.props.auth.user.email : 'Email'}
                    />
                    <ProfileInfoItem
                        titleName={'address'}
                        name={this.state.language && selectLanguage(this.state.language).sign_up_address}
                        value={this.props.auth && this.props.auth.user ? this.props.auth.user.address : 'Address'}
                    />
                    <span style={{
                        fontSize: '15px',
                        color: '#9a9a9a'
                    }}>
                        * {this.state.language && selectLanguage(this.state.language).profile_change_info}
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

withRouter(Profile)

export default connect(
    mapStateToProps,
    null
)(Profile);
