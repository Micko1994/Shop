import React, { Component } from 'react';

import {ShopButton} from '../../components/common'

// import {
//     fetchPosts,
//     fetchSinglePost,
//     createPost,
//     updatePost,
//     deletePost,
// } from 'actions/Posts';

import {
    withRouter,
    NavLink
} from 'react-router-dom';


import './Main.scss';

import { selectLanguage } from 'translate';

// @connect(mapStateToProps, {
//     fetchPosts,
//     fetchSinglePost,
//     createPost,
//     updatePost,
//     deletePost,
// })

export default class Home extends Component {

    // componentWillMount() {
    //     this.props.fetchPosts();
    // }
    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]


    state = {
        language: this.lang,
    };

    componentWillReceiveProps() {
        this.updateState();
    }    

    updateState() {
        const { props } = this
        this.setState({
            language: props.history.location.pathname.split('/')[props.history.location.pathname.split('/').length - 1]
        });
    }

    render() {
        // const { posts } = this.props;
        console.log(123123123)
        return (
            <section className="HomeMain">
                <div className="HomeMainContainer">
                    <div className="HomeMainContainerImage" 
                        style={{
                            backgroundImage: `url('https://wallpapercave.com/wp/wp1884051.jpg')`
                        }}
                    >
                        <div className="HomeMainContainerButton">
                            <ShopButton >
                                <NavLink 
                                    to={`/create/${this.state.language}`} 
                                    style={{
                                        color: '#3f51b5',
                                    }}        
                                >
                                    {this.state.language && selectLanguage(this.state.language).header_create}
                                </NavLink>
                            </ShopButton>
                        </div>
                    </div>
                </div>
                {/* <SettingsListsItems items={['red', 'blue', 'green']} /> */}
            </section>
        );
    }
}
