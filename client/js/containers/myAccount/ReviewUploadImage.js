import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import Constants from 'fayfayConstants';
import axios from "axios/index";
import PropTypes from "prop-types";
import { Field } from 'redux-form';

class ReviewUploadImage extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
        fields: PropTypes.object.isRequired,
        max: PropTypes.number.isRequired,
        change: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        meta: PropTypes.object.isRequired,
        reviewKeyData: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            count: 1
        };
    }

    handleFileChange = (e) => {
        this.setState({
            loading: true
        });

        const ele = e.target;
        if (ele.files && ele.files[0]) {
            if (ele.files[0].size <= Constants.MAXIMUM_IMAGE_FILE_SIZE) {
                this.setState({ error: '' });
                const { change, dispatch, fields, max = 100, reviewKeyData } = this.props;
                fields.length < max ? fields.push('') : '';

                const data = new FormData();
                data.append('file', ele.files[0]);
                data.append('tag', 'reviewImage');

                let uploadUrl = '/api/image/save';
                if (reviewKeyData.key) {
                    uploadUrl = `/public/review/image/save?orderId=${reviewKeyData.orderId}&orderItemId=${reviewKeyData.orderItemId}&activityId=${reviewKeyData.activityId}&key=${reviewKeyData.key}`;
                }
                axios.post(uploadUrl, data)
                    .then(res => {

                        const { fields } = this.props;
                        dispatch(change(`${fields.name}[${fields.length - 1}]`, {
                            format: res.data.format,
                            key: res.data.key
                        }));
                        this.setState({
                            loading: false
                        });

                        //reset input value
                        ele.value = '';
                    })
                    .catch(res => {
                        this.setState({
                            loading: false
                        });
                    });
            }
            else {
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
    };

    render() {
        const { fields, max, intl } = this.props;

        return (
            <React.Fragment>
                <div className="add-more">
                    <label type="button" htmlFor={fields.name} disabled={fields.length >= max}
                           title={intl.formatMessage({ id: 'review.images.max' }, { 'max': max })}
                           className="btn btn-s grey upload-label">
                        <i className="icon plus"/> <FormattedMessage id="review.upload.files"/>
                    </label>
                    <input
                        id={fields.name}
                        type='file'
                        className="none"
                        accept="image/*"
                        disabled={fields.length >= max}
                        onChange={this.handleFileChange}
                    />
                </div>
                {this.state.error && <div className="error">{this.state.error}</div>}
                <ul className="review-photos-bg">
                    {
                        fields.map((field, index) => {
                            const item = fields.get(index);
                            return (
                                <Field key={index} removeItem={() => fields.remove(index)} name={field}
                                       component={ImagePreview} label={item.label}/>
                            )
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}

class ImagePreview extends Component {
    static propTypes = {
        removeItem: PropTypes.func.isRequired,
        meta: PropTypes.object.isRequired,
        input: PropTypes.object.isRequired
    };

    render() {
        const { input, removeItem } = this.props;
        const file = input.value;

        return (
            <li>
                {file && (<i className="image-remove fas fa-times-circle" onClick={removeItem}/>)}
                <div className="review-photo">
                    {!file && (<i className="fa fa-spinner fa-spin review-avatar-loading"/>)}
                    {
                        file && file.key &&
                        (<a href={`${Constants.CLOUDINARY_IMAGE_URL}/${file.key}.${file.format}`} target="_blank"
                            rel="noreferrer noopener">
                            <img src={`${Constants.CLOUDINARY_IMAGE_URL}/${file.key}.${file.format}`} className="photo-img"/>
                        </a>)
                    }
                    {!file && (<i className="fas fa-camera-retro camera-icon"/>)}
                </div>
            </li>
        )
    }
}

export default injectIntl(ReviewUploadImage);
