import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLangUrl } from "../utils/helpers";
import { injectIntl } from 'react-intl';

export class AppContainer extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        ajaxStatus: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired
    };

    componentDidUpdate() {
        if (this.props.ajaxStatus.serverStatus === 401) {
            const langUrl = getLangUrl(this.props.intl.locale);

            window.location.href = `${langUrl}/login?redirectUrl=${encodeURIComponent(window.location.href)}`;
        }
    }

    render() {
        const { children } = this.props;
        return <React.Fragment>{children}</React.Fragment>;
    }
}

function mapStateToProps(state) {
    return {
        ajaxStatus: state.ajaxStatus
    };
}

export default connect(mapStateToProps, {})(injectIntl(AppContainer));
