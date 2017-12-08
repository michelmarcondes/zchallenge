import React, { Component } from 'react';

export default class Tags extends Component {
    render() {
        const tags = this.props.tags;
        return (
            <div>
                {
                    tags.length > 0 ? (
                        <div>
                            <h3 className='modal-more-from-artist-title'>
                                Tags
                        </h3>
                            <div className='modal-tags'>
                                {this.renderTags(tags)}
                            </div>
                        </div>
                    )
                    :
                    ''
                }
            </div>

        );
    }

    renderTags = (tags) => {
        if (tags) {
            return tags.map((item, idx) => {
                return (
                    <span key={idx}>{item}</span>
                );
            })
        }
    }
}