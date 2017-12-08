import React, { Component } from 'react';

export default class StatsItem extends Component {
    render() {
        return (
            <div className={`modal-stats-container ${this.props.style}`}>
                <div>
                    <img src={this.props.iconUrl} alt={this.props.label} />
                    <span className='modal-stats-text'>{this.props.text}</span>
                </div>
                <div>
                    <span>{this.props.count}</span>
                    <span className='modal-stats-label'>{this.props.label}</span>
                </div>
            </div>
        );
    }
}