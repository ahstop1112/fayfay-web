import React, { Component } from 'react';
import InquiryModal from './activity/InquiryModal';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from "react-intl";
import Button from "../components/inputs/Button";
import Constants from 'fayfayConstants';

class F1FormContainer extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        const { intl: { formatMessage } } = props;
        this.state = {
            showF1Modal: false,
            interestedTicketTypes: [
                {
                    value: "label.campaign.f1.generalAdmission",
                    label: formatMessage({ id: "f1.general.admission" })
                },
                {
                    value: "label.campaign.f1.unreservedGrandstand",
                    label: formatMessage({ id: "f1.unreserved.grandstand" })
                },
                {
                    value: "label.campaign.f1.standardGrandstand",
                    label: formatMessage({ id: "f1.standard.grandstand" })
                },
                {
                    value: "label.campaign.f1.premiumGrandstand",
                    label: formatMessage({ id: "f1.premium.grandstand" })
                },
                { value: "label.campaign.f1.goldLounge", label: formatMessage({ id: "f1.hospitality.gold.lounge" }) },
                {
                    value: "label.campaign.f1.platinumSuite",
                    label: formatMessage({ id: "f1.hospitality.platinum.suite" })
                },
                {
                    value: "label.campaign.f1.diamondSuite",
                    label: formatMessage({ id: "f1.hospitality.diamond.suite" })
                }
            ]
        };
    }

    render() {
        const { data } = this.props;

        return (
            <React.Fragment>
                <Button type="button" className="btn talk-to-us" onClick={() => this.setState({ showF1Modal: true })}>
                    <FormattedMessage id="f1.talk.to.us"/>
                </Button>
                {this.state.showF1Modal && <InquiryModal
                    show={true}
                    paymentFlowType={Constants.PAYMENT_FLOW_TYPE.F1}
                    campaignClassName={"f1-campaign"}
                    interestedTicketTypes={this.state.interestedTicketTypes}
                    countries={data.countries}
                    instantMessengers={data.instantMessengers}
                    onClose={() => this.setState({ showF1Modal: false })}
                    langId={data.langId}/>
                }
            </React.Fragment>
        )
    }
}

export default injectIntl(F1FormContainer);
