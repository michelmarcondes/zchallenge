import React, { Component } from 'react';
import axios from 'axios';

import * as constants from '../constants';


export default class MoreFromArtist extends Component {
    state = {
        shots: []
    }

    componentWillMount() {
        this.getUserShots(this.props.artist.id);
    }

    render() {
        return (
            <div className='modal-tags-placeholder'>
                <h3 className='modal-more-from-artist-title'>
                    More from {this.props.artist.name}
                </h3>
                <div className='modal-more-from-artist-shots-placeholder'>
                    { this.renderUserShots() }
                </div>
            </div>
        );
    }

    getUserShots = async (userId) => {
        try {
            let { data } = await axios.get(`${constants.API_ROOT_URL}/users/${userId}/shots?access_token=${constants.ACCESS_TOKEN}&per_page=5`);

            if (data) {
                let shots = [];
                data.map((item) => {
                    if (item.id === this.props.currentShotId)
                        return true;

                    shots.push({
                        imageUrl: item.images.teaser,
                        url: item.html_url,
                        title: item.title
                    });

                    return true;
                });

                if (shots.length > 4) {
                    shots.pop();
                }

                this.setState({ shots });
            }
        } catch (error) {
            console.log(error);
        }
    }

    renderUserShots = () => {
        let shots = this.state.shots
        if (shots) {
            return shots.map((item, idx) => {
                return (
                    <div key={idx} className='modal-more-from-artist-thumbs'>
                        <a href={item.url} target='_blank'>
                            <img src={item.imageUrl} alt={item.title} />
                        </a>
                    </div>
                );
            });
        }
    }
}