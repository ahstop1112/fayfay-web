import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage, injectIntl } from 'react-intl';
import SelectField from '../../components/inputs/SelectField';
import Button from "../../components/inputs/Button";
import { getFullUrl } from "../../utils/helpers";

class LanguageAndCurrency extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        details: PropTypes.object.isRequired,
        languages: PropTypes.array.isRequired,
        currencies: PropTypes.array.isRequired,
        postFormData: PropTypes.func.isRequired,
        initialize: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        form: PropTypes.string.isRequired,
        intl: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.languageRef = React.createRef();
        this.currencyRef = React.createRef();
    }

    componentDidMount() {
        const { details } = this.props;
        const initData = {
            languageId: details.languageId,
            preferredCurrency: details.preferredCurrency
        };
        this.props.initialize(initData);
    }

    submitHandlerLangCcy = (values) => {
        const uid = this.props.details.id;

        let selectedLanguage;
        if (this.languageRef.current.dirty) {
            this.props.postFormData(`/api/users/${uid}/language/${values.languageId}`, '', this.props.form, 'patch');

            selectedLanguage = this.props.languages.find(l => l.value == values.languageId);
            document.cookie = `lang=${selectedLanguage.code};path=/`;
        }

        if (this.currencyRef.current.dirty) {
            this.props.postFormData(`/api/users/${uid}/currency/${values.preferredCurrency}`, '', this.props.form, 'patch');
            document.cookie = `ccy=${values.preferredCurrency};path=/`;
        }

        if (!this.props.ajaxStatus.isServerError && (this.languageRef.current.dirty || this.currencyRef.current.dirty)) {
            const languageDirty = this.languageRef.current.dirty;
            const ccyDirty = this.currencyRef.current.dirty;

            window.setTimeout(function () {
                if (languageDirty) {
                    window.location.replace(getFullUrl(location, selectedLanguage.code));

                    return;
                }

                if (ccyDirty) {
                    window.location.reload(true);
                }
            });
        }
        else {
            this.props.initialize({
                languageId: values.languageId,
                preferredCurrency: values.preferredCurrency
            });
        }
    };

    render() {
        const { handleSubmit, languages, currencies, intl, ajaxStatus, form } = this.props;

        return (
            <form onSubmit={handleSubmit(this.submitHandlerLangCcy)} noValidate>

                <div className="row marginTop-15px">
                    <div className="col-lg-12">
                        <h5><FormattedMessage id="account.language.currency"/></h5>
                        <hr/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        {ajaxStatus.sendForm === form && ajaxStatus.isSubmitSuccess &&
                        <div className="alert alert-success"><FormattedMessage id="account.languageCurrencyUpdated"/>
                        </div>}

                        <div className="form-group">
                            <Field ref={this.languageRef} component={SelectField}
                                   label={intl.formatMessage({ id: 'account.default.language' })}
                                   name="languageId"
                                   selects={languages} showHeading={false}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <Field ref={this.currencyRef} component={SelectField}
                                   label={intl.formatMessage({ id: 'account.default.currency' })}
                                   name="preferredCurrency"
                                   selects={currencies} showHeading={false}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-4 txt-right">
                        <Button
                            type="submit"
                            data-name="lang-ccy"
                            className="btn btn-lg"
                            submitting={ajaxStatus.sendForm === form && ajaxStatus.isSubmitting}
                        >
                            <FormattedMessage id="common.save"/>
                        </Button>
                    </div>
                </div>
            </form>
        )
    }
}

export default injectIntl(reduxForm({
    form: 'LanguageAndCurrencyForm',
})(LanguageAndCurrency));
