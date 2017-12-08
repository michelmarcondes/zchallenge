import React, { Component } from 'react';

export default class Shot extends Component {
    componentWillMount() {
        // console.log('likes', this.props.shotData.likes_count);
    }

    render() {
        const data = this.props.shotData;

        return (
            <div className='shot-container'>
                <div className='shot-content' onClick={() => this.props.onClick(data)}>
                    <div className='shot-image-container'>
                        <div className='shot-description-layer'>
                            <div className='shot-description'>
                                <strong className='shot-description-title'>{data.title}</strong>
                                <div
                                    className='shot-description-comment'
                                    dangerouslySetInnerHTML={{ __html: data.description }}
                                />
                            </div>
                        </div>

                        <div className='shot-image'>
                            <img
                                src={data.images.teaser}
                                alt={data.title}
                            />
                        </div>

                    </div>

                    <div className='shot-actions-bottom-bar'>
                        <img
                            src='/assets/icon-shotstat-like.png'
                            className='shot-fav-icon' alt='fav icon'
                            onClick={() => this.props.likeShot(data.id)}
                        />
                        <span className='shot-fav-counter'>{data.likes_count}</span>
                    </div>
                </div>
                <div className='shot-avatar-data'>
                    <img
                        src={data.user.avatar_url}
                        className='shot-avatar-icon'
                        alt={data.title}
                    />
                    <span>
                        <a href={data.user.html_url} target='_blank'>
                            {this.formatUsername(data.user.name)}
                        </a>
                    </span>
                </div>
            </div>
        );
    }

    formatUsername = (username) => {
        if (username.length > 26) {
            username = username.toString().substring(0, 23);
            username = username + '...';
            return username
        }

        return username;
    }
}