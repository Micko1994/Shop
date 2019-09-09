import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {ShopButton} from '../../components/common'
import {GoodItem} from '../../components/common'
import {SettingsListsItems} from '../../components/common'

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


const mapStateToProps = ({ posts }) => ({ posts });

// @connect(mapStateToProps, {
//     fetchPosts,
//     fetchSinglePost,
//     createPost,
//     updatePost,
//     deletePost,
// })

@withRouter
export default class Home extends PureComponent {

    // componentWillMount() {
    //     this.props.fetchPosts();
    // }
    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]


    state = {
        language: this.lang,
    };

    componentWillReceiveProps(nextProps) {
        this.updateState();
    }    

    updateState() {
        this.setState({
            language: this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length - 1]
        });
    }

    render() {
        // const { posts } = this.props;

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
