import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import InfiniteScroll from 'react-infinite-scroller';

import * as constants from '../constants';
import Shot from './shot';
import ShotDetails from './shotDetails';

export default class Shots extends Component {
    state = {
        results: [],
        modalIsOpen: false,
        shotData: null,
        page: 1
    }

    render() {
        return (
            <div>
                <div className='shots-container'>
                    <InfiniteScroll
                        initialLoad
                        pageStart={0}
                        loadMore={this.getShots}
                        hasMore={true}
                        loader={<div className="infinite-scroll-loader">Loading ...</div>}
                        className='infinite-scroll'
                    >
                        {this.renderShots()}
                    </InfiniteScroll>
                </div>
                <Modal
                    open={this.state.modalIsOpen}
                    onClose={this.closeModal}
                    classNames={{
                        modal: 'custom-modal'
                    }}
                >
                    <ShotDetails shotData={this.state.shotData} />
                </Modal>
            </div>
        );
    }

    getShots = async () => {
        try {
            console.log('page before call: ', this.state.page);
            let { data } = await axios.get(`${constants.API_SHOTS_URL}?access_token=${constants.ACCESS_TOKEN}&page=${this.state.page}`);

            if (data) {
                // console.log(data);
                let results = this.state.results;
                data.map((item) => {
                    results.push(item);
                    return true;
                });

                this.setState({ page: this.state.page + 1 });
            }
        } catch (error) {
            console.log(error);
        }
    }

    renderShots = () => {
        if (this.state.results) {
            return this.state.results.map((item) => {
                return (
                    <Shot
                        key={item.id}
                        shotData={item}
                        likeShot={this.likeShot}
                        onClick={this.openModal}
                    />
                );
            });
        }
    }

    likeShot = async (shotId) => {
        try {
            // alert(`liked: ${shotId}`);
            let { id } = await axios.post(`${constants.API_SHOTS_URL}/${shotId}/like?access_token=${constants.ACCESS_TOKEN}`);
            console.log('id: ', id);
        } catch (error) {
            console.log(error);
        }
    }

    openModal = (shotData) => {
        this.setState({ modalIsOpen: true, shotData });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false, shotData: null });
    }
}