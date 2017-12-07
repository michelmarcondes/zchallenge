import React, { Component } from 'react';
import axios from 'axios';

import * as constants from '../constants';
import Shot from './shot';

export default class Shots extends Component {
    state = {
        results: []
    }

    componentWillMount() {
        this.getShots();
    }

    render() {
        return (
            <div className='shots-container'>
                { this.renderShots() }
            </div>
        );
    }

    getShots = async () => {
        try {
            let {data} = await axios.get(`${constants.API_URL}?access_token=${constants.ACCESS_TOKEN}&per_page=${constants.RESULTS_PER_PAGE}`);

            if (data) {
                console.log(data);
                this.setState({ results: data });
            }
        } catch (error) {
            console.log(error);
        }
    }

    renderShots = () => {
        // console.log('in rendershots', this.state.results);
        if (this.state.results) {
            return this.state.results.map((item) => {
                return <Shot
                            key={item.id}
                            shotData={item}
                            likeShot={this.likeShot}
                        />
            });
        }
    }

    likeShot = async (shotId) => {
        try {
            // alert(`liked: ${shotId}`);
            let { id } = await axios.post(`${constants.API_URL}/${shotId}/like?access_token=${constants.ACCESS_TOKEN}`);
            console.log('id: ', id);
        } catch (error) {
            console.log(error);
        }
    }
}