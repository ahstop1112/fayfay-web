import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchKeywords extends Component {
    static propTypes = {
        keywords: PropTypes.array.isRequired
    };

    render() {
        const { keywords } = this.props;

        return (
            <div className="search-keywords">
                {keywords.length > 0 && keywords.map(item => {
                    return <a key={`${item.id}-${item.keyword}`} className="keyword" onClick={() => {
                        if (item.target === '_blank') {
                            window.open(item.link);
                        } else {
                            window.location = item.link;
                        }
                    }}>{item.keyword}</a>;
                })}
            </div>
        )
    }
}
