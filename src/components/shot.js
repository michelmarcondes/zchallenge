import React, { Component } from 'react';

export default class Shot extends Component {
    componentWillMount() {
        // console.log('likes', this.props.shotData.likes_count);
    }

    render() {
        const data = this.props.shotData;

        return (
            <div className='shot-container'>
                <div className='shot-content'>
                    <div className='shot-image-container'>
                        <div className='shot-description-layer'>
                            <div className='shot-description'>
                                <strong className='shot-description-title'>{data.title}</strong>
                                <div className='shot-description-comment' dangerouslySetInnerHTML={{ __html: data.description }} />
                            </div>
                        </div>

                        <div className='shot-image'>
                            {/* <img alt="Robot Emoji Animation [WIP]"
                            src="https://cdn.dribbble.com/users/25514/screenshots/3997009/robot-emoji-animation-ramotion_teaser.gif"
                            data-originalsrc="https://cdn.dribbble.com/users/25514/screenshots/3997009/robot-emoji-animation-ramotion_teaser.gif"
                        /> */}
                            <img
                                src={data.images.teaser}
                                alt={data.title}
                            />
                        </div>

                    </div>

                    <div className='shot-actions-bottom-bar'>
                            <img 
                                src='/assets/ic_favorite_black_48px.svg' 
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
                        {data.user.name}
                    </span>
                </div>
            </div>
        );
    }
}