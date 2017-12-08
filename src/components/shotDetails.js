import React, { Component } from 'react';
import Moment from 'react-moment';

import StatsItem from './statsItem';
import MoreFromArtist from './moreFromArtist';
import Tags from './tags';

export default class ShotDetails extends Component {
    render() {
        const data = this.props.shotData;

        return (
            <div>
                {this.renderDetails(data)}
            </div>
        );
    }

    renderDetails = (data) => {
        if (data) {
            return (
                <div className='modal-content-container'>
                    {/* HEADER */}
                    <div className='modal-header'>
                        <div>
                            <img
                                src={data.user.avatar_url}
                                className='modal-avatar-image'
                                alt={data.user.name}
                            />
                            {this.renderAvatarTeam(data.team)}
                        </div>
                        <div>
                            <div>
                                <h1>
                                    {data.title}
                                </h1>
                                <h2>
                                    <span>
                                        by
                                        <a href={data.user.html_url}>
                                            {data.user.name}
                                        </a>
                                    </span>

                                    {this.renderTeamName(data.team)}

                                    <span>
                                        on
                                        <Moment format=' MMM D, YYYY'>
                                            {data.created_at}
                                        </Moment>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* EOF HEADER */}

                    <div className='modal-content'>
                        <div className='modal-content-left-column'>
                            <div className='modal-content-image-placeholder'>
                                <div className='modal-content-image-wrapper'>
                                    <img src={data.images.normal} className='modal-content-image' alt={data.title} />
                                </div>
                            </div>

                            <div>
                                <div
                                    className='modal-content-text'
                                    dangerouslySetInnerHTML={{ __html: data.description }}
                                >
                                </div>
                            </div>
                        </div>
                        <div className='modal-content-right-column'>
                            <div>
                                <StatsItem
                                    iconUrl='/assets/icon-shotstat-like.png'
                                    text='Like?'
                                    count={data.likes_count}
                                    label='likes'
                                />
                                <StatsItem
                                    iconUrl='/assets/icon-shotstat-share.png'
                                    text='Share'
                                    count={data.views_count}
                                    label='views'
                                />
                                <StatsItem
                                    iconUrl='/assets/icon-shotstat-bucket.png'
                                    text='Bucket'
                                    count={data.buckets_count}
                                    label='buckets'
                                />
                            </div>

                            <div>
                                <MoreFromArtist artist={data.user} currentShotId={data.id} />
                            </div>

                            <div>
                                {/* <h3 className='modal-more-from-artist-title'>
                                    Tags
                                </h3>
                                <div className='modal-tags'>
                                    {this.renderTags(data.tags)}
                                </div> */}
                                <Tags tags={data.tags} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    renderAvatarTeam = (team) => {
        if (team) {
            return (
                <img
                    src={team.avatar_url}
                    className='modal-avatar-team'
                    alt={team.name}
                />
            );
        }
    }

    renderTeamName = (team) => {
        if (team) {
            return (
                <span>
                    for
                    <a href={team.html_url}>
                        {team.name}
                    </a>
                </span>
            );
        }
    }
}