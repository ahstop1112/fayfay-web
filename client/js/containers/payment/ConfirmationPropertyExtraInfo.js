import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

class ConfirmationPropertyExtraInfo extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        extraInfos: PropTypes.array.isRequired
    };

    render() {
        const { intl: { formatMessage }, extraInfos } = this.props;

        return (
            <React.Fragment>
                {extraInfos.map((item, index) => {
                    return (<div key={`property-${index}`} className="visa-applicants">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.preferredTourLanguage"/>
                                    </label>
                                    <div>{formatMessage({ id: item.preferredTourLanguage })}</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.budget"/>
                                    </label>
                                    <div>{formatMessage({ id: item.budget })}</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.unitTypes"/>
                                    </label>
                                    <div>{formatMessage({ id: item.unitTypes })}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.unitSize"/>
                                    </label>
                                    <div>{formatMessage({ id: item.unitSize })}</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="inquiry.preferredPropertyDistrict"/>
                                    </label>
                                    <div>{item.preferredPropertyDistrict}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>
                                        <FormattedMessage id="payment.note"/>
                                    </label>
                                    <div>{item.note}</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </React.Fragment>
        );
    }
}

export default injectIntl(ConfirmationPropertyExtraInfo);
