import React, { Component } from 'react';

export default class StatsItem extends Component {
    render() {
        return (
            <div className='modal-stats-container'>
                <div>
                    <img src={this.props.iconUrl} alt={this.props.label} />
                    <span>{this.props.text}</span>
                </div>
                <div>
                    <span>{this.props.count}</span>
                    <span>{this.props.label}</span>
                </div>
            </div>
        );
    }
}