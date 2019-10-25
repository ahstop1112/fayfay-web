import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ActivityRating extends Component {
    static propTypes = {
        ratingNumber: PropTypes.number.isRequired
    };

    render() {
        const { ratingNumber } = this.props;
        let starCss = `num-${Math.round(ratingNumber)}`;
        if (ratingNumber >= 4.4 && ratingNumber <= 4.7) {
            starCss = 'num-4half';
        }
        else if (ratingNumber >= 3.4 && ratingNumber <= 3.7) {
            starCss = 'num-3half';
        }
        else if (ratingNumber >= 2.4 && ratingNumber <= 2.7) {
            starCss = 'num-2half';
        }
        else if (ratingNumber >= 1.4 && ratingNumber <= 1.7) {
            starCss = 'num-1half';
        }

        return (
            <ul className={`rating ${starCss}`}>
                <li className="star"/>
                <li className="star"/>
                <li className="star"/>
                <li className="star"/>
                <li className="star"/>
            </ul>
        )
    }
}
