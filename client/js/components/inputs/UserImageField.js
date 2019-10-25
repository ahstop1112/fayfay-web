import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import Constants from 'fayfayConstants';
import axios from "axios/index";
import PropTypes from "prop-types";

class UserImageField extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired,
        label: PropTypes.node,
        change: PropTypes.func,
        meta: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            if (e.target.files[0].size <= Constants.MAXIMUM_IMAGE_FILE_SIZE) {
                this.setState({ error: '' });
                const { change, input, meta: { dispatch } } = this.props;
                const { name } = input;
                const data = new FormData();
                data.append('file', e.target.files[0]);
                data.append('tag', 'userProfileImage');
                this.setState({
                    loading: true
                });

                axios.post('/api/image/save', data)
                    .then(res => {
                        this.setState({
                            loading: false
                        });
                        input.onChange(res.data);
                        dispatch(change(name, { format: res.data.format, key: res.data.key }));
                    })
                    .catch(res => {
                        this.setState({
                            loading: false
                        });
                    });
            } else {
                let maxSize = Constants.MAXIMUM_IMAGE_FILE_SIZE / 1024 / 1024;
                let unit = 'MB';

                if (maxSize < 1) {
                    maxSize = Constants.MAXIMUM_IMAGE_FILE_SIZE / 1024;
                    unit = 'KB';
                }

                this.setState({
                    error: <FormattedMessage id="review.upload.limited"
                                             values={{ size: `${Math.round(maxSize)}${unit}` }}/>
                });
            }
        }
    }

    render() {

        const {
            input,
            label,
            intl
        } = this.props;

        return (
            <React.Fragment>
                <div className="user-photo">
                    {this.state.loading && <i className="fa fa-spinner fa-spin avatar-loading"/>}
                    {!input.value && (<img src="/images/avatar-sign.jpg" className="user-photo-img"/>)}
                    {input.value && !input.value.key && (
                        <img src="/images/avatar-sign.jpg" className="user-photo-img"/>)}

                    {input.value && input.value.key && (
                        <img src={`${Constants.CLOUDINARY_IMAGE_URL}/${input.value.key}.${input.value.format}`}
                             className="user-photo-img"/>)}
                </div>
                <div className="user-name">
                    <h5>{label} </h5>
                    <input
                        id={input.name}
                        type='file'
                        className="none"
                        accept="image/*"
                        onChange={this.handleFileChange}
                    />
                    {!this.state.loading && (
                        <div className="change-icon">
                            <label htmlFor={input.name}>{intl.formatMessage({ id: "account.change.icon" })}</label>
                        </div>
                    )
                    }
                    {this.state.error && <span className="error">{this.state.error}</span>}
                </div>
            </React.Fragment>
        )
    }
}

export default injectIntl(UserImageField);
