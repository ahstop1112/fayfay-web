import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Converter } from 'showdown';

export default class Markdown extends Component {
    static propTypes = {
        source: PropTypes.string.isRequired
    }

    render() {
        const { source } = this.props;
        const converter = new Converter({ tables: true, simplifiedAutoLink: true });
        const html = converter.makeHtml(source);

        return <div className="markdown" dangerouslySetInnerHTML={{ __html: html }}/>
    }
}
