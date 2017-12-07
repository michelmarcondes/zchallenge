import React, { Component } from 'react';
import axios from 'axios';

import * as constants from '../constants';

export default class SignIn extends Component {
    state = { pageContent: '' };

    componentWillMount() {
        this.getSignInPage();
    }

    render() {
        return (
            <div className="app">
                {this.renderPageContent()}
            </div>
        );
    }

    renderPageContent = () => {
        return <div dangerouslySetInnerHTML={{ __html: this.state.pageContent.data }} />
        // return <iframe src={this.state.pageContent} width='1024' height='1024'></iframe>
    }


    getSignInPage = async () => {
        // let authUrl = `${constants.AUTH_URL}?client_id=${constants.ACCESS_TOKEN}&redirect_uri=${constants.APP_URL}&scope=public+write&state=${constants.APP_STATE}`;
        console.log('call auth')
        const signInPage = await axios.get(constants.AUTH_URL, {
            crossdomain: true,
            // headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     'Access-Control-Allow-Methods': 'OPTIONS, GET',
            //     'Access-Control-Expose-Headers': 'ETag, Link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset',
            //     'Access-Control-Max-Age': '86400',
            //     'Access-Control-Allow-Credentials': 'true'
            // },
            params: {
                client_id: constants.ACCESS_TOKEN,
                redirect_uri: constants.APP_URL,
                'scope': 'public+write',
                state: constants.APP_STATE,
            }
        });

        if (signInPage) {
            console.log('login page', signInPage);
            this.setState({ pageContent: signInPage });
        }

    }
}