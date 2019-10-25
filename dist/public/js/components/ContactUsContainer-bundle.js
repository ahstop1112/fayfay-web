webpackJsonp([16],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_Component) {
    (0, _inherits3.default)(Button, _Component);

    function Button() {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
    }

    (0, _createClass3.default)(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                type = _props.type,
                className = _props.className,
                submitting = _props.submitting,
                onClick = _props.onClick,
                children = _props.children,
                style = _props.style,
                disabled = _props.disabled;

            return _react2.default.createElement(
                'button',
                { type: type, style: style, onMouseOver: this.props.onMouseOver, onMouseOut: this.props.onMouseOut,
                    className: className, disabled: disabled || submitting, onClick: onClick },
                submitting && _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin' }),
                ' ',
                children
            );
        }
    }]);
    return Button;
}(_react.Component);

Button.propTypes = {
    className: _propTypes2.default.string,
    submitting: _propTypes2.default.bool,
    type: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func,
    children: _propTypes2.default.node.isRequired,
    onMouseOver: _propTypes2.default.func,
    onMouseOut: _propTypes2.default.func,
    style: _propTypes2.default.object,
    disabled: _propTypes2.default.bool
};
Button.defaultProps = {
    submitting: false,
    disabled: false,
    className: 'btn btn-s',
    onClick: function onClick() {}
};
exports.default = Button;

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(185), __esModule: true };

/***/ }),

/***/ 1485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _ContactUsContainer = __webpack_require__(1486);

var _ContactUsContainer2 = _interopRequireDefault(_ContactUsContainer);

var _IntlWrapper = __webpack_require__(203);

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _store = __webpack_require__(202);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.React = _react2.default;

var data = window.__DATA__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
delete window.__DATA__;

// Create Redux store with initial state
(0, _reactDom.hydrate)(_react2.default.createElement(
    _IntlWrapper2.default,
    { store: _store2.default, locale: data.lang, messages: data.translations },
    _react2.default.createElement(_ContactUsContainer2.default, { data: data })
), document.getElementById("ask-fayfay-form-container"));

/***/ }),

/***/ 1486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(149);

var _AskFayFayForm = __webpack_require__(1487);

var _AskFayFayForm2 = _interopRequireDefault(_AskFayFayForm);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formSubmissionAction = __webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactUsContainer = function (_Component) {
    (0, _inherits3.default)(ContactUsContainer, _Component);

    function ContactUsContainer() {
        (0, _classCallCheck3.default)(this, ContactUsContainer);
        return (0, _possibleConstructorReturn3.default)(this, (ContactUsContainer.__proto__ || (0, _getPrototypeOf2.default)(ContactUsContainer)).apply(this, arguments));
    }

    (0, _createClass3.default)(ContactUsContainer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                postFormData = _props.postFormData,
                ajaxStatus = _props.ajaxStatus,
                data = _props.data,
                resetCaptcha = _props.resetCaptcha;


            return _react2.default.createElement(_AskFayFayForm2.default, {
                ajaxStatus: ajaxStatus,
                postFormData: postFormData,
                instantMessengers: data.instantMessengers,
                countries: data.countries,
                reCaptcha: data.reCaptcha,
                resetCaptcha: resetCaptcha
            });
        }
    }]);
    return ContactUsContainer;
}(_react.Component);

ContactUsContainer.propTypes = {
    postFormData: _propTypes2.default.func.isRequired,
    ajaxStatus: _propTypes2.default.object.isRequired,
    data: _propTypes2.default.object,
    resetCaptcha: _propTypes2.default.bool.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
    return {
        resetCaptcha: state.register.resetCaptcha,
        ajaxStatus: state.ajaxStatus
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { postFormData: _formSubmissionAction.postFormData })(ContactUsContainer);

/***/ }),

/***/ 1487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AskFayFayForm = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(17);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputField = __webpack_require__(18);

var _InputField2 = _interopRequireDefault(_InputField);

var _Button = __webpack_require__(143);

var _Button2 = _interopRequireDefault(_Button);

var _validators = __webpack_require__(15);

var _reactIntl = __webpack_require__(8);

var _AdvancedDropDown = __webpack_require__(158);

var _AdvancedDropDown2 = _interopRequireDefault(_AdvancedDropDown);

var _reactGrecaptcha = __webpack_require__(162);

var _reactGrecaptcha2 = _interopRequireDefault(_reactGrecaptcha);

var _registerReducer = __webpack_require__(208);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AskFayFayForm = exports.AskFayFayForm = function (_Component) {
    (0, _inherits3.default)(AskFayFayForm, _Component);

    function AskFayFayForm() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, AskFayFayForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AskFayFayForm.__proto__ || (0, _getPrototypeOf2.default)(AskFayFayForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            showRequiredCaptcha: false,
            captchaResponse: ''
        }, _this.verifyCallback = function (response) {
            _this.setState({
                captchaResponse: response,
                showRequiredCaptcha: false
            });
        }, _this.expiredCallback = function () {
            _this.setState({
                captchaResponse: ''
            });
        }, _this.submitHandler = function (values) {
            if (!_this.state.captchaResponse) {
                _this.setState({
                    showRequiredCaptcha: true
                });

                return;
            }
            var _this$props = _this.props,
                postFormData = _this$props.postFormData,
                form = _this$props.form;

            postFormData('/public-email?g-recaptcha-response=' + _this.state.captchaResponse, values, form, 'post', true);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(AskFayFayForm, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _props = this.props,
                dispatch = _props.dispatch,
                resetCaptcha = _props.resetCaptcha;

            if (resetCaptcha) {
                window.grecaptcha.reset();
                this.expiredCallback();
                dispatch({
                    type: _registerReducer.RESET_CAPTCHA,
                    resetCaptcha: false
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                handleSubmit = _props2.handleSubmit,
                ajaxStatus = _props2.ajaxStatus,
                intl = _props2.intl,
                form = _props2.form,
                reCaptcha = _props2.reCaptcha;


            var countryList = this.props.countries.map(function (item) {
                return { value: item.countryCode, label: item.name + ' (+' + item.countryCode + ')', id: item.id };
            });

            var messengers = this.props.instantMessengers.map(function (item) {
                return { value: item, label: intl.formatMessage({ id: item }) };
            });

            return _react2.default.createElement(
                'div',
                { id: 'enquiry-form' },
                _react2.default.createElement(
                    'form',
                    { onSubmit: handleSubmit(this.submitHandler) },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(_reduxForm.Field, { name: 'email', type: 'text',
                                    label: intl.formatMessage({ id: "common.email.address" }), required: true,
                                    validate: [_validators.requiredChk, _validators.emailChk],
                                    component: _InputField2.default,
                                    placeholder: intl.formatMessage({ id: "common.email.address" }) })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(_reduxForm.Field, { name: 'firstName', type: 'text',
                                    label: intl.formatMessage({ id: "common.firstName" }), required: true,
                                    validate: [_validators.requiredChk],
                                    component: _InputField2.default,
                                    placeholder: intl.formatMessage({ id: "common.firstName" }) })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(_reduxForm.Field, { name: 'lastName', type: 'text', label: intl.formatMessage({ id: "common.lastName" }),
                                    required: true, validate: [_validators.requiredChk],
                                    component: _InputField2.default,
                                    placeholder: intl.formatMessage({ id: "common.lastName" }) })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'payment.instantMsg' })
                                ),
                                _react2.default.createElement(_reduxForm.Field, {
                                    name: 'instantMessenger',
                                    componentName: 'instantMessenger',
                                    component: _AdvancedDropDown2.default,
                                    options: messengers
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'payment.instantMsgCountryCode' })
                                ),
                                _react2.default.createElement(_reduxForm.Field, { name: 'instantMessengerCountryCode', type: 'text',
                                    component: _AdvancedDropDown2.default, options: countryList
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12' },
                            _react2.default.createElement(
                                'label',
                                null,
                                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'payment.instantMsgPhoneOrUsername' })
                            ),
                            _react2.default.createElement(_reduxForm.Field, {
                                name: 'instantMessengerKey',
                                type: 'text',
                                isUsername: true,
                                component: _InputField2.default,
                                maxLength: 50,
                                placeholder: intl.formatMessage({ id: 'payment.instantMsgPhoneOrUsername' })
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(_reduxForm.Field, { name: 'message', type: 'textarea',
                                    label: intl.formatMessage({ id: 'help.user.question' }), required: true,
                                    validate: [_validators.requiredChk],
                                    component: _InputField2.default, row: 10, className: "resize-none",
                                    placeholder: intl.formatMessage({ id: 'help.user.question.enter' }) })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(_reactGrecaptcha2.default, {
                                    sitekey: reCaptcha.siteKey,
                                    callback: this.verifyCallback,
                                    expiredCallback: this.expiredCallback,
                                    locale: intl.locale
                                }),
                                this.state.showRequiredCaptcha && _react2.default.createElement(
                                    'div',
                                    { className: 'error' },
                                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'forgot.password.captcha.required' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-2 col-sm-4 col-xs-4' },
                            _react2.default.createElement(
                                _Button2.default,
                                {
                                    type: 'submit',
                                    className: 'btn btn-s ',
                                    submitting: ajaxStatus.sendForm === form && ajaxStatus.isSubmitting
                                },
                                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'common.submit' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-8 col-sm-8 col-xs-8 ask-fayfay-msg' },
                            ajaxStatus.sendForm === form && ajaxStatus.isSubmitSuccess && _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'help.contact.received' })
                        )
                    )
                )
            );
        }
    }]);
    return AskFayFayForm;
}(_react.Component);

AskFayFayForm.propTypes = {
    intl: _propTypes2.default.object.isRequired,
    ajaxStatus: _propTypes2.default.object.isRequired,
    handleSubmit: _propTypes2.default.func.isRequired,
    dispatch: _propTypes2.default.func.isRequired,
    postFormData: _propTypes2.default.func.isRequired,
    form: _propTypes2.default.string.isRequired,
    instantMessengers: _propTypes2.default.array.isRequired,
    countries: _propTypes2.default.array.isRequired,
    reCaptcha: _propTypes2.default.object.isRequired,
    resetCaptcha: _propTypes2.default.bool.isRequired
};
exports.default = (0, _reduxForm.reduxForm)({
    form: 'askFayFayForm', // a unique identifier for this form
    initialValues: {}
})((0, _reactIntl.injectIntl)(AskFayFayForm));

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var required = exports.required = function required(value) {
    return Array.isArray(value) && value.length < 1 || !value ? 'input.emptyField' : undefined;
};

var email = exports.email = function email(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'input.invalidEmail' : undefined;
};

var scrollToInvalid = exports.scrollToInvalid = function scrollToInvalid() {
    var errorEl = document.querySelector('.error');
    if (errorEl && window.scrollTo) {
        var top = window.pageYOffset + (errorEl.getBoundingClientRect().top - 200);
        scrollToTop(top, 500);
    }
};

var scrollToTop = exports.scrollToTop = function scrollToTop(top, scrollDuration) {
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollStep = -(scrollY - top) / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
        var scrollY = window.scrollY || window.pageYOffset;
        if (scrollY > top) {
            window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
    }, 15);
};

var requiredChk = exports.requiredChk = function requiredChk(value) {
    return value ? undefined : 'common.required';
};

var numberChk = exports.numberChk = function numberChk(value) {
    return value && isNaN(Number(value)) ? 'common.must.be.a.number' : undefined;
};

var nullValue = function nullValue(init) {
    return function (value) {
        return value === init ? 'common.required' : undefined;
    };
};
var nullValueChk = exports.nullValueChk = nullValue('-1');

var minValueChk = exports.minValueChk = function minValueChk(min) {
    return function (value) {
        return value && value < min ? 'common.must.be.at.least ' + min : undefined;
    };
};

var maxValueChk = exports.maxValueChk = function maxValueChk(max) {
    return function (value) {
        return value && value > max ? 'common.must.be.less.than ' + max : undefined;
    };
};

var maxLenChk = exports.maxLenChk = function maxLenChk(max) {
    return function (value) {
        return value && value.length > max ? 'common.must.be.or.less ' + max : undefined;
    };
};

var minLenChk = exports.minLenChk = function minLenChk(min) {
    return function (value) {
        return value && value.length < min ? 'common.must.be.or.more ' + min : undefined;
    };
};

var emailChk = exports.emailChk = function emailChk(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'common.invalid.email.address' : undefined;
};

var passwordChk = exports.passwordChk = function passwordChk(value) {
    return value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};’:”\\|,.<>\/?]).{8,20}$/.test(value) ? 'common.invalid.password' : undefined;
};

var validateAccount = exports.validateAccount = function validateAccount(values) {
    var errors = {};
    if (!values.title) {
        errors.title = 'common.required';
    }

    if (!values.passportCountryId) {
        errors.passportCountryId = 'common.required';
    }

    return errors;
};

var passwordsMatch = exports.passwordsMatch = function passwordsMatch(value, allValues) {
    return value !== allValues.password ? 'register.password.not.match' : undefined;
};

var trim = exports.trim = function trim(value) {
    return value.replace(/^\s+|\s+$/g, "");
};

var website = exports.website = function website(value) {
    return value && !/^(http|https):\/\/((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([\w\-]+\.)*[\w\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]{1,4})?(\/($|[\w\\.,\\?'\\+&amp;%\\$#=~_\-]+))*$/i.test(value) ? 'common.website.pattern' : undefined;
};

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = __webpack_require__(221);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactIntl = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdvancedDropDown = function (_Component) {
    (0, _inherits3.default)(AdvancedDropDown, _Component);

    function AdvancedDropDown() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, AdvancedDropDown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AdvancedDropDown.__proto__ || (0, _getPrototypeOf2.default)(AdvancedDropDown)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (selectedOption) {
            if (selectedOption) {
                _this.props.input.onChange(selectedOption.value.toString());
            } else {
                _this.props.input.onChange('');
            }

            if (_this.props.onCountryChanged) {
                _this.props.onCountryChanged(selectedOption);
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(AdvancedDropDown, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                meta = _props.meta,
                className = _props.className,
                placeholder = _props.placeholder,
                searchable = _props.searchable,
                disabled = _props.disabled,
                input = _props.input;

            return _react2.default.createElement(
                'div',
                { className: className, name: input.name },
                _react2.default.createElement(_reactSelect2.default, {
                    name: this.props.componentName,
                    instanceId: this.props.componentName,
                    value: input.value,
                    onChange: this.handleChange,
                    options: this.props.options,
                    placeholder: placeholder,
                    searchable: searchable,
                    disabled: disabled
                }),
                meta.submitFailed && meta.error && _react2.default.createElement(
                    'div',
                    { className: 'error' },
                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: meta.error })
                )
            );
        }
    }]);
    return AdvancedDropDown;
}(_react.Component);

AdvancedDropDown.propTypes = {
    input: _propTypes2.default.object.isRequired,
    meta: _propTypes2.default.object.isRequired,
    componentName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    options: _propTypes2.default.array.isRequired,
    onCountryChanged: _propTypes2.default.func,
    placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    searchable: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool
};
AdvancedDropDown.defaultProps = {
    className: 'form-group',
    placeholder: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'common.please.select' }),
    componentName: 'react-select',
    searchable: true,
    disabled: false
};
exports.default = AdvancedDropDown;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Recaptcha = __webpack_require__(227);

var _Recaptcha2 = _interopRequireDefault(_Recaptcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Recaptcha2.default;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(11);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactNumberFormat = __webpack_require__(187);

var _reactNumberFormat2 = _interopRequireDefault(_reactNumberFormat);

var _reactIntl = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputField = function (_Component) {
    (0, _inherits3.default)(InputField, _Component);

    function InputField() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, InputField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InputField.__proto__ || (0, _getPrototypeOf2.default)(InputField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            hidePlaceholder: false
        }, _this.onFocusInputIDNumber = function (e) {
            _this.setState({ hidePlaceholder: true });
        }, _this.onBlurInputIDNumber = function (e) {
            _this.setState({ hidePlaceholder: false });
        }, _this.onNumberChange = function (values) {
            var value = values.value;

            _this.props.input.onChange(value);
        }, _this.showError = function (err) {
            var key = '';
            if (err.indexOf('must.be.at.least') > -1) {
                key = 'common.must.be.at.least';
            } else if (err.indexOf('must.be.less.than') > -1) {
                key = 'common.must.be.less.than';
            } else if (err.indexOf('must.be.or.less') > -1) {
                key = 'common.must.be.or.less';
            } else if (err.indexOf('must.be.or.more') > -1) {
                key = 'common.must.be.or.more';
            }

            if (key) {
                return _react2.default.createElement(_reactIntl.FormattedMessage, { id: key, values: { 'num': err.split(key)[1] } });
            } else {
                return _react2.default.createElement(_reactIntl.FormattedMessage, { id: err });
            }
        }, _this.onKeyUp = function () {
            var _this$props = _this.props,
                isUsername = _this$props.isUsername,
                input = _this$props.input;

            if (isUsername) {
                var val = input.value.replace(/[^\w_]/ig, '');
                _this.props.input.onChange(val);
            }
        }, _this.onPaste = function (e) {
            if (_this.props.maxLength) {
                e.clipboardData.getData('text/plain').slice(0, _this.props.maxLength);
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(InputField, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                input = _props.input,
                type = _props.type,
                meta = _props.meta,
                label = _props.label,
                placeholder = _props.placeholder,
                divClassName = _props.divClassName,
                className = _props.className,
                rows = _props.rows,
                maxLength = _props.maxLength,
                allowNegative = _props.allowNegative,
                thousandSeparator = _props.thousandSeparator,
                numberFormat = _props.numberFormat,
                required = _props.required,
                requiredPosition = _props.requiredPosition,
                disabled = _props.disabled,
                verifiedStatus = _props.verifiedStatus,
                autocomplete = _props.autocomplete;


            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: meta.touched && meta.error ? 'has-error form-group ' + divClassName : 'form-group ' + divClassName },
                    _react2.default.createElement(
                        'div',
                        { name: input.name },
                        _react2.default.createElement(
                            'label',
                            { className: 'input-label' },
                            required && requiredPosition === 'left' && _react2.default.createElement(
                                'span',
                                { className: 'required' },
                                '* '
                            ),
                            label,
                            required && requiredPosition === 'right' && _react2.default.createElement(
                                'span',
                                { className: 'required' },
                                ' *'
                            )
                        ),
                        type === 'textarea' && _react2.default.createElement('textarea', (0, _extends3.default)({}, input, {
                            name: input.name,
                            placeholder: placeholder,
                            className: (0, _classnames2.default)(className, { 'input-error': meta.touched && meta.error }),
                            rows: rows,
                            autoComplete: autocomplete,
                            disabled: disabled,
                            maxLength: maxLength,
                            onPaste: this.onPaste
                        })),
                        type === 'number' && _react2.default.createElement(_reactNumberFormat2.default, {
                            thousandSeparator: thousandSeparator ? true : '',
                            format: numberFormat,
                            allowNegative: allowNegative,
                            value: input.value,
                            maxLength: maxLength,
                            onValueChange: this.onNumberChange,
                            placeholder: this.state.hidePlaceholder ? '' : placeholder,
                            onBlur: this.onBlurInputIDNumber,
                            onFocus: this.onFocusInputIDNumber,
                            disabled: disabled,
                            className: (0, _classnames2.default)(className, { 'input-error': meta.touched && meta.error })
                        }),
                        type !== 'number' && type !== 'textarea' && _react2.default.createElement('input', (0, _extends3.default)({}, input, {
                            placeholder: placeholder,
                            type: type,
                            onBlur: this.onBlurInputIDNumber,
                            onFocus: this.onFocusInputIDNumber,
                            onKeyUp: this.onKeyUp,
                            maxLength: maxLength,
                            className: (0, _classnames2.default)(className, { 'input-error': meta.touched && meta.error }),
                            disabled: disabled
                        })),
                        typeof verifiedStatus !== 'undefined' && verifiedStatus === false && _react2.default.createElement(
                            'span',
                            { className: 'not-verified' },
                            _react2.default.createElement('i', { className: 'icon close' }),
                            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'account.unverified' })
                        ),
                        typeof verifiedStatus !== 'undefined' && verifiedStatus === true && _react2.default.createElement(
                            'span',
                            { className: 'pass-verified' },
                            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'account.verified' })
                        ),
                        meta.touched && meta.error && _react2.default.createElement(
                            'div',
                            { className: 'error' },
                            this.showError(meta.error)
                        )
                    )
                )
            );
        }
    }]);
    return InputField;
}(_react.Component);

InputField.propTypes = {
    input: _propTypes2.default.object.isRequired,
    placeholder: _propTypes2.default.string,
    type: _propTypes2.default.string,
    meta: _propTypes2.default.object.isRequired,
    label: _propTypes2.default.node,
    className: _propTypes2.default.string,
    divClassName: _propTypes2.default.string,
    rows: _propTypes2.default.number,
    maxLength: _propTypes2.default.number,
    allowNegative: _propTypes2.default.bool,
    thousandSeparator: _propTypes2.default.bool,
    numberFormat: _propTypes2.default.string,
    required: _propTypes2.default.bool,
    requiredPosition: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    verifiedStatus: _propTypes2.default.bool,
    autocomplete: _propTypes2.default.string,
    isUsername: _propTypes2.default.bool
};
InputField.defaultProps = {
    requiredPosition: 'right',
    divClassName: '',
    className: 'input-field input-s',
    placeholder: '',
    type: 'text',
    label: '',
    rows: 5,
    maxLength: null,
    allowNegative: false,
    thousandSeparator: false,
    numberFormat: null,
    required: false,
    disabled: false,
    autocomplete: '',
    isUsername: false
};
exports.default = (0, _reactIntl.injectIntl)(InputField);

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(186);
module.exports = __webpack_require__(14).Object.keys;


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(206);
var $keys = __webpack_require__(192);

__webpack_require__(237)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(11);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(188);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  thousandSeparator: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.oneOf([true])]),
  decimalSeparator: _propTypes2.default.string,
  decimalScale: _propTypes2.default.number,
  fixedDecimalScale: _propTypes2.default.bool,
  displayType: _propTypes2.default.oneOf(['input', 'text']),
  prefix: _propTypes2.default.string,
  suffix: _propTypes2.default.string,
  format: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  removeFormatting: _propTypes2.default.func,
  mask: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  isNumericString: _propTypes2.default.bool,
  customInput: _propTypes2.default.func,
  allowNegative: _propTypes2.default.bool,
  allowEmptyFormatting: _propTypes2.default.bool,
  onValueChange: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['text', 'tel']),
  isAllowed: _propTypes2.default.func,
  renderText: _propTypes2.default.func,
  getInputRef: _propTypes2.default.func
};


var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  isNumericString: false,
  type: 'text',
  onValueChange: _utils.noop,
  onChange: _utils.noop,
  onKeyDown: _utils.noop,
  onMouseUp: _utils.noop,
  onFocus: _utils.noop,
  onBlur: _utils.noop,
  isAllowed: _utils.returnTrue,
  getInputRef: _utils.noop
};

var NumberFormat = function (_React$Component) {
  (0, _inherits3.default)(NumberFormat, _React$Component);

  function NumberFormat(props) {
    (0, _classCallCheck3.default)(this, NumberFormat);

    //validate props
    var _this = (0, _possibleConstructorReturn3.default)(this, (NumberFormat.__proto__ || (0, _getPrototypeOf2.default)(NumberFormat)).call(this, props));

    _this.validateProps();

    var formattedValue = _this.formatValueProp();

    _this.state = {
      value: formattedValue,
      numAsString: _this.removeFormatting(formattedValue)
    };

    _this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NumberFormat, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.updateValueIfRequired(prevProps);
    }
  }, {
    key: 'updateValueIfRequired',
    value: function updateValueIfRequired(prevProps) {
      var props = this.props,
          state = this.state;


      if (prevProps !== props) {
        //validate props
        this.validateProps();

        var stateValue = state.value;

        var lastNumStr = state.numAsString || '';
        var lastValueWithNewFormat = this.formatNumString(lastNumStr);

        var formattedValue = props.value === undefined ? lastValueWithNewFormat : this.formatValueProp();
        var _numAsString = this.removeFormatting(formattedValue);

        var floatValue = parseFloat(_numAsString);
        var lastFloatValue = parseFloat(lastNumStr);

        if ((!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue || lastValueWithNewFormat !== stateValue) {
          this.setState({
            value: formattedValue,
            numAsString: _numAsString
          });
        }
      }
    }

    /** Misc methods **/

  }, {
    key: 'getFloatString',
    value: function getFloatString() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var decimalScale = this.props.decimalScale;

      var _getSeparators = this.getSeparators(),
          decimalSeparator = _getSeparators.decimalSeparator;

      var numRegex = this.getNumberRegex(true);

      //remove negation for regex check
      var hasNegation = num[0] === '-';
      if (hasNegation) num = num.replace('-', '');

      //if decimal scale is zero remove decimal and number after decimalSeparator
      if (decimalSeparator && decimalScale === 0) {
        num = num.split(decimalSeparator)[0];
      }

      num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.');

      //remove extra decimals
      var firstDecimalIndex = num.indexOf('.');

      if (firstDecimalIndex !== -1) {
        num = num.substring(0, firstDecimalIndex) + '.' + num.substring(firstDecimalIndex + 1, num.length).replace(new RegExp((0, _utils.escapeRegExp)(decimalSeparator), 'g'), '');
      }

      //add negation back
      if (hasNegation) num = '-' + num;

      return num;
    }

    //returned regex assumes decimalSeparator is as per prop

  }, {
    key: 'getNumberRegex',
    value: function getNumberRegex(g, ignoreDecimalSeparator) {
      var _props = this.props,
          format = _props.format,
          decimalScale = _props.decimalScale;

      var _getSeparators2 = this.getSeparators(),
          decimalSeparator = _getSeparators2.decimalSeparator;

      return new RegExp('\\d' + (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format ? '|' + (0, _utils.escapeRegExp)(decimalSeparator) : ''), g ? 'g' : undefined);
    }
  }, {
    key: 'getSeparators',
    value: function getSeparators() {
      var decimalSeparator = this.props.decimalSeparator;
      var thousandSeparator = this.props.thousandSeparator;


      if (thousandSeparator === true) {
        thousandSeparator = ',';
      }

      return {
        decimalSeparator: decimalSeparator,
        thousandSeparator: thousandSeparator
      };
    }
  }, {
    key: 'getMaskAtIndex',
    value: function getMaskAtIndex(index) {
      var _props$mask = this.props.mask,
          mask = _props$mask === undefined ? ' ' : _props$mask;

      if (typeof mask === 'string') {
        return mask;
      }

      return mask[index] || ' ';
    }
  }, {
    key: 'getValueObject',
    value: function getValueObject(formattedValue, numAsString) {
      var floatValue = parseFloat(numAsString);

      return {
        formattedValue: formattedValue,
        value: numAsString,
        floatValue: isNaN(floatValue) ? undefined : floatValue
      };
    }
  }, {
    key: 'validateProps',
    value: function validateProps() {
      var mask = this.props.mask;

      //validate decimalSeparator and thousandSeparator

      var _getSeparators3 = this.getSeparators(),
          decimalSeparator = _getSeparators3.decimalSeparator,
          thousandSeparator = _getSeparators3.thousandSeparator;

      if (decimalSeparator === thousandSeparator) {
        throw new Error('\n          Decimal separator can\'t be same as thousand separator.\n\n          thousandSeparator: ' + thousandSeparator + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ' + decimalSeparator + ' (default value for decimalSeparator is .)\n       ');
      }

      //validate mask
      if (mask) {
        var maskAsStr = mask === 'string' ? mask : mask.toString();
        if (maskAsStr.match(/\d/g)) {
          throw new Error('\n          Mask ' + mask + ' should not contain numeric character;\n        ');
        }
      }
    }
    /** Misc methods end **/

    /** caret specific methods **/

  }, {
    key: 'setPatchedCaretPosition',
    value: function setPatchedCaretPosition(el, caretPos, currentValue) {
      /* setting caret position within timeout of 0ms is required for mobile chrome,
      otherwise browser resets the caret position after we set it
      We are also setting it without timeout so that in normal browser we don't see the flickering */
      (0, _utils.setCaretPosition)(el, caretPos);
      setTimeout(function () {
        if (el.value === currentValue) (0, _utils.setCaretPosition)(el, caretPos);
      }, 0);
    }

    /* This keeps the caret within typing area so people can't type in between prefix or suffix */

  }, {
    key: 'correctCaretPosition',
    value: function correctCaretPosition(value, caretPos, direction) {
      var _props2 = this.props,
          prefix = _props2.prefix,
          suffix = _props2.suffix,
          format = _props2.format;

      //if value is empty return 0

      if (value === '') return 0;

      //caret position should be between 0 and value length
      caretPos = (0, _utils.clamp)(caretPos, 0, value.length);

      //in case of format as number limit between prefix and suffix
      if (!format) {
        var hasNegation = value[0] === '-';
        return (0, _utils.clamp)(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
      }

      //in case if custom format method don't do anything
      if (typeof format === 'function') return caretPos;

      /* in case format is string find the closest # position from the caret position */

      //in case the caretPos have input value on it don't do anything
      if (format[caretPos] === '#' && (0, _utils.charIsNumber)(value[caretPos])) return caretPos;

      //if caretPos is just after input value don't do anything
      if (format[caretPos - 1] === '#' && (0, _utils.charIsNumber)(value[caretPos - 1])) return caretPos;

      //find the nearest caret position
      var firstHashPosition = format.indexOf('#');
      var lastHashPosition = format.lastIndexOf('#');

      //limit the cursor between the first # position and the last # position
      caretPos = (0, _utils.clamp)(caretPos, firstHashPosition, lastHashPosition + 1);

      var nextPos = format.substring(caretPos, format.length).indexOf('#');
      var caretLeftBound = caretPos;
      var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos);

      //get the position where the last number is present
      while (caretLeftBound > firstHashPosition && (format[caretLeftBound] !== '#' || !(0, _utils.charIsNumber)(value[caretLeftBound]))) {
        caretLeftBound -= 1;
      }

      var goToLeft = !(0, _utils.charIsNumber)(value[caretRightBound]) || direction === 'left' && caretPos !== firstHashPosition || caretPos - caretLeftBound < caretRightBound - caretPos;

      if (goToLeft) {
        //check if number should be taken after the bound or after it
        //if number preceding a valid number keep it after
        return (0, _utils.charIsNumber)(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
      }

      return caretRightBound;
    }
  }, {
    key: 'getCaretPosition',
    value: function getCaretPosition(inputValue, formattedValue, caretPos) {
      var format = this.props.format;

      var stateValue = this.state.value;
      var numRegex = this.getNumberRegex(true);
      var inputNumber = (inputValue.match(numRegex) || []).join('');
      var formattedNumber = (formattedValue.match(numRegex) || []).join('');
      var j = void 0,
          i = void 0;

      j = 0;

      for (i = 0; i < caretPos; i++) {
        var currentInputChar = inputValue[i] || '';
        var currentFormatChar = formattedValue[j] || '';
        //no need to increase new cursor position if formatted value does not have those characters
        //case inputValue = 1a23 and formattedValue =  123
        if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) continue;

        //When we are striping out leading zeros maintain the new cursor position
        //Case inputValue = 00023 and formattedValue = 23;
        if (currentInputChar === '0' && currentFormatChar.match(numRegex) && currentFormatChar !== '0' && inputNumber.length !== formattedNumber.length) continue;

        //we are not using currentFormatChar because j can change here
        while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
          j++;
        }j++;
      }

      if (typeof format === 'string' && !stateValue) {
        //set it to the maximum value so it goes after the last number
        j = formattedValue.length;
      }

      //correct caret position if its outside of editable area
      j = this.correctCaretPosition(formattedValue, j);

      return j;
    }
    /** caret specific methods ends **/

    /** methods to remove formattting **/

  }, {
    key: 'removePrefixAndSuffix',
    value: function removePrefixAndSuffix(val) {
      var _props3 = this.props,
          format = _props3.format,
          prefix = _props3.prefix,
          suffix = _props3.suffix;

      //remove prefix and suffix

      if (!format && val) {
        var isNegative = val[0] === '-';

        //remove negation sign
        if (isNegative) val = val.substring(1, val.length);

        //remove prefix
        val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val;

        //remove suffix
        var suffixLastIndex = val.lastIndexOf(suffix);
        val = suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length ? val.substring(0, suffixLastIndex) : val;

        //add negation sign back
        if (isNegative) val = '-' + val;
      }

      return val;
    }
  }, {
    key: 'removePatternFormatting',
    value: function removePatternFormatting(val) {
      var format = this.props.format;

      var formatArray = format.split('#').filter(function (str) {
        return str !== '';
      });
      var start = 0;
      var numStr = '';

      for (var i = 0, ln = formatArray.length; i <= ln; i++) {
        var part = formatArray[i] || '';

        //if i is the last fragment take the index of end of the value
        //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##
        var index = i === ln ? val.length : val.indexOf(part, start);

        /* in any case if we don't find the pattern part in the value assume the val as numeric string
        This will be also in case if user has started typing, in any other case it will not be -1
        unless wrong prop value is provided */
        if (index === -1) {
          numStr = val;
          break;
        } else {
          numStr += val.substring(start, index);
          start = index + part.length;
        }
      }

      return (numStr.match(/\d/g) || []).join('');
    }
  }, {
    key: 'removeFormatting',
    value: function removeFormatting(val) {
      var _props4 = this.props,
          format = _props4.format,
          removeFormatting = _props4.removeFormatting;

      if (!val) return val;

      if (!format) {
        val = this.removePrefixAndSuffix(val);
        val = this.getFloatString(val);
      } else if (typeof format === 'string') {
        val = this.removePatternFormatting(val);
      } else if (typeof removeFormatting === 'function') {
        //condition need to be handled if format method is provide,
        val = removeFormatting(val);
      } else {
        val = (val.match(/\d/g) || []).join('');
      }
      return val;
    }
    /** methods to remove formattting end **/

    /*** format specific methods start ***/
    /**
     * Format when # based string is provided
     * @param  {string} numStr Numeric String
     * @return {string}        formatted Value
     */

  }, {
    key: 'formatWithPattern',
    value: function formatWithPattern(numStr) {
      var format = this.props.format;

      var hashCount = 0;
      var formattedNumberAry = format.split('');
      for (var i = 0, ln = format.length; i < ln; i++) {
        if (format[i] === '#') {
          formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
          hashCount += 1;
        }
      }
      return formattedNumberAry.join('');
    }
    /**
     * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
     * @return {string} formatted Value
     */

  }, {
    key: 'formatAsNumber',
    value: function formatAsNumber(numStr) {
      var _props5 = this.props,
          decimalScale = _props5.decimalScale,
          fixedDecimalScale = _props5.fixedDecimalScale,
          prefix = _props5.prefix,
          suffix = _props5.suffix,
          allowNegative = _props5.allowNegative;

      var _getSeparators4 = this.getSeparators(),
          thousandSeparator = _getSeparators4.thousandSeparator,
          decimalSeparator = _getSeparators4.decimalSeparator;

      var hasDecimalSeparator = numStr.indexOf('.') !== -1 || decimalScale && fixedDecimalScale;

      var _splitDecimal = (0, _utils.splitDecimal)(numStr, allowNegative),
          beforeDecimal = _splitDecimal.beforeDecimal,
          afterDecimal = _splitDecimal.afterDecimal,
          addNegation = _splitDecimal.addNegation; // eslint-disable-line prefer-const

      //apply decimal precision if its defined


      if (decimalScale !== undefined) afterDecimal = (0, _utils.limitToScale)(afterDecimal, decimalScale, fixedDecimalScale);

      if (thousandSeparator) {
        beforeDecimal = beforeDecimal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + thousandSeparator);
      }

      //add prefix and suffix
      if (prefix) beforeDecimal = prefix + beforeDecimal;
      if (suffix) afterDecimal = afterDecimal + suffix;

      //restore negation sign
      if (addNegation) beforeDecimal = '-' + beforeDecimal;

      numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || '') + afterDecimal;

      return numStr;
    }
  }, {
    key: 'formatNumString',
    value: function formatNumString() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _props6 = this.props,
          format = _props6.format,
          allowEmptyFormatting = _props6.allowEmptyFormatting;

      var formattedValue = value;

      if (value === '' && !allowEmptyFormatting) {
        formattedValue = '';
      } else if (value === '-' && !format) {
        formattedValue = '-';
        value = '';
      } else if (typeof format === 'string') {
        formattedValue = this.formatWithPattern(formattedValue);
      } else if (typeof format === 'function') {
        formattedValue = format(formattedValue);
      } else {
        formattedValue = this.formatAsNumber(formattedValue);
      }

      return formattedValue;
    }
  }, {
    key: 'formatValueProp',
    value: function formatValueProp() {
      var _props7 = this.props,
          format = _props7.format,
          decimalScale = _props7.decimalScale,
          fixedDecimalScale = _props7.fixedDecimalScale,
          allowEmptyFormatting = _props7.allowEmptyFormatting;
      var _props8 = this.props,
          value = _props8.value,
          isNumericString = _props8.isNumericString;


      var isNonNumericFalsy = !value && value !== 0;

      if (isNonNumericFalsy && allowEmptyFormatting) {
        value = '';
      }

      // if value is not defined return empty string
      if (isNonNumericFalsy && !allowEmptyFormatting) return '';

      if (typeof value === 'number') {
        value = value.toString();
        isNumericString = true;
      }

      //round the number based on decimalScale
      //format only if non formatted value is provided
      if (isNumericString && !format && typeof decimalScale === 'number') {
        value = (0, _utils.roundToPrecision)(value, decimalScale, fixedDecimalScale);
      }

      var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);

      return formattedValue;
    }
  }, {
    key: 'formatNegation',
    value: function formatNegation() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var allowNegative = this.props.allowNegative;

      var negationRegex = new RegExp('(-)');
      var doubleNegationRegex = new RegExp('(-)(.)*(-)');

      // Check number has '-' value
      var hasNegation = negationRegex.test(value);

      // Check number has 2 or more '-' values
      var removeNegation = doubleNegationRegex.test(value);

      //remove negation
      value = value.replace(/-/g, '');

      if (hasNegation && !removeNegation && allowNegative) {
        value = '-' + value;
      }

      return value;
    }
  }, {
    key: 'formatInput',
    value: function formatInput() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var format = this.props.format;

      //format negation only if we are formatting as number

      if (!format) {
        value = this.formatNegation(value);
      }

      //remove formatting from number
      value = this.removeFormatting(value);

      return this.formatNumString(value);
    }

    /*** format specific methods end ***/

  }, {
    key: 'isCharacterAFormat',
    value: function isCharacterAFormat(caretPos, value) {
      var _props9 = this.props,
          format = _props9.format,
          prefix = _props9.prefix,
          suffix = _props9.suffix,
          decimalScale = _props9.decimalScale,
          fixedDecimalScale = _props9.fixedDecimalScale;

      var _getSeparators5 = this.getSeparators(),
          decimalSeparator = _getSeparators5.decimalSeparator;

      //check within format pattern


      if (typeof format === 'string' && format[caretPos] !== '#') return true;

      //check in number format
      if (!format && (caretPos < prefix.length || caretPos >= value.length - suffix.length || decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator)) {
        return true;
      }

      return false;
    }
  }, {
    key: 'checkIfFormatGotDeleted',
    value: function checkIfFormatGotDeleted(start, end, value) {
      for (var i = start; i < end; i++) {
        if (this.isCharacterAFormat(i, value)) return true;
      }
      return false;
    }

    /**
     * This will check if any formatting got removed by the delete or backspace and reset the value
     * It will also work as fallback if android chome keyDown handler does not work
     **/

  }, {
    key: 'correctInputValue',
    value: function correctInputValue(caretPos, lastValue, value) {
      var _props10 = this.props,
          format = _props10.format,
          decimalSeparator = _props10.decimalSeparator,
          allowNegative = _props10.allowNegative;

      var lastNumStr = this.state.numAsString || '';
      var _selectionBeforeInput = this.selectionBeforeInput,
          selectionStart = _selectionBeforeInput.selectionStart,
          selectionEnd = _selectionBeforeInput.selectionEnd;

      var _findChangedIndex = (0, _utils.findChangedIndex)(lastValue, value),
          start = _findChangedIndex.start,
          end = _findChangedIndex.end;

      /* don't do anyhting if something got added,
       or if value is empty string (when whole input is cleared)
       or whole input is replace with a number
      */


      if (value.length > lastValue.length || !value.length || start === end || start === 0 && end === lastValue.length || selectionStart === 0 && selectionEnd === lastValue.length) {
        return value;
      }

      //if format got deleted reset the value to last value
      if (this.checkIfFormatGotDeleted(start, end, lastValue)) {
        value = lastValue;
      }

      //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
      //clear all numbers in such case while keeping the - sign
      if (!format) {
        var numericString = this.removeFormatting(value);

        var _splitDecimal2 = (0, _utils.splitDecimal)(numericString, allowNegative),
            beforeDecimal = _splitDecimal2.beforeDecimal,
            afterDecimal = _splitDecimal2.afterDecimal,
            addNegation = _splitDecimal2.addNegation; // eslint-disable-line prefer-const

        //clear only if something got deleted


        var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;
        if (numericString.length < lastNumStr.length && isBeforeDecimalPoint && beforeDecimal === '' && !parseFloat(afterDecimal)) {
          return addNegation ? '-' : '';
        }
      }

      return value;
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      e.persist();
      var el = e.target;
      var inputValue = el.value;
      var state = this.state,
          props = this.props;
      var isAllowed = props.isAllowed;

      var lastValue = state.value || '';

      /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
      var currentCaretPosition = Math.max(el.selectionStart, el.selectionEnd);

      inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);

      var formattedValue = this.formatInput(inputValue) || '';
      var numAsString = this.removeFormatting(formattedValue);

      var valueObj = this.getValueObject(formattedValue, numAsString);

      if (!isAllowed(valueObj)) {
        formattedValue = lastValue;
      }

      //set the value imperatively, this is required for IE fix
      el.value = formattedValue;

      //get the caret position
      var caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);

      //set caret position
      this.setPatchedCaretPosition(el, caretPos, formattedValue);

      //change the state
      if (formattedValue !== lastValue) {
        this.setState({ value: formattedValue, numAsString: numAsString }, function () {
          props.onValueChange(valueObj, e);
          props.onChange(e);
        });
      } else {
        props.onChange(e);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var _this2 = this;

      var props = this.props,
          state = this.state;
      var format = props.format,
          onBlur = props.onBlur;
      var numAsString = state.numAsString;

      var lastValue = state.value;
      if (!format) {
        numAsString = (0, _utils.fixLeadingZero)(numAsString);
        var formattedValue = this.formatNumString(numAsString);

        //change the state
        if (formattedValue !== lastValue) {
          // the event needs to be persisted because its properties can be accessed in an asynchronous way
          e.persist();
          this.setState({ value: formattedValue, numAsString: numAsString }, function () {
            var valueObj = _this2.getValueObject(formattedValue, numAsString);
            props.onValueChange(valueObj, e);
            onBlur(e);
          });
          return;
        }
      }
      onBlur(e);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      var _this3 = this;

      var el = e.target;
      var key = e.key;
      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          _el$value = el.value,
          value = _el$value === undefined ? '' : _el$value;

      var expectedCaretPosition = void 0;
      var _props11 = this.props,
          decimalScale = _props11.decimalScale,
          fixedDecimalScale = _props11.fixedDecimalScale,
          prefix = _props11.prefix,
          suffix = _props11.suffix,
          format = _props11.format,
          onKeyDown = _props11.onKeyDown,
          onValueChange = _props11.onValueChange;

      var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
      var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
      var negativeRegex = new RegExp('-');
      var isPatternFormat = typeof format === 'string';

      this.selectionBeforeInput = {
        selectionStart: selectionStart,
        selectionEnd: selectionEnd

        //Handle backspace and delete against non numerical/decimal characters or arrow keys
      };if (key === 'ArrowLeft' || key === 'Backspace') {
        expectedCaretPosition = selectionStart - 1;
      } else if (key === 'ArrowRight') {
        expectedCaretPosition = selectionStart + 1;
      } else if (key === 'Delete') {
        expectedCaretPosition = selectionStart;
      }

      //if expectedCaretPosition is not set it means we don't want to Handle keyDown
      //also if multiple characters are selected don't handle
      if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
        onKeyDown(e);
        return;
      }

      var newCaretPosition = expectedCaretPosition;
      var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
      var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        var direction = key === 'ArrowLeft' ? 'left' : 'right';
        newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
      } else if (key === 'Delete' && !numRegex.test(value[expectedCaretPosition]) && !negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
          newCaretPosition++;
        }
      } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
        /* NOTE: This is special case when backspace is pressed on a 
        negative value while the cursor position is after prefix. We can't handle it on onChange because
        we will not have any information of keyPress
        */
        if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
          var newValue = value.substring(1);
          var _numAsString2 = this.removeFormatting(newValue);
          var valueObj = this.getValueObject(newValue, _numAsString2);

          this.setState({ value: newValue, numAsString: _numAsString2 }, function () {
            _this3.setPatchedCaretPosition(el, newCaretPosition, newValue);
            onValueChange(valueObj, e);
          });
        } else if (!negativeRegex.test(value[expectedCaretPosition])) {
          while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
            newCaretPosition--;
          }
          newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
        }
      }

      if (newCaretPosition !== expectedCaretPosition || expectedCaretPosition < leftBound || expectedCaretPosition > rightBound) {
        e.preventDefault();
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }

      /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
              Remove this when you find different solution */
      if (e.isUnitTestRun) {
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }

      this.props.onKeyDown(e);
    }

    /** required to handle the caret position when click anywhere within the input **/

  }, {
    key: 'onMouseUp',
    value: function onMouseUp(e) {
      var el = e.target;

      /** 
       * NOTE: we have to give default value for value as in case when custom input is provided 
       * value can come as undefined when nothing is provided on value prop.
      */
      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          _el$value2 = el.value,
          value = _el$value2 === undefined ? '' : _el$value2;


      if (selectionStart === selectionEnd) {
        var caretPosition = this.correctCaretPosition(value, selectionStart);
        if (caretPosition !== selectionStart) {
          this.setPatchedCaretPosition(el, caretPosition, value);
        }
      }

      this.props.onMouseUp(e);
    }
  }, {
    key: 'onFocus',
    value: function onFocus(e) {
      var _this4 = this;

      // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
      // (onFocus event target selectionStart is always 0 before setTimeout)
      e.persist();
      setTimeout(function () {
        var el = e.target;
        var selectionStart = el.selectionStart,
            _el$value3 = el.value,
            value = _el$value3 === undefined ? '' : _el$value3;


        var caretPosition = _this4.correctCaretPosition(value, selectionStart);
        if (caretPosition !== selectionStart) {
          _this4.setPatchedCaretPosition(el, caretPosition, value);
        }

        _this4.props.onFocus(e);
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props12 = this.props,
          type = _props12.type,
          displayType = _props12.displayType,
          customInput = _props12.customInput,
          renderText = _props12.renderText,
          getInputRef = _props12.getInputRef;
      var value = this.state.value;


      var otherProps = (0, _utils.omit)(this.props, propTypes);

      var inputProps = (0, _extends3.default)({}, otherProps, {
        type: type,
        value: value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onMouseUp: this.onMouseUp,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      });

      if (displayType === 'text') {
        return renderText ? renderText(value) || null : _react2.default.createElement(
          'span',
          (0, _extends3.default)({}, otherProps, { ref: getInputRef }),
          value
        );
      } else if (customInput) {
        var CustomInput = customInput;
        return _react2.default.createElement(CustomInput, inputProps);
      }

      return _react2.default.createElement('input', (0, _extends3.default)({}, inputProps, {
        ref: getInputRef
      }));
    }
  }]);
  return NumberFormat;
}(_react2.default.Component);

NumberFormat.propTypes = propTypes;
NumberFormat.defaultProps = defaultProps;

module.exports = NumberFormat;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(146);

var _keys2 = _interopRequireDefault(_keys);

exports.noop = noop;
exports.returnTrue = returnTrue;
exports.charIsNumber = charIsNumber;
exports.escapeRegExp = escapeRegExp;
exports.splitDecimal = splitDecimal;
exports.fixLeadingZero = fixLeadingZero;
exports.limitToScale = limitToScale;
exports.roundToPrecision = roundToPrecision;
exports.omit = omit;
exports.setCaretPosition = setCaretPosition;
exports.findChangedIndex = findChangedIndex;
exports.clamp = clamp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// basic noop function
function noop() {}
function returnTrue() {
  return true;
}

function charIsNumber(char) {
  return !!(char || '').match(/\d/);
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

//spilt a float number into different parts beforeDecimal, afterDecimal, and negation
function splitDecimal(numStr) {
  var allowNegative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');

  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';

  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation
  };
}

function fixLeadingZero(numStr) {
  if (!numStr) return numStr;
  var isNegative = numStr[0] === '-';
  if (isNegative) numStr = numStr.substring(1, numStr.length);
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';

  return '' + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? '.' + afterDecimal : '');
}

/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */
function limitToScale(numStr, scale, fixedDecimalScale) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';
  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }
  return str;
}

/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */
function roundToPrecision(numStr, scale, fixedDecimalScale) {
  //if number is empty don't do anything return empty string
  if (['', '-'].includes(numStr)) return numStr;

  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;

  var _splitDecimal = splitDecimal(numStr),
      beforeDecimal = _splitDecimal.beforeDecimal,
      afterDecimal = _splitDecimal.afterDecimal,
      hasNagation = _splitDecimal.hasNagation;

  var roundedDecimalParts = parseFloat('0.' + (afterDecimal || '0')).toFixed(scale).split('.');
  var intPart = beforeDecimal.split('').reverse().reduce(function (roundedStr, current, idx) {
    if (roundedStr.length > idx) {
      return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
    }
    return current + roundedStr;
  }, roundedDecimalParts[0]);

  var decimalPart = limitToScale(roundedDecimalParts[1] || '', Math.min(scale, afterDecimal.length), fixedDecimalScale);
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return '' + negation + intPart + decimalSeparator + decimalPart;
}

function omit(obj, keyMaps) {
  var filteredObj = {};
  (0, _keys2.default)(obj).forEach(function (key) {
    if (!keyMaps[key]) filteredObj[key] = obj[key];
  });
  return filteredObj;
}

/** set the caret positon in an input field **/
function setCaretPosition(el, caretPos) {
  el.value = el.value;
  // ^ this is used to not only get "focus", but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)
  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    }
    // (el.selectionStart === 0 added for Firefox bug)
    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    }

    // fail city, fortunately this never happens (as far as I've tested) :)
    el.focus();
    return false;
  }
}

/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/
function findChangedIndex(prevValue, newValue) {
  var i = 0,
      j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;
  while (prevValue[i] === newValue[i] && i < prevLength) {
    i++;
  } //check what has been changed from last
  while (prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] && newLength - j > i && prevLength - j > i) {
    j++;
  }

  return { start: i, end: prevLength - j };
}

/*
  Returns a number whose value is limited to the given range
*/
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncCreatable", function() { return AsyncCreatableSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creatable", function() { return CreatableSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMenuRenderer", function() { return menuRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultArrowRenderer", function() { return arrowRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultClearRenderer", function() { return clearRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFilterOptions", function() { return filterOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_input_autosize__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_input_autosize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_input_autosize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);






var arrowRenderer = function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('span', {
		className: 'Select-arrow',
		onMouseDown: onMouseDown
	});
};

arrowRenderer.propTypes = {
	onMouseDown: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};

var clearRenderer = function clearRenderer() {
	return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
};

var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
};

var trim = function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var isValid = function isValid(value) {
	return typeof value !== 'undefined' && value !== null && value !== '';
};

var filterOptions = function filterOptions(options, filterValue, excludeOptions, props) {
	if (props.ignoreAccents) {
		filterValue = stripDiacritics(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (props.trimFilter) {
		filterValue = trim(filterValue);
	}

	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
		return i[props.valueKey];
	});

	return options.filter(function (option) {
		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
		if (props.filterOption) return props.filterOption.call(undefined, option, filterValue);
		if (!filterValue) return true;

		var value = option[props.valueKey];
		var label = option[props.labelKey];
		var hasValue = isValid(value);
		var hasLabel = isValid(label);

		if (!hasValue && !hasLabel) {
			return false;
		}

		var valueTest = hasValue ? String(value) : null;
		var labelTest = hasLabel ? String(label) : null;

		if (props.ignoreAccents) {
			if (valueTest && props.matchProp !== 'label') valueTest = stripDiacritics(valueTest);
			if (labelTest && props.matchProp !== 'value') labelTest = stripDiacritics(labelTest);
		}

		if (props.ignoreCase) {
			if (valueTest && props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (labelTest && props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}

		return props.matchPos === 'start' ? valueTest && props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || labelTest && props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : valueTest && props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || labelTest && props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
};

var menuRenderer = function menuRenderer(_ref) {
	var focusedOption = _ref.focusedOption,
	    focusOption = _ref.focusOption,
	    inputValue = _ref.inputValue,
	    instancePrefix = _ref.instancePrefix,
	    onFocus = _ref.onFocus,
	    onOptionRef = _ref.onOptionRef,
	    onSelect = _ref.onSelect,
	    optionClassName = _ref.optionClassName,
	    optionComponent = _ref.optionComponent,
	    optionRenderer = _ref.optionRenderer,
	    options = _ref.options,
	    removeValue = _ref.removeValue,
	    selectValue = _ref.selectValue,
	    valueArray = _ref.valueArray,
	    valueKey = _ref.valueKey;

	var Option = optionComponent;

	return options.map(function (option, i) {
		var isSelected = valueArray && valueArray.some(function (x) {
			return x[valueKey] === option[valueKey];
		});
		var isFocused = option === focusedOption;
		var optionClass = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
			Option,
			{
				className: optionClass,
				focusOption: focusOption,
				inputValue: inputValue,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function ref(_ref2) {
					onOptionRef(_ref2, isFocused);
				},
				removeValue: removeValue,
				selectValue: selectValue
			},
			optionRenderer(option, i, inputValue)
		);
	});
};

menuRenderer.propTypes = {
	focusOption: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	focusedOption: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
	inputValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	instancePrefix: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	onFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	onOptionRef: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	onSelect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	optionClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
	optionComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	optionRenderer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
	removeValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	selectValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	valueArray: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
	valueKey: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

var blockEvent = (function (event) {
	event.preventDefault();
	event.stopPropagation();
	if (event.target.tagName !== 'A' || !('href' in event.target)) {
		return;
	}
	if (event.target.target) {
		window.open(event.target.href, event.target.target);
	} else {
		window.location.href = event.target.href;
	}
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Option = function (_React$Component) {
	inherits(Option, _React$Component);

	function Option(props) {
		classCallCheck(this, Option);

		var _this = possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		return _this;
	}

	createClass(Option, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'onFocus',
		value: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    option = _props.option,
			    instancePrefix = _props.instancePrefix,
			    optionIndex = _props.optionIndex;

			var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(this.props.className, option.className);

			return option.disabled ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'div',
				{ className: className,
					onMouseDown: blockEvent,
					onClick: blockEvent },
				this.props.children
			) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					'aria-label': option.label,
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	}]);
	return Option;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Option.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
	className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // className (based on mouse position)
	instancePrefix: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired, // unique prefix for the ids (used for aria)
	isDisabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // the option is disabled
	isFocused: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // the option is focused
	isSelected: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // the option is selected
	onFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // method to handle mouseEnter on option element
	onSelect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // method to handle click on option element
	onUnfocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // method to handle mouseLeave on option element
	option: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired, // object that is base for that option
	optionIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number // index of the option, used to generate unique ids for aria
};

var Value = function (_React$Component) {
	inherits(Value, _React$Component);

	function Value(props) {
		classCallCheck(this, Value);

		var _this = possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		return _this;
	}

	createClass(Value, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		}
	}, {
		key: 'onRemove',
		value: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		}
	}, {
		key: 'handleTouchEndRemove',
		value: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.onRemove(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'renderRemoveIcon',
		value: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'\xD7'
			);
		}
	}, {
		key: 'renderLabel',
		value: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('Select-value', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	}]);
	return Value;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Value.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
	disabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // disabled prop passed to ReactSelect
	id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // Unique id for the value - used for aria
	onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // method to handle click on value label
	onRemove: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // method to handle removal of the value
	value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired // the option object for this value
};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/react-select
*/
var stringifyValue = function stringifyValue(value) {
	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node]);
var stringOrNumber = __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number]);

var instanceId = 1;

var shouldShowValue = function shouldShowValue(state, props) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	if (!inputValue) return true;

	if (!onSelectResetsInput) {
		return !(!isFocused && isPseudoFocused || isFocused && !isPseudoFocused);
	}

	return false;
};

var shouldShowPlaceholder = function shouldShowPlaceholder(state, props, isOpen) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	return !inputValue || !onSelectResetsInput && !isOpen && !isPseudoFocused && !isFocused;
};

/**
 * Retrieve a value from the given options and valueKey
 * @param {String|Number|Array} value	- the selected value(s)
 * @param {Object}		 props	- the Select component's props (or nextProps)
 */
var expandValue = function expandValue(value, props) {
	var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
	var options = props.options,
	    valueKey = props.valueKey;

	if (!options) return;
	for (var i = 0; i < options.length; i++) {
		if (String(options[i][valueKey]) === String(value)) return options[i];
	}
};

var handleRequired = function handleRequired(value, multi) {
	if (!value) return true;
	return multi ? value.length === 0 : Object.keys(value).length === 0;
};

var Select$1 = function (_React$Component) {
	inherits(Select, _React$Component);

	function Select(props) {
		classCallCheck(this, Select);

		var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

		['clearValue', 'focusOption', 'getOptionLabel', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleTouchMove', 'handleTouchOutside', 'handleTouchStart', 'handleValueClick', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
			return _this[fn] = _this[fn].bind(_this);
		});

		_this.state = {
			inputValue: '',
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false,
			required: false
		};
		return _this;
	}

	createClass(Select, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);

			if (this.props.required) {
				this.setState({
					required: handleRequired(valueArray[0], this.props.multi)
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (typeof this.props.autofocus !== 'undefined' && typeof console !== 'undefined') {
				console.warn('Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0');
			}
			if (this.props.autoFocus || this.props.autofocus) {
				this.focus();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);

			if (nextProps.required) {
				this.setState({
					required: handleRequired(valueArray[0], nextProps.multi)
				});
			} else if (this.props.required) {
				// Used to be required but it's not any more
				this.setState({ required: false });
			}

			if (this.state.inputValue && this.props.value !== nextProps.value && nextProps.onSelectResetsInput) {
				this.setState({ inputValue: this.handleInputValueChange('') });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["findDOMNode"])(this.focused);
				var menuNode = Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["findDOMNode"])(this.menu);

				var scrollTop = menuNode.scrollTop;
				var scrollBottom = scrollTop + menuNode.offsetHeight;
				var optionTop = focusedOptionNode.offsetTop;
				var optionBottom = optionTop + focusedOptionNode.offsetHeight;

				if (scrollTop > optionTop || scrollBottom < optionBottom) {
					menuNode.scrollTop = focusedOptionNode.offsetTop;
				}

				// We still set hasScrolledToOption to true even if we didn't
				// actually need to scroll, as we've still confirmed that the
				// option is in view.
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}

			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["findDOMNode"])(this.focused);
				var menuDOM = Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["findDOMNode"])(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				} else if (focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
			if (prevState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(this.state.isOpen);
				var handler = this.state.isOpen ? this.props.onOpen : this.props.onClose;
				handler && handler();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.toggleTouchOutsideEvent(false);
		}
	}, {
		key: 'toggleTouchOutsideEvent',
		value: function toggleTouchOutsideEvent(enabled) {
			if (enabled) {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.addEventListener('touchstart', this.handleTouchOutside);
				}
			} else {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.removeEventListener('touchstart', this.handleTouchOutside);
				}
			}
		}
	}, {
		key: 'handleTouchOutside',
		value: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (!this.input) return;
			this.input.focus();
		}
	}, {
		key: 'blurInput',
		value: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchEndClearValue',
		value: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Clear the value
			this.clearValue(event);
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (event.target.tagName === 'INPUT') {
				if (!this.state.isFocused) {
					this._openAfterFocus = this.props.openOnClick;
					this.focus();
				} else if (!this.state.isOpen) {
					this.setState({
						isOpen: true,
						isPseudoFocused: false
					});
				}

				return;
			}

			// prevent default event handlers
			event.preventDefault();

			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				// This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen
				});
			}

			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();

				var input = this.input;
				var toOpen = true;

				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}

				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';

				if (this._focusAfterClear) {
					toOpen = false;
					this._focusAfterClear = false;
				}

				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: toOpen,
					isPseudoFocused: false,
					focusedOption: null
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = this.props.openOnClick;
				this.focus();
				this.setState({ focusedOption: null });
			}
		}
	}, {
		key: 'handleMouseDownOnArrow',
		value: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (this.state.isOpen) {
				// prevent default event handlers
				event.stopPropagation();
				event.preventDefault();
				// close the menu
				this.closeMenu();
			} else {
				// If the menu isn't open, let the event bubble to the main handleMouseDown
				this.setState({
					isOpen: true
				});
			}
		}
	}, {
		key: 'handleMouseDownOnMenu',
		value: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.stopPropagation();
			event.preventDefault();

			this._openAfterFocus = true;
			this.focus();
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					inputValue: this.handleInputValueChange(''),
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			}
			this.hasScrolledToOption = false;
		}
	}, {
		key: 'handleInputFocus',
		value: function handleInputFocus(event) {
			if (this.props.disabled) return;

			var toOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			toOpen = this._focusAfterClear ? false : toOpen; //if focus happens after clear values, don't open dropdown yet.

			if (this.props.onFocus) {
				this.props.onFocus(event);
			}

			this.setState({
				isFocused: true,
				isOpen: !!toOpen
			});

			this._focusAfterClear = false;
			this._openAfterFocus = false;
		}
	}, {
		key: 'handleInputBlur',
		value: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = this.handleInputValueChange('');
			}
			this.setState(onBlurredState);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var newInputValue = event.target.value;

			if (this.state.inputValue !== event.target.value) {
				newInputValue = this.handleInputValueChange(newInputValue);
			}

			this.setState({
				inputValue: newInputValue,
				isOpen: true,
				isPseudoFocused: false
			});
		}
	}, {
		key: 'setInputValue',
		value: function setInputValue(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			this.setState({
				inputValue: newValue
			});
		}
	}, {
		key: 'handleInputValueChange',
		value: function handleInputValueChange(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			return newValue;
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (this.props.disabled) return;

			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}

			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						break;
					}
					event.preventDefault();
					this.selectFocusedOption();
					break;
				case 13:
					// enter
					event.preventDefault();
					event.stopPropagation();
					if (this.state.isOpen) {
						this.selectFocusedOption();
					} else {
						this.focusNextOption();
					}
					break;
				case 27:
					// escape
					event.preventDefault();
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 32:
					// space
					if (this.props.searchable) {
						break;
					}
					event.preventDefault();
					if (!this.state.isOpen) {
						this.focusNextOption();
						break;
					}
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 38:
					// up
					event.preventDefault();
					this.focusPreviousOption();
					break;
				case 40:
					// down
					event.preventDefault();
					this.focusNextOption();
					break;
				case 33:
					// page up
					event.preventDefault();
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					event.preventDefault();
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusStartOption();
					break;
				case 46:
					// delete
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
			}
		}
	}, {
		key: 'handleValueClick',
		value: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		}
	}, {
		key: 'handleMenuScroll',
		value: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;

			if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
				this.props.onMenuScrollToBottom();
			}
		}
	}, {
		key: 'getOptionLabel',
		value: function getOptionLabel(op) {
			return op[this.props.labelKey];
		}

		/**
   * Turns a value into an array from the given options
   * @param {String|Number|Array} value		- the value of the select input
   * @param {Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
   * @returns	{Array}	the value of the select represented in an array
   */

	}, {
		key: 'getValueArray',
		value: function getValueArray(value) {
			var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') {
					value = value.split(props.delimiter);
				}
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this2 = this;

			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (this.props.required) {
				var required = handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.simpleValue && value) {
				value = this.props.multi ? value.map(function (i) {
					return i[_this2.props.valueKey];
				}).join(this.props.delimiter) : value[this.props.valueKey];
			}
			if (this.props.onChange) {
				this.props.onChange(value);
			}
		}
	}, {
		key: 'selectValue',
		value: function selectValue(value) {
			var _this3 = this;

			// NOTE: we actually add/set the value in a callback to make sure the
			// input value is empty to avoid styling issues in Chrome
			if (this.props.closeOnSelect) {
				this.hasScrolledToOption = false;
			}
			var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
			if (this.props.multi) {
				this.setState({
					focusedIndex: null,
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect
				}, function () {
					var valueArray = _this3.getValueArray(_this3.props.value);
					if (valueArray.some(function (i) {
						return i[_this3.props.valueKey] === value[_this3.props.valueKey];
					})) {
						_this3.removeValue(value);
					} else {
						_this3.addValue(value);
					}
				});
			} else {
				this.setState({
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect,
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this3.setValue(value);
				});
			}
		}
	}, {
		key: 'addValue',
		value: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		}
	}, {
		key: 'popValue',
		value: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
		}
	}, {
		key: 'removeValue',
		value: function removeValue(value) {
			var _this4 = this;

			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i[_this4.props.valueKey] !== value[_this4.props.valueKey];
			}));
			this.focus();
		}
	}, {
		key: 'clearValue',
		value: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.preventDefault();

			this.setValue(this.getResetValue());
			this.setState({
				inputValue: this.handleInputValueChange(''),
				isOpen: false
			}, this.focus);

			this._focusAfterClear = true;
		}
	}, {
		key: 'getResetValue',
		value: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		}
	}, {
		key: 'focusOption',
		value: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		}
	}, {
		key: 'focusNextOption',
		value: function focusNextOption() {
			this.focusAdjacentOption('next');
		}
	}, {
		key: 'focusPreviousOption',
		value: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		}
	}, {
		key: 'focusPageUpOption',
		value: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		}
	}, {
		key: 'focusPageDownOption',
		value: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		}
	}, {
		key: 'focusStartOption',
		value: function focusStartOption() {
			this.focusAdjacentOption('start');
		}
	}, {
		key: 'focusEndOption',
		value: function focusEndOption() {
			this.focusAdjacentOption('end');
		}
	}, {
		key: 'focusAdjacentOption',
		value: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				var newState = {
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null),
					isOpen: true
				};
				if (this.props.onSelectResetsInput) {
					newState.inputValue = '';
				}
				this.setState(newState);
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var _potentialIndex = focusedIndex + this.props.pageSize;
				if (_potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = _potentialIndex;
				}
			}

			if (focusedIndex === -1) {
				focusedIndex = 0;
			}

			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		}
	}, {
		key: 'getFocusedOption',
		value: function getFocusedOption() {
			return this._focusedOption;
		}
	}, {
		key: 'selectFocusedOption',
		value: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		}
	}, {
		key: 'renderLoading',
		value: function renderLoading() {
			if (!this.props.isLoading) return;
			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('span', { className: 'Select-loading' })
			);
		}
	}, {
		key: 'renderValue',
		value: function renderValue(valueArray, isOpen) {
			var _this5 = this;

			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				var showPlaceholder = shouldShowPlaceholder(this.state, this.props, isOpen);
				return showPlaceholder ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
						ValueComponent,
						{
							disabled: _this5.props.disabled || value.clearableValue === false,
							id: _this5._instancePrefix + '-value-' + i,
							instancePrefix: _this5._instancePrefix,
							key: 'value-' + i + '-' + value[_this5.props.valueKey],
							onClick: onClick,
							onRemove: _this5.removeValue,
							placeholder: _this5.props.placeholder,
							value: value
						},
						renderLabel(value, i),
						__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
							'span',
							{ className: 'Select-aria-only' },
							'\xA0'
						)
					);
				});
			} else if (shouldShowValue(this.state, this.props)) {
				if (isOpen) onClick = null;
				return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
					ValueComponent,
					{
						disabled: this.props.disabled,
						id: this._instancePrefix + '-value-item',
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						placeholder: this.props.placeholder,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		}
	}, {
		key: 'renderInput',
		value: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this6 = this;

			var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('Select-input', this.props.inputProps.className);
			var isOpen = this.state.isOpen;

			var ariaOwns = __WEBPACK_IMPORTED_MODULE_1_classnames___default()((_classNames = {}, defineProperty(_classNames, this._instancePrefix + '-list', isOpen), defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

			var value = this.state.inputValue;
			if (value && !this.props.onSelectResetsInput && !this.state.isFocused) {
				// it hides input value when it is not focused and was not reset on select
				value = '';
			}

			var inputProps = _extends({}, this.props.inputProps, {
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-describedby': this.props['aria-describedby'],
				'aria-expanded': '' + isOpen,
				'aria-haspopup': '' + isOpen,
				'aria-label': this.props['aria-label'],
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-owns': ariaOwns,
				className: className,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this6.input = _ref;
				},
				role: 'combobox',
				required: this.state.required,
				tabIndex: this.props.tabIndex,
				value: value
			});

			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}

			if (this.props.disabled || !this.props.searchable) {
				var divProps = objectWithoutProperties(this.props.inputProps, []);


				var _ariaOwns = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(defineProperty({}, this._instancePrefix + '-list', isOpen));
				return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', _extends({}, divProps, {
					'aria-expanded': isOpen,
					'aria-owns': _ariaOwns,
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					'aria-disabled': '' + this.props.disabled,
					'aria-label': this.props['aria-label'],
					'aria-labelledby': this.props['aria-labelledby'],
					className: className,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function ref(_ref2) {
						return _this6.input = _ref2;
					},
					role: 'combobox',
					style: { border: 0, width: 1, display: 'inline-block' },
					tabIndex: this.props.tabIndex || 0
				}));
			}

			if (this.props.autosize) {
				return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_input_autosize___default.a, _extends({ id: this.props.id }, inputProps, { minWidth: '5' }));
			}
			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'div',
				{ className: className, key: 'input-wrap', style: { display: 'inline-block' } },
				__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', _extends({ id: this.props.id }, inputProps))
			);
		}
	}, {
		key: 'renderClear',
		value: function renderClear() {
			var valueArray = this.getValueArray(this.props.value);
			if (!this.props.clearable || !valueArray.length || this.props.disabled || this.props.isLoading) return;
			var ariaLabel = this.props.multi ? this.props.clearAllText : this.props.clearValueText;
			var clear = this.props.clearRenderer();

			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'span',
				{
					'aria-label': ariaLabel,
					className: 'Select-clear-zone',
					onMouseDown: this.clearValue,
					onTouchEnd: this.handleTouchEndClearValue,
					onTouchMove: this.handleTouchMove,
					onTouchStart: this.handleTouchStart,
					title: ariaLabel
				},
				clear
			);
		}
	}, {
		key: 'renderArrow',
		value: function renderArrow() {
			if (!this.props.arrowRenderer) return;

			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

			if (!arrow) {
				return null;
			}

			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions$$1 = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : filterOptions;

				return filterOptions$$1(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					trimFilter: this.props.trimFilter,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		}
	}, {
		key: 'onOptionRef',
		value: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		}
	}, {
		key: 'renderMenu',
		value: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					inputValue: this.state.inputValue,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onOptionRef: this.onOptionRef,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					removeValue: this.removeValue,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey
				});
			} else if (this.props.noResultsText) {
				return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		}
	}, {
		key: 'renderHiddenField',
		value: function renderHiddenField(valueArray) {
			var _this7 = this;

			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this7.props.valueKey]);
				}).join(this.props.delimiter);
				return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', {
					disabled: this.props.disabled,
					name: this.props.name,
					ref: function ref(_ref3) {
						return _this7.value = _ref3;
					},
					type: 'hidden',
					value: value
				});
			}
			return valueArray.map(function (item, index) {
				return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', {
					disabled: _this7.props.disabled,
					key: 'hidden.' + index,
					name: _this7.props.name,
					ref: 'value' + index,
					type: 'hidden',
					value: stringifyValue(item[_this7.props.valueKey])
				});
			});
		}
	}, {
		key: 'getFocusableOptionIndex',
		value: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;

			var valueKey = this.props.valueKey;
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = -1;
				options.some(function (option, index) {
					var isOptionEqual = option[valueKey] === focusedOption[valueKey];
					if (isOptionEqual) {
						focusedOptionIndex = index;
					}
					return isOptionEqual;
				});
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}

			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		}
	}, {
		key: 'renderOuter',
		value: function renderOuter(options, valueArray, focusedOption) {
			var _this8 = this;

			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}

			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'div',
				{ ref: function ref(_ref5) {
						return _this8.menuContainer = _ref5;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
					'div',
					{
						className: 'Select-menu',
						id: this._instancePrefix + '-list',
						onMouseDown: this.handleMouseDownOnMenu,
						onScroll: this.handleMenuScroll,
						ref: function ref(_ref4) {
							return _this8.menu = _ref4;
						},
						role: 'listbox',
						style: this.props.menuStyle,
						tabIndex: -1
					},
					menu
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this9 = this;

			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('Select', this.props.className, {
				'has-value': valueArray.length,
				'is-clearable': this.props.clearable,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'Select--multi': this.props.multi,
				'Select--rtl': this.props.rtl,
				'Select--single': !this.props.multi
			});

			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}

			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				'div',
				{ ref: function ref(_ref7) {
						return _this9.wrapper = _ref7;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
					'div',
					{ ref: function ref(_ref6) {
							return _this9.control = _ref6;
						},
						className: 'Select-control',
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchMove: this.handleTouchMove,
						onTouchStart: this.handleTouchStart,
						style: this.props.style
					},
					__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
						'span',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, valueArray, focusedOption) : null
			);
		}
	}]);
	return Select;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Select$1.propTypes = {
	'aria-describedby': __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // html id(s) of element(s) that should be used to describe this input (for assistive tech)
	'aria-label': __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // aria label (for assistive tech)
	'aria-labelledby': __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // html id of an element that should be used as the label (for assistive tech)
	arrowRenderer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // create the drop-down caret element
	autoBlur: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // automatically blur the component when an option is selected
	autoFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // autofocus the component on mount
	autofocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // deprecated; use autoFocus instead
	autosize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether to enable autosizing or not
	backspaceRemoves: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether backspace removes an item if there is no text input
	backspaceToRemoveMessage: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
	className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // className for the outer element
	clearAllText: stringOrNode, // title for the "clear" control when multi: true
	clearRenderer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // create clearable x element
	clearValueText: stringOrNode, // title for the "clear" control
	clearable: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // should it be possible to reset value
	closeOnSelect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether to close the menu when a value is selected
	deleteRemoves: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether delete removes an item if there is no text input
	delimiter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // delimiter to use to join multiple values for the hidden field value
	disabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether the Select is disabled or not
	escapeClearsValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether escape clears the value when the menu is closed
	filterOption: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // method to filter a single option (option, filterString)
	filterOptions: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // html id to set on the input element for accessibility or tests
	ignoreAccents: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether to strip diacritics when filtering
	ignoreCase: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether to perform case-insensitive filtering
	inputProps: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, // custom attributes for the Input
	inputRenderer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // returns a custom input component
	instanceId: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // set the components instanceId
	isLoading: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether the Select is loading externally or not (such as options being loaded)
	joinValues: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
	labelKey: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // path of the label value in option objects
	matchPos: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // (any|start) match the start or entire string when filtering
	matchProp: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // (any|label|value) which option property to filter on
	menuBuffer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	menuContainerStyle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, // optional style to apply to the menu container
	menuRenderer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // renders a custom menu with options
	menuStyle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, // optional style to apply to the menu
	multi: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // multi-value input
	name: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // generates a hidden <input /> tag with this field name for html forms
	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
	onBlur: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // onBlur handler: function (event) {}
	onBlurResetsInput: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether input is cleared on blur
	onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // onChange handler: function (newValue) {}
	onClose: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // fires when the menu is closed
	onCloseResetsInput: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether input is cleared when menu is closed through the arrow
	onFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // onFocus handler: function (event) {}
	onInputChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // onInputChange handler: function (inputValue) {}
	onInputKeyDown: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // input keyDown handler: function (event) {}
	onMenuScrollToBottom: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	onOpen: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // fires when the menu is opened
	onSelectResetsInput: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether input is cleared on select (works only for multiselect)
	onValueClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // onClick handler for value labels: function (value, event) {}
	openOnClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // boolean to control opening the menu when the control is clicked
	openOnFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // always open options menu on focus
	optionClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // additional class(es) to apply to the <Option /> elements
	optionComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // option component to render in dropdown
	optionRenderer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // optionRenderer: function (option) {}
	options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array, // array of options
	pageSize: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, // number of entries to page when using page up/down keys
	placeholder: stringOrNode, // field placeholder, displayed when there's no value
	removeSelected: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether the selected option is removed from the dropdown on multi selects
	required: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // applies HTML5 required attribute when needed
	resetValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any, // value to use when you clear the control
	rtl: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // set to true in order to use react-select in right-to-left direction
	scrollMenuIntoView: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	searchable: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether to enable searching feature or not
	simpleValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, // optional style to apply to the control
	tabIndex: stringOrNumber, // optional tab index of the control
	tabSelectsValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether to treat tabbing out while focused to be value selection
	trimFilter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // whether to trim whitespace around filter value
	value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any, // initial field value
	valueComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // value component to render
	valueKey: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // path of the label value in option objects
	valueRenderer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // valueRenderer: function (option) {}
	wrapperStyle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object // optional style to apply to the component wrapper
};

Select$1.defaultProps = {
	arrowRenderer: arrowRenderer,
	autosize: true,
	backspaceRemoves: true,
	backspaceToRemoveMessage: 'Press backspace to remove {label}',
	clearable: true,
	clearAllText: 'Clear all',
	clearRenderer: clearRenderer,
	clearValueText: 'Clear value',
	closeOnSelect: true,
	deleteRemoves: true,
	delimiter: ',',
	disabled: false,
	escapeClearsValue: true,
	filterOptions: filterOptions,
	ignoreAccents: true,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	joinValues: false,
	labelKey: 'label',
	matchPos: 'any',
	matchProp: 'any',
	menuBuffer: 0,
	menuRenderer: menuRenderer,
	multi: false,
	noResultsText: 'No results found',
	onBlurResetsInput: true,
	onCloseResetsInput: true,
	onSelectResetsInput: true,
	openOnClick: true,
	optionComponent: Option,
	pageSize: 5,
	placeholder: 'Select...',
	removeSelected: true,
	required: false,
	rtl: false,
	scrollMenuIntoView: true,
	searchable: true,
	simpleValue: false,
	tabSelectsValue: true,
	trimFilter: true,
	valueComponent: Value,
	valueKey: 'value'
};

var propTypes = {
	autoload: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any, // object to use to cache results; set to null/false to disable caching
	children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // strip diacritics when filtering; defaults to true
	ignoreCase: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // perform case-insensitive filtering; defaults to true
	loadOptions: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	loadingPlaceholder: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([// replaces the placeholder while options are loading
	__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node]),
	multi: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // multi-value input
	noResultsText: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([// field noResultsText, displayed when no options come back from the server
	__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node]),
	onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // onChange handler: function (newValue) {}
	onInputChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // optional for keeping track of what is being typed
	options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired, // array of options
	placeholder: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node]),
	searchPromptText: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([// label to prompt for search input
	__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node]),
	value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any // initial field value
};

var defaultCache = {};

var defaultChildren = function defaultChildren(props) {
	return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Select$1, props);
};

var defaultProps = {
	autoload: true,
	cache: defaultCache,
	children: defaultChildren,
	ignoreAccents: true,
	ignoreCase: true,
	loadingPlaceholder: 'Loading...',
	options: [],
	searchPromptText: 'Type to search'
};

var Async = function (_Component) {
	inherits(Async, _Component);

	function Async(props, context) {
		classCallCheck(this, Async);

		var _this = possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

		_this._cache = props.cache === defaultCache ? {} : props.cache;

		_this.state = {
			inputValue: '',
			isLoading: false,
			options: props.options
		};

		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	createClass(Async, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var autoload = this.props.autoload;


			if (autoload) {
				this.loadOptions('');
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options !== this.props.options) {
				this.setState({
					options: nextProps.options
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._callback = null;
		}
	}, {
		key: 'loadOptions',
		value: function loadOptions(inputValue) {
			var _this2 = this;

			var loadOptions = this.props.loadOptions;

			var cache = this._cache;

			if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
				this._callback = null;

				this.setState({
					isLoading: false,
					options: cache[inputValue]
				});

				return;
			}

			var callback = function callback(error, data) {
				var options = data && data.options || [];

				if (cache) {
					cache[inputValue] = options;
				}

				if (callback === _this2._callback) {
					_this2._callback = null;

					_this2.setState({
						isLoading: false,
						options: options
					});
				}
			};

			// Ignore all but the most recent request
			this._callback = callback;

			var promise = loadOptions(inputValue, callback);
			if (promise) {
				promise.then(function (data) {
					return callback(null, data);
				}, function (error) {
					return callback(error);
				});
			}

			if (this._callback && !this.state.isLoading) {
				this.setState({
					isLoading: true
				});
			}
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(inputValue) {
			var _props = this.props,
			    ignoreAccents = _props.ignoreAccents,
			    ignoreCase = _props.ignoreCase,
			    onInputChange = _props.onInputChange;

			var newInputValue = inputValue;

			if (onInputChange) {
				var value = onInputChange(newInputValue);
				// Note: != used deliberately here to catch undefined and null
				if (value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
					newInputValue = '' + value;
				}
			}

			var transformedInputValue = newInputValue;

			if (ignoreAccents) {
				transformedInputValue = stripDiacritics(transformedInputValue);
			}

			if (ignoreCase) {
				transformedInputValue = transformedInputValue.toLowerCase();
			}

			this.setState({ inputValue: newInputValue });
			this.loadOptions(transformedInputValue);

			// Return new input value, but without applying toLowerCase() to avoid modifying the user's view case of the input while typing.
			return newInputValue;
		}
	}, {
		key: 'noResultsText',
		value: function noResultsText() {
			var _props2 = this.props,
			    loadingPlaceholder = _props2.loadingPlaceholder,
			    noResultsText = _props2.noResultsText,
			    searchPromptText = _props2.searchPromptText;
			var _state = this.state,
			    inputValue = _state.inputValue,
			    isLoading = _state.isLoading;


			if (isLoading) {
				return loadingPlaceholder;
			}
			if (inputValue && noResultsText) {
				return noResultsText;
			}
			return searchPromptText;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props,
			    children = _props3.children,
			    loadingPlaceholder = _props3.loadingPlaceholder,
			    placeholder = _props3.placeholder;
			var _state2 = this.state,
			    isLoading = _state2.isLoading,
			    options = _state2.options;


			var props = {
				noResultsText: this.noResultsText(),
				placeholder: isLoading ? loadingPlaceholder : placeholder,
				options: isLoading && loadingPlaceholder ? [] : options,
				ref: function ref(_ref) {
					return _this3.select = _ref;
				}
			};

			return children(_extends({}, this.props, props, {
				isLoading: isLoading,
				onInputChange: this.onInputChange
			}));
		}
	}]);
	return Async;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

var CreatableSelect = function (_React$Component) {
	inherits(CreatableSelect, _React$Component);

	function CreatableSelect(props, context) {
		classCallCheck(this, CreatableSelect);

		var _this = possibleConstructorReturn(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));

		_this.filterOptions = _this.filterOptions.bind(_this);
		_this.menuRenderer = _this.menuRenderer.bind(_this);
		_this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
		_this.onInputChange = _this.onInputChange.bind(_this);
		_this.onOptionSelect = _this.onOptionSelect.bind(_this);
		return _this;
	}

	createClass(CreatableSelect, [{
		key: 'createNewOption',
		value: function createNewOption() {
			var _props = this.props,
			    isValidNewOption = _props.isValidNewOption,
			    newOptionCreator = _props.newOptionCreator,
			    onNewOptionClick = _props.onNewOptionClick,
			    _props$options = _props.options,
			    options = _props$options === undefined ? [] : _props$options;


			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option, options: options });

				// Don't add the same option twice.
				if (_isOptionUnique) {
					if (onNewOptionClick) {
						onNewOptionClick(option);
					} else {
						options.unshift(option);

						this.select.selectValue(option);
					}
				}
			}
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1() {
			var _props2 = this.props,
			    filterOptions$$1 = _props2.filterOptions,
			    isValidNewOption = _props2.isValidNewOption,
			    promptTextCreator = _props2.promptTextCreator;

			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

			var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

			var filteredOptions = filterOptions$$1.apply(undefined, arguments) || [];

			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;


				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});

				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});

				if (_isOptionUnique2) {
					var prompt = promptTextCreator(this.inputValue);

					this._createPlaceholderOption = _newOptionCreator({
						label: prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});

					filteredOptions.unshift(this._createPlaceholderOption);
				}
			}

			return filteredOptions;
		}
	}, {
		key: 'isOptionUnique',
		value: function isOptionUnique(_ref) {
			var option = _ref.option,
			    options = _ref.options;
			var isOptionUnique = this.props.isOptionUnique;


			options = options || this.props.options;

			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		}
	}, {
		key: 'menuRenderer',
		value: function menuRenderer$$1(params) {
			var menuRenderer$$1 = this.props.menuRenderer;


			return menuRenderer$$1(_extends({}, params, {
				onSelect: this.onOptionSelect,
				selectValue: this.onOptionSelect
			}));
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(input) {
			var onInputChange = this.props.onInputChange;

			// This value may be needed in between Select mounts (when this.select is null)

			this.inputValue = input;

			if (onInputChange) {
				this.inputValue = onInputChange(input);
			}

			return this.inputValue;
		}
	}, {
		key: 'onInputKeyDown',
		value: function onInputKeyDown(event) {
			var _props3 = this.props,
			    shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
			    onInputKeyDown = _props3.onInputKeyDown;

			var focusedOption = this.select.getFocusedOption();

			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({ keyCode: event.keyCode })) {
				this.createNewOption();

				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			} else if (onInputKeyDown) {
				onInputKeyDown(event);
			}
		}
	}, {
		key: 'onOptionSelect',
		value: function onOptionSelect(option) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    refProp = _props4.ref,
			    restProps = objectWithoutProperties(_props4, ['ref']);
			var children = this.props.children;

			// We can't use destructuring default values to set the children,
			// because it won't apply work if `children` is null. A falsy check is
			// more reliable in real world use-cases.

			if (!children) {
				children = defaultChildren$2;
			}

			var props = _extends({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref2) {
					_this2.select = _ref2;

					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref2) {
						_this2.labelKey = _ref2.props.labelKey;
						_this2.valueKey = _ref2.props.valueKey;
					}
					if (refProp) {
						refProp(_ref2);
					}
				}
			});

			return children(props);
		}
	}]);
	return CreatableSelect;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

var defaultChildren$2 = function defaultChildren(props) {
	return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Select$1, props);
};

var isOptionUnique = function isOptionUnique(_ref3) {
	var option = _ref3.option,
	    options = _ref3.options,
	    labelKey = _ref3.labelKey,
	    valueKey = _ref3.valueKey;

	if (!options || !options.length) {
		return true;
	}

	return options.filter(function (existingOption) {
		return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
	}).length === 0;
};

var isValidNewOption = function isValidNewOption(_ref4) {
	var label = _ref4.label;
	return !!label;
};

var newOptionCreator = function newOptionCreator(_ref5) {
	var label = _ref5.label,
	    labelKey = _ref5.labelKey,
	    valueKey = _ref5.valueKey;

	var option = {};
	option[valueKey] = label;
	option[labelKey] = label;
	option.className = 'Select-create-option-placeholder';

	return option;
};

var promptTextCreator = function promptTextCreator(label) {
	return 'Create option "' + label + '"';
};

var shouldKeyDownEventCreateNewOption = function shouldKeyDownEventCreateNewOption(_ref6) {
	var keyCode = _ref6.keyCode;

	switch (keyCode) {
		case 9: // TAB
		case 13: // ENTER
		case 188:
			// COMMA
			return true;
		default:
			return false;
	}
};

// Default prop methods
CreatableSelect.isOptionUnique = isOptionUnique;
CreatableSelect.isValidNewOption = isValidNewOption;
CreatableSelect.newOptionCreator = newOptionCreator;
CreatableSelect.promptTextCreator = promptTextCreator;
CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;

CreatableSelect.defaultProps = {
	filterOptions: filterOptions,
	isOptionUnique: isOptionUnique,
	isValidNewOption: isValidNewOption,
	menuRenderer: menuRenderer,
	newOptionCreator: newOptionCreator,
	promptTextCreator: promptTextCreator,
	shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
};

CreatableSelect.propTypes = {
	// Child function responsible for creating the inner Select component
	// This component can be used to compose HOCs (eg Creatable and Async)
	// (props: Object): PropTypes.element
	children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

	// See Select.propTypes.filterOptions
	filterOptions: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,

	// Searches for any matching option within the set of options.
	// This function prevents duplicate options from being created.
	// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
	isOptionUnique: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

	// Determines if the current input text represents a valid option.
	// ({ label: string }): boolean
	isValidNewOption: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

	// See Select.propTypes.menuRenderer
	menuRenderer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,

	// Factory to create new option.
	// ({ label: string, labelKey: string, valueKey: string }): Object
	newOptionCreator: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

	// input change handler: function (inputValue) {}
	onInputChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

	// input keyDown handler: function (event) {}
	onInputKeyDown: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

	// new option click handler: function (option) {}
	onNewOptionClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

	// See Select.propTypes.options
	options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,

	// Creates prompt/placeholder option text.
	// (filterText: string): string
	promptTextCreator: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

	ref: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

	// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
	shouldKeyDownEventCreateNewOption: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};

var AsyncCreatableSelect = function (_React$Component) {
	inherits(AsyncCreatableSelect, _React$Component);

	function AsyncCreatableSelect() {
		classCallCheck(this, AsyncCreatableSelect);
		return possibleConstructorReturn(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
	}

	createClass(AsyncCreatableSelect, [{
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				Async,
				this.props,
				function (_ref) {
					var ref = _ref.ref,
					    asyncProps = objectWithoutProperties(_ref, ['ref']);

					var asyncRef = ref;
					return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
						CreatableSelect,
						asyncProps,
						function (_ref2) {
							var ref = _ref2.ref,
							    creatableProps = objectWithoutProperties(_ref2, ['ref']);

							var creatableRef = ref;
							return _this2.props.children(_extends({}, creatableProps, {
								ref: function ref(select) {
									creatableRef(select);
									asyncRef(select);
									_this2.select = select;
								}
							}));
						}
					);
				}
			);
		}
	}]);
	return AsyncCreatableSelect;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

var defaultChildren$1 = function defaultChildren(props) {
	return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Select$1, props);
};

AsyncCreatableSelect.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
};

AsyncCreatableSelect.defaultProps = {
	children: defaultChildren$1
};

Select$1.Async = Async;
Select$1.AsyncCreatable = AsyncCreatableSelect;
Select$1.Creatable = CreatableSelect;
Select$1.Value = Value;
Select$1.Option = Option;


/* harmony default export */ __webpack_exports__["default"] = (Select$1);


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetAjaxStatus = exports.subscribe = exports.postFormData = undefined;

var _regenerator = __webpack_require__(180);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(181);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = __webpack_require__(176);

var _axios2 = _interopRequireDefault(_axios);

var _ajaxStatusReducers = __webpack_require__(161);

var _registerReducer = __webpack_require__(208);

var _reduxForm = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postFormData = exports.postFormData = function postFormData(url, formData, formName, method) {
    var resetForm = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    return function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;

                            dispatch({
                                type: _ajaxStatusReducers.SUBMIT_PENDING,
                                sendForm: formName
                            });

                            if (!(method === 'put')) {
                                _context.next = 7;
                                break;
                            }

                            _context.next = 5;
                            return _axios2.default.put(url, formData);

                        case 5:
                            _context.next = 14;
                            break;

                        case 7:
                            if (!(method === 'patch')) {
                                _context.next = 12;
                                break;
                            }

                            _context.next = 10;
                            return _axios2.default.patch(url, formData);

                        case 10:
                            _context.next = 14;
                            break;

                        case 12:
                            _context.next = 14;
                            return _axios2.default.post(url, formData);

                        case 14:

                            dispatch({
                                type: _ajaxStatusReducers.SUBMIT_COMPLETE
                            });

                            if (resetForm) {
                                dispatch((0, _reduxForm.reset)(formName));
                                dispatch({
                                    type: _registerReducer.RESET_CAPTCHA,
                                    resetCaptcha: true
                                });
                            }
                            _context.next = 22;
                            break;

                        case 18:
                            _context.prev = 18;
                            _context.t0 = _context['catch'](0);

                            dispatch({
                                type: _registerReducer.RESET_CAPTCHA,
                                resetCaptcha: true
                            });
                            dispatch({
                                type: _ajaxStatusReducers.SERVER_ERROR,
                                serverStatus: _context.t0.response.status,
                                serverMessage: _context.t0.response.data.message,
                                serverErrors: _context.t0.response.data.errors
                            });

                        case 22:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 18]]);
        }));

        return function (_x2) {
            return _ref.apply(this, arguments);
        };
    }();
};

var subscribe = exports.subscribe = function subscribe(email) {
    return function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;

                            dispatch({
                                type: _ajaxStatusReducers.SUBMIT_PENDING
                            });

                            _context2.next = 4;
                            return _axios2.default.post('/public/subscribe', { email: email });

                        case 4:

                            dispatch({
                                type: _ajaxStatusReducers.SUBMIT_COMPLETE
                            });
                            _context2.next = 10;
                            break;

                        case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2['catch'](0);

                            dispatch({
                                type: _ajaxStatusReducers.SERVER_ERROR,
                                serverStatus: _context2.t0.response.status,
                                serverMessage: _context2.t0.response.data.message
                            });

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 7]]);
        }));

        return function (_x3) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var resetAjaxStatus = exports.resetAjaxStatus = function resetAjaxStatus() {
    return function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            dispatch({
                                type: _ajaxStatusReducers.RESET_STATUS
                            });

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x4) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(228);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global document, window */


// Constants
var ID = '_grecaptcha.element.id';
var CALLBACK_NAME = '_grecaptcha.data-callback';
var EXPIRED_CALLBACK_NAME = '_grecaptcha.data-expired-callback';

var removeChild = function removeChild(elem) {
  return elem.parentNode && elem.parentNode.removeChild(elem);
};

var Recaptcha = function (_React$Component) {
  _inherits(Recaptcha, _React$Component);

  function Recaptcha() {
    _classCallCheck(this, Recaptcha);

    return _possibleConstructorReturn(this, (Recaptcha.__proto__ || Object.getPrototypeOf(Recaptcha)).apply(this, arguments));
  }

  _createClass(Recaptcha, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          locale = _props.locale,
          callback = _props.callback,
          expiredCallback = _props.expiredCallback;

      // 1. Async lazy load

      var head = document.head || document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.id = ID;
      script.src = 'https://www.google.com/recaptcha/api.js?hl=' + locale;
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.onerror = function (oError) {
        throw new URIError('The script ' + oError.target.src + ' is not accessible.');
      };
      head.appendChild(script);

      // 2. Expose callback function to window object
      window[CALLBACK_NAME] = callback;
      window[EXPIRED_CALLBACK_NAME] = expiredCallback;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      removeChild(document.getElementById(ID));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          sitekey = _props2.sitekey,
          invisible = _props2.invisible,
          otherProps = _objectWithoutProperties(_props2, ['className', 'sitekey', 'invisible']);

      var props = _extends({}, (0, _lodash2.default)(otherProps, ['callback', 'expiredCallback', 'locale']), {
        className: (0, _classnames2.default)('g-recaptcha', className),
        'data-sitekey': sitekey,
        'data-callback': CALLBACK_NAME,
        'data-expired-callback': EXPIRED_CALLBACK_NAME
      }, invisible && { 'data-size': 'invisible' });

      return _react2.default.createElement('div', props);
    }
  }]);

  return Recaptcha;
}(_react2.default.Component);

Recaptcha.propTypes = {
  // Required
  sitekey: _propTypes2.default.string.isRequired,
  callback: _propTypes2.default.func.isRequired,
  expiredCallback: _propTypes2.default.func.isRequired,

  // Options
  className: _propTypes2.default.string,
  invisible: _propTypes2.default.bool,
  locale: _propTypes2.default.string
};
Recaptcha.defaultProps = {
  locale: 'en',
  className: undefined,
  invisible: false
};
exports.default = Recaptcha;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Creates an array of the own and inherited enumerable symbol properties
 * of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable string keyed properties of `object` that are
 * not omitted.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = baseRest(function(object, props) {
  if (object == null) {
    return {};
  }
  props = arrayMap(baseFlatten(props, 1), toKey);
  return basePick(object, baseDifference(getAllKeysIn(object), props));
});

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = omit;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(145)))

/***/ })

},[1485]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9pbnB1dHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2NvbnRhaW5lcnMvQ29udGFjdFVzQ29udGFpbmVyLWNsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29udGFpbmVycy9Db250YWN0VXNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2NvbnRhaW5lcnMvY29udGFjdHVzL0Fza0ZheUZheUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL3V0aWxzL3ZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2NvbXBvbmVudHMvaW5wdXRzL0FkdmFuY2VkRHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyZWNhcHRjaGEvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb21wb25lbnRzL2lucHV0cy9JbnB1dEZpZWxkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbnVtYmVyLWZvcm1hdC9saWIvbnVtYmVyX2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbnVtYmVyLWZvcm1hdC9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvcmVkdXgvYWN0aW9ucy9mb3JtU3VibWlzc2lvbkFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtYXV0b3NpemUvbGliL0F1dG9zaXplSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdyZWNhcHRjaGEvbGliL1JlY2FwdGNoYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLm9taXQvaW5kZXguanMiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwic3VibWl0dGluZyIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsInN0eWxlIiwiZGlzYWJsZWQiLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJub2RlIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwid2luZG93IiwiUmVhY3QiLCJkYXRhIiwiX19EQVRBX18iLCJfX1BSRUxPQURFRF9TVEFURV9fIiwic3RvcmUiLCJsYW5nIiwidHJhbnNsYXRpb25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNvbnRhY3RVc0NvbnRhaW5lciIsInBvc3RGb3JtRGF0YSIsImFqYXhTdGF0dXMiLCJyZXNldENhcHRjaGEiLCJpbnN0YW50TWVzc2VuZ2VycyIsImNvdW50cmllcyIsInJlQ2FwdGNoYSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVnaXN0ZXIiLCJBc2tGYXlGYXlGb3JtIiwic2hvd1JlcXVpcmVkQ2FwdGNoYSIsImNhcHRjaGFSZXNwb25zZSIsInZlcmlmeUNhbGxiYWNrIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImV4cGlyZWRDYWxsYmFjayIsInN1Ym1pdEhhbmRsZXIiLCJ2YWx1ZXMiLCJmb3JtIiwiZGlzcGF0Y2giLCJncmVjYXB0Y2hhIiwicmVzZXQiLCJSRVNFVF9DQVBUQ0hBIiwiaGFuZGxlU3VibWl0IiwiaW50bCIsImNvdW50cnlMaXN0IiwibWFwIiwidmFsdWUiLCJpdGVtIiwiY291bnRyeUNvZGUiLCJsYWJlbCIsIm5hbWUiLCJpZCIsIm1lc3NlbmdlcnMiLCJmb3JtYXRNZXNzYWdlIiwicmVxdWlyZWRDaGsiLCJlbWFpbENoayIsIklucHV0RmllbGQiLCJBZHZhbmNlZERyb3BEb3duIiwic2l0ZUtleSIsImxvY2FsZSIsInNlbmRGb3JtIiwiaXNTdWJtaXR0aW5nIiwiaXNTdWJtaXRTdWNjZXNzIiwiYXJyYXkiLCJpbml0aWFsVmFsdWVzIiwicmVxdWlyZWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJlbWFpbCIsInRlc3QiLCJzY3JvbGxUb0ludmFsaWQiLCJlcnJvckVsIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvIiwidG9wIiwicGFnZVlPZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxUb1RvcCIsInNjcm9sbER1cmF0aW9uIiwic2Nyb2xsWSIsInNjcm9sbFN0ZXAiLCJzY3JvbGxJbnRlcnZhbCIsInNldEludGVydmFsIiwic2Nyb2xsQnkiLCJjbGVhckludGVydmFsIiwibnVtYmVyQ2hrIiwiaXNOYU4iLCJOdW1iZXIiLCJudWxsVmFsdWUiLCJpbml0IiwibnVsbFZhbHVlQ2hrIiwibWluVmFsdWVDaGsiLCJtaW4iLCJtYXhWYWx1ZUNoayIsIm1heCIsIm1heExlbkNoayIsIm1pbkxlbkNoayIsInBhc3N3b3JkQ2hrIiwidmFsaWRhdGVBY2NvdW50IiwiZXJyb3JzIiwidGl0bGUiLCJwYXNzcG9ydENvdW50cnlJZCIsInBhc3N3b3Jkc01hdGNoIiwiYWxsVmFsdWVzIiwicGFzc3dvcmQiLCJ0cmltIiwicmVwbGFjZSIsIndlYnNpdGUiLCJoYW5kbGVDaGFuZ2UiLCJzZWxlY3RlZE9wdGlvbiIsImlucHV0Iiwib25DaGFuZ2UiLCJ0b1N0cmluZyIsIm9uQ291bnRyeUNoYW5nZWQiLCJtZXRhIiwicGxhY2Vob2xkZXIiLCJzZWFyY2hhYmxlIiwiY29tcG9uZW50TmFtZSIsIm9wdGlvbnMiLCJzdWJtaXRGYWlsZWQiLCJlcnJvciIsIm9uZU9mVHlwZSIsImhpZGVQbGFjZWhvbGRlciIsIm9uRm9jdXNJbnB1dElETnVtYmVyIiwib25CbHVySW5wdXRJRE51bWJlciIsIm9uTnVtYmVyQ2hhbmdlIiwic2hvd0Vycm9yIiwiZXJyIiwia2V5IiwiaW5kZXhPZiIsInNwbGl0Iiwib25LZXlVcCIsImlzVXNlcm5hbWUiLCJ2YWwiLCJvblBhc3RlIiwibWF4TGVuZ3RoIiwiZSIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwic2xpY2UiLCJkaXZDbGFzc05hbWUiLCJyb3dzIiwiYWxsb3dOZWdhdGl2ZSIsInRob3VzYW5kU2VwYXJhdG9yIiwibnVtYmVyRm9ybWF0IiwicmVxdWlyZWRQb3NpdGlvbiIsInZlcmlmaWVkU3RhdHVzIiwiYXV0b2NvbXBsZXRlIiwidG91Y2hlZCIsIm51bWJlciIsInVybCIsImZvcm1EYXRhIiwiZm9ybU5hbWUiLCJtZXRob2QiLCJyZXNldEZvcm0iLCJTVUJNSVRfUEVORElORyIsImF4aW9zIiwicHV0IiwicGF0Y2giLCJwb3N0IiwiU1VCTUlUX0NPTVBMRVRFIiwiU0VSVkVSX0VSUk9SIiwic2VydmVyU3RhdHVzIiwic3RhdHVzIiwic2VydmVyTWVzc2FnZSIsIm1lc3NhZ2UiLCJzZXJ2ZXJFcnJvcnMiLCJzdWJzY3JpYmUiLCJyZXNldEFqYXhTdGF0dXMiLCJSRVNFVF9TVEFUVVMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNK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QUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZLQUE2SyxLQUFLO0FBQ2xMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGO0FBQzlGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSw4Q0FBOEMsU0FBUztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2Qjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDs7O0FBR0E7O0FBRUE7QUFDQSwwREFBMEQsRUFBRTtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFrRDtBQUN6RTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywwSkFBMEo7QUFDL0o7QUFDQTtBQUNBO0FBQ0EsS0FBSyxtRkFBbUY7QUFDeEY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQzs7QUFFQTtBQUNBLG1CQUFtQiw4Q0FBOEM7QUFDakU7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUIsRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLE9BQU87QUFDcEIsZUFBZSxNQUFNO0FBQ3JCOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywwREFBMEQ7QUFDL0QseUVBQWlDLDhCQUE4QjtBQUMvRDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtDQUFrQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0NBQWdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzRkFBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0Esd0ZBQWdEO0FBQ2hELHlGQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsYUFBYSwrQ0FBK0M7QUFDNUQ7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSwrSUFBd0Qsb0JBQW9CLGVBQWUsZ0JBQWdCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0RBQWtELDBCQUEwQixFQUFFO0FBQ25GLG1GQUEyQyxvQkFBb0I7QUFDL0Q7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLDJDQUEyQzs7QUFFcEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTSxnQ0FBZ0M7QUFDdEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNB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QUNGO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLHFFQUFxRTtBQUMzRTs7QUFFQTtBQUNBLE1BQU0sZ0JBQWdCO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLG9EQUFvRDtBQUMxRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvSkFBMkc7QUFDM0c7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7QUFDUjs7Ozs7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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NkIsa0JBQWtCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxxQkFBcUI7QUFDaEMsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoicHVibGljL2pzL2NvbXBvbmVudHMvQ29udGFjdFVzQ29udGFpbmVyLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNiAxNyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3VibWl0dGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgICBvbk1vdXNlT3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uTW91c2VPdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tcycsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgY2xhc3NOYW1lLCBzdWJtaXR0aW5nLCBvbkNsaWNrLCBjaGlsZHJlbiwgc3R5bGUsIGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXt0eXBlfSBzdHlsZT17c3R5bGV9IG9uTW91c2VPdmVyPXt0aGlzLnByb3BzLm9uTW91c2VPdmVyfSBvbk1vdXNlT3V0PXt0aGlzLnByb3BzLm9uTW91c2VPdXR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgc3VibWl0dGluZ30gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgICAgICAge3N1Ym1pdHRpbmcgJiYgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW8tbm90Y2ggZmEtc3BpblwiLz59IHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb21wb25lbnRzL2lucHV0cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgNiA3IDggOSAxMCAxMSAxNiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7aHlkcmF0ZX0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IENvbnRhY3RVc0NvbnRhaW5lciBmcm9tICcuL0NvbnRhY3RVc0NvbnRhaW5lcidcbmltcG9ydCBJbnRsV3JhcHBlciBmcm9tIFwiLi4vLi4vLi4vSW50bFdyYXBwZXJcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcblxud2luZG93LlJlYWN0ID0gUmVhY3Q7XG5cbmNvbnN0IGRhdGEgPSB3aW5kb3cuX19EQVRBX187XG5cbi8vIEFsbG93IHRoZSBwYXNzZWQgc3RhdGUgdG8gYmUgZ2FyYmFnZS1jb2xsZWN0ZWRcbmRlbGV0ZSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXztcbmRlbGV0ZSB3aW5kb3cuX19EQVRBX187XG5cbi8vIENyZWF0ZSBSZWR1eCBzdG9yZSB3aXRoIGluaXRpYWwgc3RhdGVcbmh5ZHJhdGUoXG4gICAgPEludGxXcmFwcGVyIHN0b3JlPXtzdG9yZX0gbG9jYWxlPXtkYXRhLmxhbmd9IG1lc3NhZ2VzPXtkYXRhLnRyYW5zbGF0aW9uc30+XG4gICAgICAgIDxDb250YWN0VXNDb250YWluZXIgZGF0YT17ZGF0YX0vPlxuICAgIDwvSW50bFdyYXBwZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNrLWZheWZheS1mb3JtLWNvbnRhaW5lclwiKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb250YWluZXJzL0NvbnRhY3RVc0NvbnRhaW5lci1jbGllbnQuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBc2tGYXlGYXlGb3JtIGZyb20gJy4vY29udGFjdHVzL0Fza0ZheUZheUZvcm0nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHBvc3RGb3JtRGF0YSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvZm9ybVN1Ym1pc3Npb25BY3Rpb24nO1xuXG5jbGFzcyBDb250YWN0VXNDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHBvc3RGb3JtRGF0YTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgYWpheFN0YXR1czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICByZXNldENhcHRjaGE6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBvc3RGb3JtRGF0YSwgYWpheFN0YXR1cywgZGF0YSwgcmVzZXRDYXB0Y2hhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXNrRmF5RmF5Rm9ybVxuICAgICAgICAgICAgICAgIGFqYXhTdGF0dXM9e2FqYXhTdGF0dXN9XG4gICAgICAgICAgICAgICAgcG9zdEZvcm1EYXRhPXtwb3N0Rm9ybURhdGF9XG4gICAgICAgICAgICAgICAgaW5zdGFudE1lc3NlbmdlcnM9e2RhdGEuaW5zdGFudE1lc3NlbmdlcnN9XG4gICAgICAgICAgICAgICAgY291bnRyaWVzPXtkYXRhLmNvdW50cmllc31cbiAgICAgICAgICAgICAgICByZUNhcHRjaGE9e2RhdGEucmVDYXB0Y2hhfVxuICAgICAgICAgICAgICAgIHJlc2V0Q2FwdGNoYT17cmVzZXRDYXB0Y2hhfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2V0Q2FwdGNoYTogc3RhdGUucmVnaXN0ZXIucmVzZXRDYXB0Y2hhLFxuICAgICAgICBhamF4U3RhdHVzOiBzdGF0ZS5hamF4U3RhdHVzXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLFxuICAgIHsgcG9zdEZvcm1EYXRhIH1cbikoQ29udGFjdFVzQ29udGFpbmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb250YWluZXJzL0NvbnRhY3RVc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRzL0lucHV0RmllbGRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5wdXRzL0J1dHRvblwiO1xuaW1wb3J0IHsgcmVxdWlyZWRDaGssIGVtYWlsQ2hrIH0gZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdG9ycyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgQWR2YW5jZWREcm9wRG93biBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnB1dHMvQWR2YW5jZWREcm9wRG93blwiO1xuaW1wb3J0IFJlY2FwdGNoYSBmcm9tICdyZWFjdC1ncmVjYXB0Y2hhJztcbmltcG9ydCB7IFJFU0VUX0NBUFRDSEEgfSBmcm9tIFwiLi4vLi4vcmVkdXgvcmVkdWNlcnMvcmVnaXN0ZXJSZWR1Y2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBBc2tGYXlGYXlGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpbnRsOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGFqYXhTdGF0dXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgcG9zdEZvcm1EYXRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBmb3JtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGluc3RhbnRNZXNzZW5nZXJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgICAgY291bnRyaWVzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgICAgcmVDYXB0Y2hhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIHJlc2V0Q2FwdGNoYTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2hvd1JlcXVpcmVkQ2FwdGNoYTogZmFsc2UsXG4gICAgICAgIGNhcHRjaGFSZXNwb25zZTogJydcbiAgICB9O1xuXG4gICAgdmVyaWZ5Q2FsbGJhY2sgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXB0Y2hhUmVzcG9uc2U6IHJlc3BvbnNlLFxuICAgICAgICAgICAgc2hvd1JlcXVpcmVkQ2FwdGNoYTogZmFsc2VcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgZXhwaXJlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNhcHRjaGFSZXNwb25zZTogJydcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc3VibWl0SGFuZGxlciA9ICh2YWx1ZXMpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNhcHRjaGFSZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2hvd1JlcXVpcmVkQ2FwdGNoYTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHBvc3RGb3JtRGF0YSwgZm9ybSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcG9zdEZvcm1EYXRhKGAvcHVibGljLWVtYWlsP2ctcmVjYXB0Y2hhLXJlc3BvbnNlPSR7dGhpcy5zdGF0ZS5jYXB0Y2hhUmVzcG9uc2V9YCwgdmFsdWVzLCBmb3JtLCAncG9zdCcsIHRydWUpO1xuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHJlc2V0Q2FwdGNoYSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKHJlc2V0Q2FwdGNoYSkge1xuICAgICAgICAgICAgd2luZG93LmdyZWNhcHRjaGEucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVTRVRfQ0FQVENIQSxcbiAgICAgICAgICAgICAgICByZXNldENhcHRjaGE6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGFqYXhTdGF0dXMsIGludGwsIGZvcm0sIHJlQ2FwdGNoYSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBjb3VudHJ5TGlzdCA9IHRoaXMucHJvcHMuY291bnRyaWVzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBpdGVtLmNvdW50cnlDb2RlLCBsYWJlbDogYCR7aXRlbS5uYW1lfSAoKyR7aXRlbS5jb3VudHJ5Q29kZX0pYCwgaWQ6IGl0ZW0uaWQgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbWVzc2VuZ2VycyA9IHRoaXMucHJvcHMuaW5zdGFudE1lc3NlbmdlcnMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGl0ZW0sIGxhYmVsOiBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogaXRlbSB9KSB9O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImVucXVpcnktZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodGhpcy5zdWJtaXRIYW5kbGVyKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6IFwiY29tbW9uLmVtYWlsLmFkZHJlc3NcIiB9KX0gcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17W3JlcXVpcmVkQ2hrLCBlbWFpbENoa119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0lucHV0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6IFwiY29tbW9uLmVtYWlsLmFkZHJlc3NcIiB9KX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImZpcnN0TmFtZVwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogXCJjb21tb24uZmlyc3ROYW1lXCIgfSl9IHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e1tyZXF1aXJlZENoa119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0lucHV0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6IFwiY29tbW9uLmZpcnN0TmFtZVwiIH0pfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJsYXN0TmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBcImNvbW1vbi5sYXN0TmFtZVwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9IHZhbGlkYXRlPXtbcmVxdWlyZWRDaGtdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtJbnB1dEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBcImNvbW1vbi5sYXN0TmFtZVwiIH0pfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicGF5bWVudC5pbnN0YW50TXNnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbnN0YW50TWVzc2VuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWU9XCJpbnN0YW50TWVzc2VuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QWR2YW5jZWREcm9wRG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e21lc3NlbmdlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJwYXltZW50Lmluc3RhbnRNc2dDb3VudHJ5Q29kZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJpbnN0YW50TWVzc2VuZ2VyQ291bnRyeUNvZGVcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0FkdmFuY2VkRHJvcERvd259IG9wdGlvbnM9e2NvdW50cnlMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicGF5bWVudC5pbnN0YW50TXNnUGhvbmVPclVzZXJuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbnN0YW50TWVzc2VuZ2VyS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VzZXJuYW1lPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0lucHV0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3BheW1lbnQuaW5zdGFudE1zZ1Bob25lT3JVc2VybmFtZScgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwibWVzc2FnZVwiIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdoZWxwLnVzZXIucXVlc3Rpb24nIH0pfSByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtbcmVxdWlyZWRDaGtdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtJbnB1dEZpZWxkfSByb3c9ezEwfSBjbGFzc05hbWU9e1wicmVzaXplLW5vbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2hlbHAudXNlci5xdWVzdGlvbi5lbnRlcicgfSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNhcHRjaGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVrZXk9e3JlQ2FwdGNoYS5zaXRlS2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s9e3RoaXMudmVyaWZ5Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVkQ2FsbGJhY2s9e3RoaXMuZXhwaXJlZENhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtpbnRsLmxvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1JlcXVpcmVkQ2FwdGNoYSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJmb3Jnb3QucGFzc3dvcmQuY2FwdGNoYS5yZXF1aXJlZFwiLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBjb2wtc20tNCBjb2wteHMtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXthamF4U3RhdHVzLnNlbmRGb3JtID09PSBmb3JtICYmIGFqYXhTdGF0dXMuaXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJjb21tb24uc3VibWl0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLXNtLTggY29sLXhzLTggYXNrLWZheWZheS1tc2dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFqYXhTdGF0dXMuc2VuZEZvcm0gPT09IGZvcm0gJiYgYWpheFN0YXR1cy5pc1N1Ym1pdFN1Y2Nlc3MgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJoZWxwLmNvbnRhY3QucmVjZWl2ZWRcIi8+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAnYXNrRmF5RmF5Rm9ybScsIC8vIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgZm9ybVxuICAgIGluaXRpYWxWYWx1ZXM6IHt9XG59KShpbmplY3RJbnRsKEFza0ZheUZheUZvcm0pKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9jb250YWluZXJzL2NvbnRhY3R1cy9Bc2tGYXlGYXlGb3JtLmpzIiwiZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gdmFsdWUgPT5cbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoIDwgMSkgfHwgIXZhbHVlID8gJ2lucHV0LmVtcHR5RmllbGQnIDogdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgZW1haWwgPSB2YWx1ZSA9PlxuICAgIHZhbHVlICYmICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKSA/ICdpbnB1dC5pbnZhbGlkRW1haWwnIDogdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9JbnZhbGlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbiAgICBpZiAoZXJyb3JFbCAmJiB3aW5kb3cuc2Nyb2xsVG8pIHtcbiAgICAgICAgY29uc3QgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgKGVycm9yRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gMjAwKTtcbiAgICAgICAgc2Nyb2xsVG9Ub3AodG9wLCA1MDApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxUb1RvcCA9ICh0b3AsIHNjcm9sbER1cmF0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBjb25zdCBzY3JvbGxTdGVwID0gLShzY3JvbGxZIC0gdG9wKSAvIChzY3JvbGxEdXJhdGlvbiAvIDE1KSxcbiAgICAgICAgc2Nyb2xsSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgaWYgKHNjcm9sbFkgPiB0b3ApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgc2Nyb2xsU3RlcCk7XG4gICAgICAgICAgICB9IGVsc2UgY2xlYXJJbnRlcnZhbChzY3JvbGxJbnRlcnZhbCk7XG4gICAgICAgIH0sIDE1KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXF1aXJlZENoayA9IHZhbHVlID0+ICh2YWx1ZSA/IHVuZGVmaW5lZCA6ICdjb21tb24ucmVxdWlyZWQnKTtcblxuZXhwb3J0IGNvbnN0IG51bWJlckNoayA9IHZhbHVlID0+XG4gICAgdmFsdWUgJiYgaXNOYU4oTnVtYmVyKHZhbHVlKSkgPyAnY29tbW9uLm11c3QuYmUuYS5udW1iZXInIDogdW5kZWZpbmVkO1xuXG5jb25zdCBudWxsVmFsdWUgPSBpbml0ID0+IHZhbHVlID0+ICh2YWx1ZSA9PT0gaW5pdCA/ICdjb21tb24ucmVxdWlyZWQnIDogdW5kZWZpbmVkKTtcbmV4cG9ydCBjb25zdCBudWxsVmFsdWVDaGsgPSBudWxsVmFsdWUoJy0xJyk7XG5cbmV4cG9ydCBjb25zdCBtaW5WYWx1ZUNoayA9IG1pbiA9PiB2YWx1ZSA9PlxuICAgIHZhbHVlICYmIHZhbHVlIDwgbWluID8gYGNvbW1vbi5tdXN0LmJlLmF0LmxlYXN0ICR7bWlufWAgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBtYXhWYWx1ZUNoayA9IG1heCA9PiB2YWx1ZSA9PlxuICAgIHZhbHVlICYmIHZhbHVlID4gbWF4ID8gYGNvbW1vbi5tdXN0LmJlLmxlc3MudGhhbiAke21heH1gIDogdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgbWF4TGVuQ2hrID0gbWF4ID0+IHZhbHVlID0+XG4gICAgdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gbWF4ID8gYGNvbW1vbi5tdXN0LmJlLm9yLmxlc3MgJHttYXh9YCA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IG1pbkxlbkNoayA9IG1pbiA9PiB2YWx1ZSA9PlxuICAgIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA8IG1pbiA/IGBjb21tb24ubXVzdC5iZS5vci5tb3JlICR7bWlufWAgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBlbWFpbENoayA9IHZhbHVlID0+XG4gICAgdmFsdWUgJiYgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWUpID8gJ2NvbW1vbi5pbnZhbGlkLmVtYWlsLmFkZHJlc3MnIDogdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRDaGsgPSB2YWx1ZSA9PlxuICAgIHZhbHVlICYmICEvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlshQCMkJV4mKigpXytcXC09XFxbXFxde3074oCZOuKAnVxcXFx8LC48PlxcLz9dKS57OCwyMH0kLy50ZXN0KHZhbHVlKSA/IGBjb21tb24uaW52YWxpZC5wYXNzd29yZGAgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUFjY291bnQgPSB2YWx1ZXMgPT4ge1xuICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuICAgIGlmICghdmFsdWVzLnRpdGxlKSB7XG4gICAgICAgIGVycm9ycy50aXRsZSA9ICdjb21tb24ucmVxdWlyZWQnXG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZXMucGFzc3BvcnRDb3VudHJ5SWQpIHtcbiAgICAgICAgZXJyb3JzLnBhc3Nwb3J0Q291bnRyeUlkID0gJ2NvbW1vbi5yZXF1aXJlZCdcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG59O1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRzTWF0Y2ggPSAodmFsdWUsIGFsbFZhbHVlcykgPT5cbiAgICB2YWx1ZSAhPT0gYWxsVmFsdWVzLnBhc3N3b3JkID8gJ3JlZ2lzdGVyLnBhc3N3b3JkLm5vdC5tYXRjaCcgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCB0cmltID0gKHZhbHVlKSA9PiB2YWx1ZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblxuZXhwb3J0IGNvbnN0IHdlYnNpdGUgPSAodmFsdWUpID0+IHZhbHVlICYmXG4hL14oaHR0cHxodHRwcyk6XFwvXFwvKCgyNVswLTVdfDJbMC00XVswLTldfFswLTFdezF9WzAtOV17Mn18WzEtOV17MX1bMC05XXsxfXxbMS05XSlcXC4oMjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXXsxfVswLTldezJ9fFsxLTldezF9WzAtOV17MX18WzEtOV18MClcXC4oMjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXXsxfVswLTldezJ9fFsxLTldezF9WzAtOV17MX18WzEtOV18MClcXC4oMjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXXsxfVswLTldezJ9fFsxLTldezF9WzAtOV17MX18WzAtOV0pfChbXFx3XFwtXStcXC4pKltcXHdcXC1dK1xcLihjb218ZWR1fGdvdnxpbnR8bWlsfG5ldHxvcmd8Yml6fGFycGF8aW5mb3xuYW1lfHByb3xhZXJvfGNvb3B8bXVzZXVtfFthLXpBLVpdezJ9KSkoOlswLTldezEsNH0pPyhcXC8oJHxbXFx3XFxcXC4sXFxcXD8nXFxcXCsmYW1wOyVcXFxcJCM9fl9cXC1dKykpKiQvaS50ZXN0KHZhbHVlKSA/ICdjb21tb24ud2Vic2l0ZS5wYXR0ZXJuJyA6IHVuZGVmaW5lZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy91dGlscy92YWxpZGF0b3JzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkdmFuY2VkRHJvcERvd24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIG1ldGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgY29tcG9uZW50TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgICAgb25Db3VudHJ5Q2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICAgICAgICBzZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Zvcm0tZ3JvdXAnLFxuICAgICAgICBwbGFjZWhvbGRlcjogPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJjb21tb24ucGxlYXNlLnNlbGVjdFwiLz4sXG4gICAgICAgIGNvbXBvbmVudE5hbWU6ICdyZWFjdC1zZWxlY3QnLFxuICAgICAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2hhbmdlID0gc2VsZWN0ZWRPcHRpb24gPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2Uoc2VsZWN0ZWRPcHRpb24udmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmlucHV0Lm9uQ2hhbmdlKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ291bnRyeUNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Db3VudHJ5Q2hhbmdlZChzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG1ldGEsIGNsYXNzTmFtZSwgcGxhY2Vob2xkZXIsIHNlYXJjaGFibGUsIGRpc2FibGVkLCBpbnB1dCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG5hbWU9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5jb21wb25lbnROYW1lfVxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkPXt0aGlzLnByb3BzLmNvbXBvbmVudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17c2VhcmNoYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge21ldGEuc3VibWl0RmFpbGVkICYmIG1ldGEuZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPjxGb3JtYXR0ZWRNZXNzYWdlIGlkPXttZXRhLmVycm9yfS8+PC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbXBvbmVudHMvaW5wdXRzL0FkdmFuY2VkRHJvcERvd24uanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfUmVjYXB0Y2hhID0gcmVxdWlyZSgnLi9SZWNhcHRjaGEnKTtcblxudmFyIF9SZWNhcHRjaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVjYXB0Y2hhKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JlY2FwdGNoYTIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1ncmVjYXB0Y2hhL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDYgNyA5IDExIDE2IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gJ3JlYWN0LW51bWJlci1mb3JtYXQnO1xuaW1wb3J0IHtpbmplY3RJbnRsLCBGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcblxuY2xhc3MgSW5wdXRGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1ldGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRpdkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgbWF4TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBhbGxvd05lZ2F0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBudW1iZXJGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcmVxdWlyZWRQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB2ZXJpZmllZFN0YXR1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGF1dG9jb21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaXNVc2VybmFtZTogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcmVxdWlyZWRQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgZGl2Q2xhc3NOYW1lOiAnJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnaW5wdXQtZmllbGQgaW5wdXQtcycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHJvd3M6IDUsXG4gICAgICAgIG1heExlbmd0aDogbnVsbCxcbiAgICAgICAgYWxsb3dOZWdhdGl2ZTogZmFsc2UsXG4gICAgICAgIHRob3VzYW5kU2VwYXJhdG9yOiBmYWxzZSxcbiAgICAgICAgbnVtYmVyRm9ybWF0OiBudWxsLFxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgYXV0b2NvbXBsZXRlOiAnJyxcbiAgICAgICAgaXNVc2VybmFtZTogZmFsc2VcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGhpZGVQbGFjZWhvbGRlcjogZmFsc2VcbiAgICB9O1xuXG4gICAgb25Gb2N1c0lucHV0SUROdW1iZXIgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGlkZVBsYWNlaG9sZGVyOiB0cnVlfSk7XG4gICAgfTtcblxuICAgIG9uQmx1cklucHV0SUROdW1iZXIgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGlkZVBsYWNlaG9sZGVyOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBvbk51bWJlckNoYW5nZSA9IHZhbHVlcyA9PiB7XG4gICAgICAgIGNvbnN0IHt2YWx1ZX0gPSB2YWx1ZXM7XG4gICAgICAgIHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2UodmFsdWUpO1xuICAgIH07XG5cbiAgICBzaG93RXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIGxldCBrZXkgPSAnJztcbiAgICAgICAgaWYgKGVyci5pbmRleE9mKCdtdXN0LmJlLmF0LmxlYXN0JykgPiAtMSkge1xuICAgICAgICAgICAga2V5ID0gJ2NvbW1vbi5tdXN0LmJlLmF0LmxlYXN0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlcnIuaW5kZXhPZignbXVzdC5iZS5sZXNzLnRoYW4nKSA+IC0xKSB7XG4gICAgICAgICAgICBrZXkgPSAnY29tbW9uLm11c3QuYmUubGVzcy50aGFuJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlcnIuaW5kZXhPZignbXVzdC5iZS5vci5sZXNzJykgPiAtMSkge1xuICAgICAgICAgICAga2V5ID0gJ2NvbW1vbi5tdXN0LmJlLm9yLmxlc3MnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVyci5pbmRleE9mKCdtdXN0LmJlLm9yLm1vcmUnKSA+IC0xKSB7XG4gICAgICAgICAgICBrZXkgPSAnY29tbW9uLm11c3QuYmUub3IubW9yZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2tleX0gdmFsdWVzPXt7J251bSc6IGVyci5zcGxpdChrZXkpWzFdfX0vPjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17ZXJyfSAvPjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbktleVVwID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7aXNVc2VybmFtZSwgaW5wdXR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGlzVXNlcm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL1teXFx3X10vaWcsJycpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5pbnB1dC5vbkNoYW5nZSh2YWwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uUGFzdGUgPSBlID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4TGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIG1ldGEsXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgZGl2Q2xhc3NOYW1lLFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgIG1heExlbmd0aCxcbiAgICAgICAgICAgIGFsbG93TmVnYXRpdmUsXG4gICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcixcbiAgICAgICAgICAgIG51bWJlckZvcm1hdCxcbiAgICAgICAgICAgIHJlcXVpcmVkLFxuICAgICAgICAgICAgcmVxdWlyZWRQb3NpdGlvbixcbiAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgdmVyaWZpZWRTdGF0dXMsXG4gICAgICAgICAgICBhdXRvY29tcGxldGVcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyBgaGFzLWVycm9yIGZvcm0tZ3JvdXAgJHtkaXZDbGFzc05hbWV9YCA6IGBmb3JtLWdyb3VwICR7ZGl2Q2xhc3NOYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG5hbWU9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZCAmJiByZXF1aXJlZFBvc2l0aW9uID09PSAnbGVmdCcgJiYgKDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+KiA8L3NwYW4+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZCAmJiByZXF1aXJlZFBvc2l0aW9uID09PSAncmlnaHQnICYmICg8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPiAqPC9zcGFuPil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gJ3RleHRhcmVhJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aW5wdXQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCB7J2lucHV0LWVycm9yJzogbWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3J9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvY29tcGxldGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFzdGU9e3RoaXMub25QYXN0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlID09PSAnbnVtYmVyJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dGhvdXNhbmRTZXBhcmF0b3IgPyB0cnVlIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD17bnVtYmVyRm9ybWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05lZ2F0aXZlPXthbGxvd05lZ2F0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXt0aGlzLm9uTnVtYmVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5zdGF0ZS5oaWRlUGxhY2Vob2xkZXIgPyAnJyA6IHBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVySW5wdXRJRE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzSW5wdXRJRE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCB7J2lucHV0LWVycm9yJzogbWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3J9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlICE9PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAhPT0gJ3RleHRhcmVhJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVySW5wdXRJRE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzSW5wdXRJRE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5vbktleVVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgeydpbnB1dC1lcnJvcic6IG1ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAodmVyaWZpZWRTdGF0dXMpICE9PSAndW5kZWZpbmVkJyAmJiB2ZXJpZmllZFN0YXR1cyA9PT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3QtdmVyaWZpZWRcIj48aSBjbGFzc05hbWU9XCJpY29uIGNsb3NlXCI+PC9pPjxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiYWNjb3VudC51bnZlcmlmaWVkXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mICh2ZXJpZmllZFN0YXR1cykgIT09ICd1bmRlZmluZWQnICYmIHZlcmlmaWVkU3RhdHVzID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFzcy12ZXJpZmllZFwiPjxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiYWNjb3VudC52ZXJpZmllZFwiLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57dGhpcy5zaG93RXJyb3IobWV0YS5lcnJvcil9PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKElucHV0RmllbGQpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9pbnB1dHMvSW5wdXRGaWVsZC5qcyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSA2IDcgOCA5IDEwIDExIDE2IiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDYgNyA4IDkgMTAgMTEgMTYiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgdGhvdXNhbmRTZXBhcmF0b3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbdHJ1ZV0pXSksXG4gIGRlY2ltYWxTZXBhcmF0b3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBkZWNpbWFsU2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBmaXhlZERlY2ltYWxTY2FsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBkaXNwbGF5VHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2lucHV0JywgJ3RleHQnXSksXG4gIHByZWZpeDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHN1ZmZpeDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGZvcm1hdDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNdKSxcbiAgcmVtb3ZlRm9ybWF0dGluZzogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBtYXNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyldKSxcbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKSxcbiAgaXNOdW1lcmljU3RyaW5nOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGN1c3RvbUlucHV0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGFsbG93TmVnYXRpdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgYWxsb3dFbXB0eUZvcm1hdHRpbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgb25WYWx1ZUNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbktleURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25Nb3VzZVVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWyd0ZXh0JywgJ3RlbCddKSxcbiAgaXNBbGxvd2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHJlbmRlclRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgZ2V0SW5wdXRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5VHlwZTogJ2lucHV0JyxcbiAgZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxuICBmaXhlZERlY2ltYWxTY2FsZTogZmFsc2UsXG4gIHByZWZpeDogJycsXG4gIHN1ZmZpeDogJycsXG4gIGFsbG93TmVnYXRpdmU6IHRydWUsXG4gIGFsbG93RW1wdHlGb3JtYXR0aW5nOiBmYWxzZSxcbiAgaXNOdW1lcmljU3RyaW5nOiBmYWxzZSxcbiAgdHlwZTogJ3RleHQnLFxuICBvblZhbHVlQ2hhbmdlOiBfdXRpbHMubm9vcCxcbiAgb25DaGFuZ2U6IF91dGlscy5ub29wLFxuICBvbktleURvd246IF91dGlscy5ub29wLFxuICBvbk1vdXNlVXA6IF91dGlscy5ub29wLFxuICBvbkZvY3VzOiBfdXRpbHMubm9vcCxcbiAgb25CbHVyOiBfdXRpbHMubm9vcCxcbiAgaXNBbGxvd2VkOiBfdXRpbHMucmV0dXJuVHJ1ZSxcbiAgZ2V0SW5wdXRSZWY6IF91dGlscy5ub29wXG59O1xuXG52YXIgTnVtYmVyRm9ybWF0ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoTnVtYmVyRm9ybWF0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOdW1iZXJGb3JtYXQocHJvcHMpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBOdW1iZXJGb3JtYXQpO1xuXG4gICAgLy92YWxpZGF0ZSBwcm9wc1xuICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKE51bWJlckZvcm1hdC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoTnVtYmVyRm9ybWF0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMudmFsaWRhdGVQcm9wcygpO1xuXG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gX3RoaXMuZm9ybWF0VmFsdWVQcm9wKCk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgIG51bUFzU3RyaW5nOiBfdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKVxuICAgIH07XG5cbiAgICBfdGhpcy5zZWxlY3Rpb25CZWZvcmVJbnB1dCA9IHtcbiAgICAgIHNlbGVjdGlvblN0YXJ0OiAwLFxuICAgICAgc2VsZWN0aW9uRW5kOiAwXG4gICAgfTtcblxuICAgIF90aGlzLm9uQ2hhbmdlID0gX3RoaXMub25DaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25LZXlEb3duID0gX3RoaXMub25LZXlEb3duLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uTW91c2VVcCA9IF90aGlzLm9uTW91c2VVcC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkZvY3VzID0gX3RoaXMub25Gb2N1cy5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkJsdXIgPSBfdGhpcy5vbkJsdXIuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoTnVtYmVyRm9ybWF0LCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVJZlJlcXVpcmVkKHByZXZQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlVmFsdWVJZlJlcXVpcmVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlVmFsdWVJZlJlcXVpcmVkKHByZXZQcm9wcykge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cblxuICAgICAgaWYgKHByZXZQcm9wcyAhPT0gcHJvcHMpIHtcbiAgICAgICAgLy92YWxpZGF0ZSBwcm9wc1xuICAgICAgICB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcblxuICAgICAgICB2YXIgc3RhdGVWYWx1ZSA9IHN0YXRlLnZhbHVlO1xuXG4gICAgICAgIHZhciBsYXN0TnVtU3RyID0gc3RhdGUubnVtQXNTdHJpbmcgfHwgJyc7XG4gICAgICAgIHZhciBsYXN0VmFsdWVXaXRoTmV3Rm9ybWF0ID0gdGhpcy5mb3JtYXROdW1TdHJpbmcobGFzdE51bVN0cik7XG5cbiAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gcHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZCA/IGxhc3RWYWx1ZVdpdGhOZXdGb3JtYXQgOiB0aGlzLmZvcm1hdFZhbHVlUHJvcCgpO1xuICAgICAgICB2YXIgX251bUFzU3RyaW5nID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKTtcblxuICAgICAgICB2YXIgZmxvYXRWYWx1ZSA9IHBhcnNlRmxvYXQoX251bUFzU3RyaW5nKTtcbiAgICAgICAgdmFyIGxhc3RGbG9hdFZhbHVlID0gcGFyc2VGbG9hdChsYXN0TnVtU3RyKTtcblxuICAgICAgICBpZiAoKCFpc05hTihmbG9hdFZhbHVlKSB8fCAhaXNOYU4obGFzdEZsb2F0VmFsdWUpKSAmJiBmbG9hdFZhbHVlICE9PSBsYXN0RmxvYXRWYWx1ZSB8fCBsYXN0VmFsdWVXaXRoTmV3Rm9ybWF0ICE9PSBzdGF0ZVZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgICAgICBudW1Bc1N0cmluZzogX251bUFzU3RyaW5nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogTWlzYyBtZXRob2RzICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGbG9hdFN0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZsb2F0U3RyaW5nKCkge1xuICAgICAgdmFyIG51bSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgICB2YXIgZGVjaW1hbFNjYWxlID0gdGhpcy5wcm9wcy5kZWNpbWFsU2NhbGU7XG5cbiAgICAgIHZhciBfZ2V0U2VwYXJhdG9ycyA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpLFxuICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSBfZ2V0U2VwYXJhdG9ycy5kZWNpbWFsU2VwYXJhdG9yO1xuXG4gICAgICB2YXIgbnVtUmVnZXggPSB0aGlzLmdldE51bWJlclJlZ2V4KHRydWUpO1xuXG4gICAgICAvL3JlbW92ZSBuZWdhdGlvbiBmb3IgcmVnZXggY2hlY2tcbiAgICAgIHZhciBoYXNOZWdhdGlvbiA9IG51bVswXSA9PT0gJy0nO1xuICAgICAgaWYgKGhhc05lZ2F0aW9uKSBudW0gPSBudW0ucmVwbGFjZSgnLScsICcnKTtcblxuICAgICAgLy9pZiBkZWNpbWFsIHNjYWxlIGlzIHplcm8gcmVtb3ZlIGRlY2ltYWwgYW5kIG51bWJlciBhZnRlciBkZWNpbWFsU2VwYXJhdG9yXG4gICAgICBpZiAoZGVjaW1hbFNlcGFyYXRvciAmJiBkZWNpbWFsU2NhbGUgPT09IDApIHtcbiAgICAgICAgbnVtID0gbnVtLnNwbGl0KGRlY2ltYWxTZXBhcmF0b3IpWzBdO1xuICAgICAgfVxuXG4gICAgICBudW0gPSAobnVtLm1hdGNoKG51bVJlZ2V4KSB8fCBbXSkuam9pbignJykucmVwbGFjZShkZWNpbWFsU2VwYXJhdG9yLCAnLicpO1xuXG4gICAgICAvL3JlbW92ZSBleHRyYSBkZWNpbWFsc1xuICAgICAgdmFyIGZpcnN0RGVjaW1hbEluZGV4ID0gbnVtLmluZGV4T2YoJy4nKTtcblxuICAgICAgaWYgKGZpcnN0RGVjaW1hbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBudW0gPSBudW0uc3Vic3RyaW5nKDAsIGZpcnN0RGVjaW1hbEluZGV4KSArICcuJyArIG51bS5zdWJzdHJpbmcoZmlyc3REZWNpbWFsSW5kZXggKyAxLCBudW0ubGVuZ3RoKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIF91dGlscy5lc2NhcGVSZWdFeHApKGRlY2ltYWxTZXBhcmF0b3IpLCAnZycpLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIC8vYWRkIG5lZ2F0aW9uIGJhY2tcbiAgICAgIGlmIChoYXNOZWdhdGlvbikgbnVtID0gJy0nICsgbnVtO1xuXG4gICAgICByZXR1cm4gbnVtO1xuICAgIH1cblxuICAgIC8vcmV0dXJuZWQgcmVnZXggYXNzdW1lcyBkZWNpbWFsU2VwYXJhdG9yIGlzIGFzIHBlciBwcm9wXG5cbiAgfSwge1xuICAgIGtleTogJ2dldE51bWJlclJlZ2V4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TnVtYmVyUmVnZXgoZywgaWdub3JlRGVjaW1hbFNlcGFyYXRvcikge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0ID0gX3Byb3BzLmZvcm1hdCxcbiAgICAgICAgICBkZWNpbWFsU2NhbGUgPSBfcHJvcHMuZGVjaW1hbFNjYWxlO1xuXG4gICAgICB2YXIgX2dldFNlcGFyYXRvcnMyID0gdGhpcy5nZXRTZXBhcmF0b3JzKCksXG4gICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9IF9nZXRTZXBhcmF0b3JzMi5kZWNpbWFsU2VwYXJhdG9yO1xuXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXFxcXGQnICsgKGRlY2ltYWxTZXBhcmF0b3IgJiYgZGVjaW1hbFNjYWxlICE9PSAwICYmICFpZ25vcmVEZWNpbWFsU2VwYXJhdG9yICYmICFmb3JtYXQgPyAnfCcgKyAoMCwgX3V0aWxzLmVzY2FwZVJlZ0V4cCkoZGVjaW1hbFNlcGFyYXRvcikgOiAnJyksIGcgPyAnZycgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNlcGFyYXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZXBhcmF0b3JzKCkge1xuICAgICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSB0aGlzLnByb3BzLmRlY2ltYWxTZXBhcmF0b3I7XG4gICAgICB2YXIgdGhvdXNhbmRTZXBhcmF0b3IgPSB0aGlzLnByb3BzLnRob3VzYW5kU2VwYXJhdG9yO1xuXG5cbiAgICAgIGlmICh0aG91c2FuZFNlcGFyYXRvciA9PT0gdHJ1ZSkge1xuICAgICAgICB0aG91c2FuZFNlcGFyYXRvciA9ICcsJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I6IHRob3VzYW5kU2VwYXJhdG9yXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE1hc2tBdEluZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWFza0F0SW5kZXgoaW5kZXgpIHtcbiAgICAgIHZhciBfcHJvcHMkbWFzayA9IHRoaXMucHJvcHMubWFzayxcbiAgICAgICAgICBtYXNrID0gX3Byb3BzJG1hc2sgPT09IHVuZGVmaW5lZCA/ICcgJyA6IF9wcm9wcyRtYXNrO1xuXG4gICAgICBpZiAodHlwZW9mIG1hc2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBtYXNrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFza1tpbmRleF0gfHwgJyAnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlT2JqZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWVPYmplY3QoZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nKSB7XG4gICAgICB2YXIgZmxvYXRWYWx1ZSA9IHBhcnNlRmxvYXQobnVtQXNTdHJpbmcpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgIHZhbHVlOiBudW1Bc1N0cmluZyxcbiAgICAgICAgZmxvYXRWYWx1ZTogaXNOYU4oZmxvYXRWYWx1ZSkgPyB1bmRlZmluZWQgOiBmbG9hdFZhbHVlXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZhbGlkYXRlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKCkge1xuICAgICAgdmFyIG1hc2sgPSB0aGlzLnByb3BzLm1hc2s7XG5cbiAgICAgIC8vdmFsaWRhdGUgZGVjaW1hbFNlcGFyYXRvciBhbmQgdGhvdXNhbmRTZXBhcmF0b3JcblxuICAgICAgdmFyIF9nZXRTZXBhcmF0b3JzMyA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpLFxuICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSBfZ2V0U2VwYXJhdG9yczMuZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvciA9IF9nZXRTZXBhcmF0b3JzMy50aG91c2FuZFNlcGFyYXRvcjtcblxuICAgICAgaWYgKGRlY2ltYWxTZXBhcmF0b3IgPT09IHRob3VzYW5kU2VwYXJhdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXFxuICAgICAgICAgIERlY2ltYWwgc2VwYXJhdG9yIGNhblxcJ3QgYmUgc2FtZSBhcyB0aG91c2FuZCBzZXBhcmF0b3IuXFxuXFxuICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yOiAnICsgdGhvdXNhbmRTZXBhcmF0b3IgKyAnICh0aG91c2FuZFNlcGFyYXRvciA9IHt0cnVlfSBpcyBzYW1lIGFzIHRob3VzYW5kU2VwYXJhdG9yID0gXCIsXCIpXFxuICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I6ICcgKyBkZWNpbWFsU2VwYXJhdG9yICsgJyAoZGVmYXVsdCB2YWx1ZSBmb3IgZGVjaW1hbFNlcGFyYXRvciBpcyAuKVxcbiAgICAgICAnKTtcbiAgICAgIH1cblxuICAgICAgLy92YWxpZGF0ZSBtYXNrXG4gICAgICBpZiAobWFzaykge1xuICAgICAgICB2YXIgbWFza0FzU3RyID0gbWFzayA9PT0gJ3N0cmluZycgPyBtYXNrIDogbWFzay50b1N0cmluZygpO1xuICAgICAgICBpZiAobWFza0FzU3RyLm1hdGNoKC9cXGQvZykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1xcbiAgICAgICAgICBNYXNrICcgKyBtYXNrICsgJyBzaG91bGQgbm90IGNvbnRhaW4gbnVtZXJpYyBjaGFyYWN0ZXI7XFxuICAgICAgICAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKiogTWlzYyBtZXRob2RzIGVuZCAqKi9cblxuICAgIC8qKiBjYXJldCBzcGVjaWZpYyBtZXRob2RzICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvcywgY3VycmVudFZhbHVlKSB7XG4gICAgICAvKiBzZXR0aW5nIGNhcmV0IHBvc2l0aW9uIHdpdGhpbiB0aW1lb3V0IG9mIDBtcyBpcyByZXF1aXJlZCBmb3IgbW9iaWxlIGNocm9tZSxcbiAgICAgIG90aGVyd2lzZSBicm93c2VyIHJlc2V0cyB0aGUgY2FyZXQgcG9zaXRpb24gYWZ0ZXIgd2Ugc2V0IGl0XG4gICAgICBXZSBhcmUgYWxzbyBzZXR0aW5nIGl0IHdpdGhvdXQgdGltZW91dCBzbyB0aGF0IGluIG5vcm1hbCBicm93c2VyIHdlIGRvbid0IHNlZSB0aGUgZmxpY2tlcmluZyAqL1xuICAgICAgKDAsIF91dGlscy5zZXRDYXJldFBvc2l0aW9uKShlbCwgY2FyZXRQb3MpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChlbC52YWx1ZSA9PT0gY3VycmVudFZhbHVlKSAoMCwgX3V0aWxzLnNldENhcmV0UG9zaXRpb24pKGVsLCBjYXJldFBvcyk7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICAvKiBUaGlzIGtlZXBzIHRoZSBjYXJldCB3aXRoaW4gdHlwaW5nIGFyZWEgc28gcGVvcGxlIGNhbid0IHR5cGUgaW4gYmV0d2VlbiBwcmVmaXggb3Igc3VmZml4ICovXG5cbiAgfSwge1xuICAgIGtleTogJ2NvcnJlY3RDYXJldFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIGNhcmV0UG9zLCBkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXggPSBfcHJvcHMyLnByZWZpeCxcbiAgICAgICAgICBzdWZmaXggPSBfcHJvcHMyLnN1ZmZpeCxcbiAgICAgICAgICBmb3JtYXQgPSBfcHJvcHMyLmZvcm1hdDtcblxuICAgICAgLy9pZiB2YWx1ZSBpcyBlbXB0eSByZXR1cm4gMFxuXG4gICAgICBpZiAodmFsdWUgPT09ICcnKSByZXR1cm4gMDtcblxuICAgICAgLy9jYXJldCBwb3NpdGlvbiBzaG91bGQgYmUgYmV0d2VlbiAwIGFuZCB2YWx1ZSBsZW5ndGhcbiAgICAgIGNhcmV0UG9zID0gKDAsIF91dGlscy5jbGFtcCkoY2FyZXRQb3MsIDAsIHZhbHVlLmxlbmd0aCk7XG5cbiAgICAgIC8vaW4gY2FzZSBvZiBmb3JtYXQgYXMgbnVtYmVyIGxpbWl0IGJldHdlZW4gcHJlZml4IGFuZCBzdWZmaXhcbiAgICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgIHZhciBoYXNOZWdhdGlvbiA9IHZhbHVlWzBdID09PSAnLSc7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNsYW1wKShjYXJldFBvcywgcHJlZml4Lmxlbmd0aCArIChoYXNOZWdhdGlvbiA/IDEgOiAwKSwgdmFsdWUubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIC8vaW4gY2FzZSBpZiBjdXN0b20gZm9ybWF0IG1ldGhvZCBkb24ndCBkbyBhbnl0aGluZ1xuICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHJldHVybiBjYXJldFBvcztcblxuICAgICAgLyogaW4gY2FzZSBmb3JtYXQgaXMgc3RyaW5nIGZpbmQgdGhlIGNsb3Nlc3QgIyBwb3NpdGlvbiBmcm9tIHRoZSBjYXJldCBwb3NpdGlvbiAqL1xuXG4gICAgICAvL2luIGNhc2UgdGhlIGNhcmV0UG9zIGhhdmUgaW5wdXQgdmFsdWUgb24gaXQgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgIGlmIChmb3JtYXRbY2FyZXRQb3NdID09PSAnIycgJiYgKDAsIF91dGlscy5jaGFySXNOdW1iZXIpKHZhbHVlW2NhcmV0UG9zXSkpIHJldHVybiBjYXJldFBvcztcblxuICAgICAgLy9pZiBjYXJldFBvcyBpcyBqdXN0IGFmdGVyIGlucHV0IHZhbHVlIGRvbid0IGRvIGFueXRoaW5nXG4gICAgICBpZiAoZm9ybWF0W2NhcmV0UG9zIC0gMV0gPT09ICcjJyAmJiAoMCwgX3V0aWxzLmNoYXJJc051bWJlcikodmFsdWVbY2FyZXRQb3MgLSAxXSkpIHJldHVybiBjYXJldFBvcztcblxuICAgICAgLy9maW5kIHRoZSBuZWFyZXN0IGNhcmV0IHBvc2l0aW9uXG4gICAgICB2YXIgZmlyc3RIYXNoUG9zaXRpb24gPSBmb3JtYXQuaW5kZXhPZignIycpO1xuICAgICAgdmFyIGxhc3RIYXNoUG9zaXRpb24gPSBmb3JtYXQubGFzdEluZGV4T2YoJyMnKTtcblxuICAgICAgLy9saW1pdCB0aGUgY3Vyc29yIGJldHdlZW4gdGhlIGZpcnN0ICMgcG9zaXRpb24gYW5kIHRoZSBsYXN0ICMgcG9zaXRpb25cbiAgICAgIGNhcmV0UG9zID0gKDAsIF91dGlscy5jbGFtcCkoY2FyZXRQb3MsIGZpcnN0SGFzaFBvc2l0aW9uLCBsYXN0SGFzaFBvc2l0aW9uICsgMSk7XG5cbiAgICAgIHZhciBuZXh0UG9zID0gZm9ybWF0LnN1YnN0cmluZyhjYXJldFBvcywgZm9ybWF0Lmxlbmd0aCkuaW5kZXhPZignIycpO1xuICAgICAgdmFyIGNhcmV0TGVmdEJvdW5kID0gY2FyZXRQb3M7XG4gICAgICB2YXIgY2FyZXRSaWdodEJvdW5kID0gY2FyZXRQb3MgKyAobmV4dFBvcyA9PT0gLTEgPyAwIDogbmV4dFBvcyk7XG5cbiAgICAgIC8vZ2V0IHRoZSBwb3NpdGlvbiB3aGVyZSB0aGUgbGFzdCBudW1iZXIgaXMgcHJlc2VudFxuICAgICAgd2hpbGUgKGNhcmV0TGVmdEJvdW5kID4gZmlyc3RIYXNoUG9zaXRpb24gJiYgKGZvcm1hdFtjYXJldExlZnRCb3VuZF0gIT09ICcjJyB8fCAhKDAsIF91dGlscy5jaGFySXNOdW1iZXIpKHZhbHVlW2NhcmV0TGVmdEJvdW5kXSkpKSB7XG4gICAgICAgIGNhcmV0TGVmdEJvdW5kIC09IDE7XG4gICAgICB9XG5cbiAgICAgIHZhciBnb1RvTGVmdCA9ICEoMCwgX3V0aWxzLmNoYXJJc051bWJlcikodmFsdWVbY2FyZXRSaWdodEJvdW5kXSkgfHwgZGlyZWN0aW9uID09PSAnbGVmdCcgJiYgY2FyZXRQb3MgIT09IGZpcnN0SGFzaFBvc2l0aW9uIHx8IGNhcmV0UG9zIC0gY2FyZXRMZWZ0Qm91bmQgPCBjYXJldFJpZ2h0Qm91bmQgLSBjYXJldFBvcztcblxuICAgICAgaWYgKGdvVG9MZWZ0KSB7XG4gICAgICAgIC8vY2hlY2sgaWYgbnVtYmVyIHNob3VsZCBiZSB0YWtlbiBhZnRlciB0aGUgYm91bmQgb3IgYWZ0ZXIgaXRcbiAgICAgICAgLy9pZiBudW1iZXIgcHJlY2VkaW5nIGEgdmFsaWQgbnVtYmVyIGtlZXAgaXQgYWZ0ZXJcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY2hhcklzTnVtYmVyKSh2YWx1ZVtjYXJldExlZnRCb3VuZF0pID8gY2FyZXRMZWZ0Qm91bmQgKyAxIDogY2FyZXRMZWZ0Qm91bmQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYXJldFJpZ2h0Qm91bmQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2FyZXRQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENhcmV0UG9zaXRpb24oaW5wdXRWYWx1ZSwgZm9ybWF0dGVkVmFsdWUsIGNhcmV0UG9zKSB7XG4gICAgICB2YXIgZm9ybWF0ID0gdGhpcy5wcm9wcy5mb3JtYXQ7XG5cbiAgICAgIHZhciBzdGF0ZVZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBudW1SZWdleCA9IHRoaXMuZ2V0TnVtYmVyUmVnZXgodHJ1ZSk7XG4gICAgICB2YXIgaW5wdXROdW1iZXIgPSAoaW5wdXRWYWx1ZS5tYXRjaChudW1SZWdleCkgfHwgW10pLmpvaW4oJycpO1xuICAgICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IChmb3JtYXR0ZWRWYWx1ZS5tYXRjaChudW1SZWdleCkgfHwgW10pLmpvaW4oJycpO1xuICAgICAgdmFyIGogPSB2b2lkIDAsXG4gICAgICAgICAgaSA9IHZvaWQgMDtcblxuICAgICAgaiA9IDA7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYXJldFBvczsgaSsrKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5wdXRDaGFyID0gaW5wdXRWYWx1ZVtpXSB8fCAnJztcbiAgICAgICAgdmFyIGN1cnJlbnRGb3JtYXRDaGFyID0gZm9ybWF0dGVkVmFsdWVbal0gfHwgJyc7XG4gICAgICAgIC8vbm8gbmVlZCB0byBpbmNyZWFzZSBuZXcgY3Vyc29yIHBvc2l0aW9uIGlmIGZvcm1hdHRlZCB2YWx1ZSBkb2VzIG5vdCBoYXZlIHRob3NlIGNoYXJhY3RlcnNcbiAgICAgICAgLy9jYXNlIGlucHV0VmFsdWUgPSAxYTIzIGFuZCBmb3JtYXR0ZWRWYWx1ZSA9ICAxMjNcbiAgICAgICAgaWYgKCFjdXJyZW50SW5wdXRDaGFyLm1hdGNoKG51bVJlZ2V4KSAmJiBjdXJyZW50SW5wdXRDaGFyICE9PSBjdXJyZW50Rm9ybWF0Q2hhcikgY29udGludWU7XG5cbiAgICAgICAgLy9XaGVuIHdlIGFyZSBzdHJpcGluZyBvdXQgbGVhZGluZyB6ZXJvcyBtYWludGFpbiB0aGUgbmV3IGN1cnNvciBwb3NpdGlvblxuICAgICAgICAvL0Nhc2UgaW5wdXRWYWx1ZSA9IDAwMDIzIGFuZCBmb3JtYXR0ZWRWYWx1ZSA9IDIzO1xuICAgICAgICBpZiAoY3VycmVudElucHV0Q2hhciA9PT0gJzAnICYmIGN1cnJlbnRGb3JtYXRDaGFyLm1hdGNoKG51bVJlZ2V4KSAmJiBjdXJyZW50Rm9ybWF0Q2hhciAhPT0gJzAnICYmIGlucHV0TnVtYmVyLmxlbmd0aCAhPT0gZm9ybWF0dGVkTnVtYmVyLmxlbmd0aCkgY29udGludWU7XG5cbiAgICAgICAgLy93ZSBhcmUgbm90IHVzaW5nIGN1cnJlbnRGb3JtYXRDaGFyIGJlY2F1c2UgaiBjYW4gY2hhbmdlIGhlcmVcbiAgICAgICAgd2hpbGUgKGN1cnJlbnRJbnB1dENoYXIgIT09IGZvcm1hdHRlZFZhbHVlW2pdICYmIGogPCBmb3JtYXR0ZWRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBqKys7XG4gICAgICAgIH1qKys7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJyAmJiAhc3RhdGVWYWx1ZSkge1xuICAgICAgICAvL3NldCBpdCB0byB0aGUgbWF4aW11bSB2YWx1ZSBzbyBpdCBnb2VzIGFmdGVyIHRoZSBsYXN0IG51bWJlclxuICAgICAgICBqID0gZm9ybWF0dGVkVmFsdWUubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICAvL2NvcnJlY3QgY2FyZXQgcG9zaXRpb24gaWYgaXRzIG91dHNpZGUgb2YgZWRpdGFibGUgYXJlYVxuICAgICAgaiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24oZm9ybWF0dGVkVmFsdWUsIGopO1xuXG4gICAgICByZXR1cm4gajtcbiAgICB9XG4gICAgLyoqIGNhcmV0IHNwZWNpZmljIG1ldGhvZHMgZW5kcyAqKi9cblxuICAgIC8qKiBtZXRob2RzIHRvIHJlbW92ZSBmb3JtYXR0dGluZyAqKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlUHJlZml4QW5kU3VmZml4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlUHJlZml4QW5kU3VmZml4KHZhbCkge1xuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGZvcm1hdCA9IF9wcm9wczMuZm9ybWF0LFxuICAgICAgICAgIHByZWZpeCA9IF9wcm9wczMucHJlZml4LFxuICAgICAgICAgIHN1ZmZpeCA9IF9wcm9wczMuc3VmZml4O1xuXG4gICAgICAvL3JlbW92ZSBwcmVmaXggYW5kIHN1ZmZpeFxuXG4gICAgICBpZiAoIWZvcm1hdCAmJiB2YWwpIHtcbiAgICAgICAgdmFyIGlzTmVnYXRpdmUgPSB2YWxbMF0gPT09ICctJztcblxuICAgICAgICAvL3JlbW92ZSBuZWdhdGlvbiBzaWduXG4gICAgICAgIGlmIChpc05lZ2F0aXZlKSB2YWwgPSB2YWwuc3Vic3RyaW5nKDEsIHZhbC5sZW5ndGgpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHByZWZpeFxuICAgICAgICB2YWwgPSBwcmVmaXggJiYgdmFsLmluZGV4T2YocHJlZml4KSA9PT0gMCA/IHZhbC5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCwgdmFsLmxlbmd0aCkgOiB2YWw7XG5cbiAgICAgICAgLy9yZW1vdmUgc3VmZml4XG4gICAgICAgIHZhciBzdWZmaXhMYXN0SW5kZXggPSB2YWwubGFzdEluZGV4T2Yoc3VmZml4KTtcbiAgICAgICAgdmFsID0gc3VmZml4ICYmIHN1ZmZpeExhc3RJbmRleCAhPT0gLTEgJiYgc3VmZml4TGFzdEluZGV4ID09PSB2YWwubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCA/IHZhbC5zdWJzdHJpbmcoMCwgc3VmZml4TGFzdEluZGV4KSA6IHZhbDtcblxuICAgICAgICAvL2FkZCBuZWdhdGlvbiBzaWduIGJhY2tcbiAgICAgICAgaWYgKGlzTmVnYXRpdmUpIHZhbCA9ICctJyArIHZhbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVQYXR0ZXJuRm9ybWF0dGluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVBhdHRlcm5Gb3JtYXR0aW5nKHZhbCkge1xuICAgICAgdmFyIGZvcm1hdCA9IHRoaXMucHJvcHMuZm9ybWF0O1xuXG4gICAgICB2YXIgZm9ybWF0QXJyYXkgPSBmb3JtYXQuc3BsaXQoJyMnKS5maWx0ZXIoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyICE9PSAnJztcbiAgICAgIH0pO1xuICAgICAgdmFyIHN0YXJ0ID0gMDtcbiAgICAgIHZhciBudW1TdHIgPSAnJztcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxuID0gZm9ybWF0QXJyYXkubGVuZ3RoOyBpIDw9IGxuOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcnQgPSBmb3JtYXRBcnJheVtpXSB8fCAnJztcblxuICAgICAgICAvL2lmIGkgaXMgdGhlIGxhc3QgZnJhZ21lbnQgdGFrZSB0aGUgaW5kZXggb2YgZW5kIG9mIHRoZSB2YWx1ZVxuICAgICAgICAvL0ZvciBjYXNlIGxpa2UgKzEgKDkxMSkgOTExIDkxIDkxIGhhdmluZyBwYXR0ZXJuICsxICgjIyMpICMjIyAjIyAjI1xuICAgICAgICB2YXIgaW5kZXggPSBpID09PSBsbiA/IHZhbC5sZW5ndGggOiB2YWwuaW5kZXhPZihwYXJ0LCBzdGFydCk7XG5cbiAgICAgICAgLyogaW4gYW55IGNhc2UgaWYgd2UgZG9uJ3QgZmluZCB0aGUgcGF0dGVybiBwYXJ0IGluIHRoZSB2YWx1ZSBhc3N1bWUgdGhlIHZhbCBhcyBudW1lcmljIHN0cmluZ1xuICAgICAgICBUaGlzIHdpbGwgYmUgYWxzbyBpbiBjYXNlIGlmIHVzZXIgaGFzIHN0YXJ0ZWQgdHlwaW5nLCBpbiBhbnkgb3RoZXIgY2FzZSBpdCB3aWxsIG5vdCBiZSAtMVxuICAgICAgICB1bmxlc3Mgd3JvbmcgcHJvcCB2YWx1ZSBpcyBwcm92aWRlZCAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgbnVtU3RyID0gdmFsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bVN0ciArPSB2YWwuc3Vic3RyaW5nKHN0YXJ0LCBpbmRleCk7XG4gICAgICAgICAgc3RhcnQgPSBpbmRleCArIHBhcnQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAobnVtU3RyLm1hdGNoKC9cXGQvZykgfHwgW10pLmpvaW4oJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUZvcm1hdHRpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nKHZhbCkge1xuICAgICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGZvcm1hdCA9IF9wcm9wczQuZm9ybWF0LFxuICAgICAgICAgIHJlbW92ZUZvcm1hdHRpbmcgPSBfcHJvcHM0LnJlbW92ZUZvcm1hdHRpbmc7XG5cbiAgICAgIGlmICghdmFsKSByZXR1cm4gdmFsO1xuXG4gICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICB2YWwgPSB0aGlzLnJlbW92ZVByZWZpeEFuZFN1ZmZpeCh2YWwpO1xuICAgICAgICB2YWwgPSB0aGlzLmdldEZsb2F0U3RyaW5nKHZhbCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbCA9IHRoaXMucmVtb3ZlUGF0dGVybkZvcm1hdHRpbmcodmFsKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbW92ZUZvcm1hdHRpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy9jb25kaXRpb24gbmVlZCB0byBiZSBoYW5kbGVkIGlmIGZvcm1hdCBtZXRob2QgaXMgcHJvdmlkZSxcbiAgICAgICAgdmFsID0gcmVtb3ZlRm9ybWF0dGluZyh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gKHZhbC5tYXRjaCgvXFxkL2cpIHx8IFtdKS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIC8qKiBtZXRob2RzIHRvIHJlbW92ZSBmb3JtYXR0dGluZyBlbmQgKiovXG5cbiAgICAvKioqIGZvcm1hdCBzcGVjaWZpYyBtZXRob2RzIHN0YXJ0ICoqKi9cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgd2hlbiAjIGJhc2VkIHN0cmluZyBpcyBwcm92aWRlZFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbnVtU3RyIE51bWVyaWMgU3RyaW5nXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgZm9ybWF0dGVkIFZhbHVlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Zvcm1hdFdpdGhQYXR0ZXJuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0V2l0aFBhdHRlcm4obnVtU3RyKSB7XG4gICAgICB2YXIgZm9ybWF0ID0gdGhpcy5wcm9wcy5mb3JtYXQ7XG5cbiAgICAgIHZhciBoYXNoQ291bnQgPSAwO1xuICAgICAgdmFyIGZvcm1hdHRlZE51bWJlckFyeSA9IGZvcm1hdC5zcGxpdCgnJyk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbG4gPSBmb3JtYXQubGVuZ3RoOyBpIDwgbG47IGkrKykge1xuICAgICAgICBpZiAoZm9ybWF0W2ldID09PSAnIycpIHtcbiAgICAgICAgICBmb3JtYXR0ZWROdW1iZXJBcnlbaV0gPSBudW1TdHJbaGFzaENvdW50XSB8fCB0aGlzLmdldE1hc2tBdEluZGV4KGhhc2hDb3VudCk7XG4gICAgICAgICAgaGFzaENvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXR0ZWROdW1iZXJBcnkuam9pbignJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbnVtU3RyIE51bWVyaWMgc3RyaW5nL2Zsb2F0U3RyaW5nXSBJdCBhbHdheXMgaGF2ZSBkZWNpbWFsU2VwYXJhdG9yIGFzIC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IGZvcm1hdHRlZCBWYWx1ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdmb3JtYXRBc051bWJlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdEFzTnVtYmVyKG51bVN0cikge1xuICAgICAgdmFyIF9wcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlY2ltYWxTY2FsZSA9IF9wcm9wczUuZGVjaW1hbFNjYWxlLFxuICAgICAgICAgIGZpeGVkRGVjaW1hbFNjYWxlID0gX3Byb3BzNS5maXhlZERlY2ltYWxTY2FsZSxcbiAgICAgICAgICBwcmVmaXggPSBfcHJvcHM1LnByZWZpeCxcbiAgICAgICAgICBzdWZmaXggPSBfcHJvcHM1LnN1ZmZpeCxcbiAgICAgICAgICBhbGxvd05lZ2F0aXZlID0gX3Byb3BzNS5hbGxvd05lZ2F0aXZlO1xuXG4gICAgICB2YXIgX2dldFNlcGFyYXRvcnM0ID0gdGhpcy5nZXRTZXBhcmF0b3JzKCksXG4gICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3IgPSBfZ2V0U2VwYXJhdG9yczQudGhvdXNhbmRTZXBhcmF0b3IsXG4gICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9IF9nZXRTZXBhcmF0b3JzNC5kZWNpbWFsU2VwYXJhdG9yO1xuXG4gICAgICB2YXIgaGFzRGVjaW1hbFNlcGFyYXRvciA9IG51bVN0ci5pbmRleE9mKCcuJykgIT09IC0xIHx8IGRlY2ltYWxTY2FsZSAmJiBmaXhlZERlY2ltYWxTY2FsZTtcblxuICAgICAgdmFyIF9zcGxpdERlY2ltYWwgPSAoMCwgX3V0aWxzLnNwbGl0RGVjaW1hbCkobnVtU3RyLCBhbGxvd05lZ2F0aXZlKSxcbiAgICAgICAgICBiZWZvcmVEZWNpbWFsID0gX3NwbGl0RGVjaW1hbC5iZWZvcmVEZWNpbWFsLFxuICAgICAgICAgIGFmdGVyRGVjaW1hbCA9IF9zcGxpdERlY2ltYWwuYWZ0ZXJEZWNpbWFsLFxuICAgICAgICAgIGFkZE5lZ2F0aW9uID0gX3NwbGl0RGVjaW1hbC5hZGROZWdhdGlvbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcblxuICAgICAgLy9hcHBseSBkZWNpbWFsIHByZWNpc2lvbiBpZiBpdHMgZGVmaW5lZFxuXG5cbiAgICAgIGlmIChkZWNpbWFsU2NhbGUgIT09IHVuZGVmaW5lZCkgYWZ0ZXJEZWNpbWFsID0gKDAsIF91dGlscy5saW1pdFRvU2NhbGUpKGFmdGVyRGVjaW1hbCwgZGVjaW1hbFNjYWxlLCBmaXhlZERlY2ltYWxTY2FsZSk7XG5cbiAgICAgIGlmICh0aG91c2FuZFNlcGFyYXRvcikge1xuICAgICAgICBiZWZvcmVEZWNpbWFsID0gYmVmb3JlRGVjaW1hbC5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMScgKyB0aG91c2FuZFNlcGFyYXRvcik7XG4gICAgICB9XG5cbiAgICAgIC8vYWRkIHByZWZpeCBhbmQgc3VmZml4XG4gICAgICBpZiAocHJlZml4KSBiZWZvcmVEZWNpbWFsID0gcHJlZml4ICsgYmVmb3JlRGVjaW1hbDtcbiAgICAgIGlmIChzdWZmaXgpIGFmdGVyRGVjaW1hbCA9IGFmdGVyRGVjaW1hbCArIHN1ZmZpeDtcblxuICAgICAgLy9yZXN0b3JlIG5lZ2F0aW9uIHNpZ25cbiAgICAgIGlmIChhZGROZWdhdGlvbikgYmVmb3JlRGVjaW1hbCA9ICctJyArIGJlZm9yZURlY2ltYWw7XG5cbiAgICAgIG51bVN0ciA9IGJlZm9yZURlY2ltYWwgKyAoaGFzRGVjaW1hbFNlcGFyYXRvciAmJiBkZWNpbWFsU2VwYXJhdG9yIHx8ICcnKSArIGFmdGVyRGVjaW1hbDtcblxuICAgICAgcmV0dXJuIG51bVN0cjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmb3JtYXROdW1TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXROdW1TdHJpbmcoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgdmFyIF9wcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGZvcm1hdCA9IF9wcm9wczYuZm9ybWF0LFxuICAgICAgICAgIGFsbG93RW1wdHlGb3JtYXR0aW5nID0gX3Byb3BzNi5hbGxvd0VtcHR5Rm9ybWF0dGluZztcblxuICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gJycgJiYgIWFsbG93RW1wdHlGb3JtYXR0aW5nKSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID0gJyc7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnLScgJiYgIWZvcm1hdCkge1xuICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9ICctJztcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdFdpdGhQYXR0ZXJuKGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdChmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0QXNOdW1iZXIoZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9ybWF0VmFsdWVQcm9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0VmFsdWVQcm9wKCkge1xuICAgICAgdmFyIF9wcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGZvcm1hdCA9IF9wcm9wczcuZm9ybWF0LFxuICAgICAgICAgIGRlY2ltYWxTY2FsZSA9IF9wcm9wczcuZGVjaW1hbFNjYWxlLFxuICAgICAgICAgIGZpeGVkRGVjaW1hbFNjYWxlID0gX3Byb3BzNy5maXhlZERlY2ltYWxTY2FsZSxcbiAgICAgICAgICBhbGxvd0VtcHR5Rm9ybWF0dGluZyA9IF9wcm9wczcuYWxsb3dFbXB0eUZvcm1hdHRpbmc7XG4gICAgICB2YXIgX3Byb3BzOCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHM4LnZhbHVlLFxuICAgICAgICAgIGlzTnVtZXJpY1N0cmluZyA9IF9wcm9wczguaXNOdW1lcmljU3RyaW5nO1xuXG5cbiAgICAgIHZhciBpc05vbk51bWVyaWNGYWxzeSA9ICF2YWx1ZSAmJiB2YWx1ZSAhPT0gMDtcblxuICAgICAgaWYgKGlzTm9uTnVtZXJpY0ZhbHN5ICYmIGFsbG93RW1wdHlGb3JtYXR0aW5nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHZhbHVlIGlzIG5vdCBkZWZpbmVkIHJldHVybiBlbXB0eSBzdHJpbmdcbiAgICAgIGlmIChpc05vbk51bWVyaWNGYWxzeSAmJiAhYWxsb3dFbXB0eUZvcm1hdHRpbmcpIHJldHVybiAnJztcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICBpc051bWVyaWNTdHJpbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvL3JvdW5kIHRoZSBudW1iZXIgYmFzZWQgb24gZGVjaW1hbFNjYWxlXG4gICAgICAvL2Zvcm1hdCBvbmx5IGlmIG5vbiBmb3JtYXR0ZWQgdmFsdWUgaXMgcHJvdmlkZWRcbiAgICAgIGlmIChpc051bWVyaWNTdHJpbmcgJiYgIWZvcm1hdCAmJiB0eXBlb2YgZGVjaW1hbFNjYWxlID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YWx1ZSA9ICgwLCBfdXRpbHMucm91bmRUb1ByZWNpc2lvbikodmFsdWUsIGRlY2ltYWxTY2FsZSwgZml4ZWREZWNpbWFsU2NhbGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBpc051bWVyaWNTdHJpbmcgPyB0aGlzLmZvcm1hdE51bVN0cmluZyh2YWx1ZSkgOiB0aGlzLmZvcm1hdElucHV0KHZhbHVlKTtcblxuICAgICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Zvcm1hdE5lZ2F0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0TmVnYXRpb24oKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgdmFyIGFsbG93TmVnYXRpdmUgPSB0aGlzLnByb3BzLmFsbG93TmVnYXRpdmU7XG5cbiAgICAgIHZhciBuZWdhdGlvblJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC0pJyk7XG4gICAgICB2YXIgZG91YmxlTmVnYXRpb25SZWdleCA9IG5ldyBSZWdFeHAoJygtKSguKSooLSknKTtcblxuICAgICAgLy8gQ2hlY2sgbnVtYmVyIGhhcyAnLScgdmFsdWVcbiAgICAgIHZhciBoYXNOZWdhdGlvbiA9IG5lZ2F0aW9uUmVnZXgudGVzdCh2YWx1ZSk7XG5cbiAgICAgIC8vIENoZWNrIG51bWJlciBoYXMgMiBvciBtb3JlICctJyB2YWx1ZXNcbiAgICAgIHZhciByZW1vdmVOZWdhdGlvbiA9IGRvdWJsZU5lZ2F0aW9uUmVnZXgudGVzdCh2YWx1ZSk7XG5cbiAgICAgIC8vcmVtb3ZlIG5lZ2F0aW9uXG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0vZywgJycpO1xuXG4gICAgICBpZiAoaGFzTmVnYXRpb24gJiYgIXJlbW92ZU5lZ2F0aW9uICYmIGFsbG93TmVnYXRpdmUpIHtcbiAgICAgICAgdmFsdWUgPSAnLScgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Zvcm1hdElucHV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0SW5wdXQoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgdmFyIGZvcm1hdCA9IHRoaXMucHJvcHMuZm9ybWF0O1xuXG4gICAgICAvL2Zvcm1hdCBuZWdhdGlvbiBvbmx5IGlmIHdlIGFyZSBmb3JtYXR0aW5nIGFzIG51bWJlclxuXG4gICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZm9ybWF0TmVnYXRpb24odmFsdWUpO1xuICAgICAgfVxuXG4gICAgICAvL3JlbW92ZSBmb3JtYXR0aW5nIGZyb20gbnVtYmVyXG4gICAgICB2YWx1ZSA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyh2YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdE51bVN0cmluZyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqKiBmb3JtYXQgc3BlY2lmaWMgbWV0aG9kcyBlbmQgKioqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpc0NoYXJhY3RlckFGb3JtYXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NoYXJhY3RlckFGb3JtYXQoY2FyZXRQb3MsIHZhbHVlKSB7XG4gICAgICB2YXIgX3Byb3BzOSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0ID0gX3Byb3BzOS5mb3JtYXQsXG4gICAgICAgICAgcHJlZml4ID0gX3Byb3BzOS5wcmVmaXgsXG4gICAgICAgICAgc3VmZml4ID0gX3Byb3BzOS5zdWZmaXgsXG4gICAgICAgICAgZGVjaW1hbFNjYWxlID0gX3Byb3BzOS5kZWNpbWFsU2NhbGUsXG4gICAgICAgICAgZml4ZWREZWNpbWFsU2NhbGUgPSBfcHJvcHM5LmZpeGVkRGVjaW1hbFNjYWxlO1xuXG4gICAgICB2YXIgX2dldFNlcGFyYXRvcnM1ID0gdGhpcy5nZXRTZXBhcmF0b3JzKCksXG4gICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9IF9nZXRTZXBhcmF0b3JzNS5kZWNpbWFsU2VwYXJhdG9yO1xuXG4gICAgICAvL2NoZWNrIHdpdGhpbiBmb3JtYXQgcGF0dGVyblxuXG5cbiAgICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJyAmJiBmb3JtYXRbY2FyZXRQb3NdICE9PSAnIycpIHJldHVybiB0cnVlO1xuXG4gICAgICAvL2NoZWNrIGluIG51bWJlciBmb3JtYXRcbiAgICAgIGlmICghZm9ybWF0ICYmIChjYXJldFBvcyA8IHByZWZpeC5sZW5ndGggfHwgY2FyZXRQb3MgPj0gdmFsdWUubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCB8fCBkZWNpbWFsU2NhbGUgJiYgZml4ZWREZWNpbWFsU2NhbGUgJiYgdmFsdWVbY2FyZXRQb3NdID09PSBkZWNpbWFsU2VwYXJhdG9yKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NoZWNrSWZGb3JtYXRHb3REZWxldGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tJZkZvcm1hdEdvdERlbGV0ZWQoc3RhcnQsIGVuZCwgdmFsdWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2hhcmFjdGVyQUZvcm1hdChpLCB2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBjaGVjayBpZiBhbnkgZm9ybWF0dGluZyBnb3QgcmVtb3ZlZCBieSB0aGUgZGVsZXRlIG9yIGJhY2tzcGFjZSBhbmQgcmVzZXQgdGhlIHZhbHVlXG4gICAgICogSXQgd2lsbCBhbHNvIHdvcmsgYXMgZmFsbGJhY2sgaWYgYW5kcm9pZCBjaG9tZSBrZXlEb3duIGhhbmRsZXIgZG9lcyBub3Qgd29ya1xuICAgICAqKi9cblxuICB9LCB7XG4gICAga2V5OiAnY29ycmVjdElucHV0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb3JyZWN0SW5wdXRWYWx1ZShjYXJldFBvcywgbGFzdFZhbHVlLCB2YWx1ZSkge1xuICAgICAgdmFyIF9wcm9wczEwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBmb3JtYXQgPSBfcHJvcHMxMC5mb3JtYXQsXG4gICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9IF9wcm9wczEwLmRlY2ltYWxTZXBhcmF0b3IsXG4gICAgICAgICAgYWxsb3dOZWdhdGl2ZSA9IF9wcm9wczEwLmFsbG93TmVnYXRpdmU7XG5cbiAgICAgIHZhciBsYXN0TnVtU3RyID0gdGhpcy5zdGF0ZS5udW1Bc1N0cmluZyB8fCAnJztcbiAgICAgIHZhciBfc2VsZWN0aW9uQmVmb3JlSW5wdXQgPSB0aGlzLnNlbGVjdGlvbkJlZm9yZUlucHV0LFxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gX3NlbGVjdGlvbkJlZm9yZUlucHV0LnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgIHNlbGVjdGlvbkVuZCA9IF9zZWxlY3Rpb25CZWZvcmVJbnB1dC5zZWxlY3Rpb25FbmQ7XG5cbiAgICAgIHZhciBfZmluZENoYW5nZWRJbmRleCA9ICgwLCBfdXRpbHMuZmluZENoYW5nZWRJbmRleCkobGFzdFZhbHVlLCB2YWx1ZSksXG4gICAgICAgICAgc3RhcnQgPSBfZmluZENoYW5nZWRJbmRleC5zdGFydCxcbiAgICAgICAgICBlbmQgPSBfZmluZENoYW5nZWRJbmRleC5lbmQ7XG5cbiAgICAgIC8qIGRvbid0IGRvIGFueWh0aW5nIGlmIHNvbWV0aGluZyBnb3QgYWRkZWQsXG4gICAgICAgb3IgaWYgdmFsdWUgaXMgZW1wdHkgc3RyaW5nICh3aGVuIHdob2xlIGlucHV0IGlzIGNsZWFyZWQpXG4gICAgICAgb3Igd2hvbGUgaW5wdXQgaXMgcmVwbGFjZSB3aXRoIGEgbnVtYmVyXG4gICAgICAqL1xuXG5cbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiBsYXN0VmFsdWUubGVuZ3RoIHx8ICF2YWx1ZS5sZW5ndGggfHwgc3RhcnQgPT09IGVuZCB8fCBzdGFydCA9PT0gMCAmJiBlbmQgPT09IGxhc3RWYWx1ZS5sZW5ndGggfHwgc2VsZWN0aW9uU3RhcnQgPT09IDAgJiYgc2VsZWN0aW9uRW5kID09PSBsYXN0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgLy9pZiBmb3JtYXQgZ290IGRlbGV0ZWQgcmVzZXQgdGhlIHZhbHVlIHRvIGxhc3QgdmFsdWVcbiAgICAgIGlmICh0aGlzLmNoZWNrSWZGb3JtYXRHb3REZWxldGVkKHN0YXJ0LCBlbmQsIGxhc3RWYWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBsYXN0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8vZm9yIG51bWJlcnMgY2hlY2sgaWYgYmVmb3JlRGVjaW1hbCBnb3QgZGVsZXRlZCBhbmQgdGhlcmUgaXMgbm90aGluZyBhZnRlciBkZWNpbWFsLFxuICAgICAgLy9jbGVhciBhbGwgbnVtYmVycyBpbiBzdWNoIGNhc2Ugd2hpbGUga2VlcGluZyB0aGUgLSBzaWduXG4gICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICB2YXIgbnVtZXJpY1N0cmluZyA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyh2YWx1ZSk7XG5cbiAgICAgICAgdmFyIF9zcGxpdERlY2ltYWwyID0gKDAsIF91dGlscy5zcGxpdERlY2ltYWwpKG51bWVyaWNTdHJpbmcsIGFsbG93TmVnYXRpdmUpLFxuICAgICAgICAgICAgYmVmb3JlRGVjaW1hbCA9IF9zcGxpdERlY2ltYWwyLmJlZm9yZURlY2ltYWwsXG4gICAgICAgICAgICBhZnRlckRlY2ltYWwgPSBfc3BsaXREZWNpbWFsMi5hZnRlckRlY2ltYWwsXG4gICAgICAgICAgICBhZGROZWdhdGlvbiA9IF9zcGxpdERlY2ltYWwyLmFkZE5lZ2F0aW9uOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuXG4gICAgICAgIC8vY2xlYXIgb25seSBpZiBzb21ldGhpbmcgZ290IGRlbGV0ZWRcblxuXG4gICAgICAgIHZhciBpc0JlZm9yZURlY2ltYWxQb2ludCA9IGNhcmV0UG9zIDwgdmFsdWUuaW5kZXhPZihkZWNpbWFsU2VwYXJhdG9yKSArIDE7XG4gICAgICAgIGlmIChudW1lcmljU3RyaW5nLmxlbmd0aCA8IGxhc3ROdW1TdHIubGVuZ3RoICYmIGlzQmVmb3JlRGVjaW1hbFBvaW50ICYmIGJlZm9yZURlY2ltYWwgPT09ICcnICYmICFwYXJzZUZsb2F0KGFmdGVyRGVjaW1hbCkpIHtcbiAgICAgICAgICByZXR1cm4gYWRkTmVnYXRpb24gPyAnLScgOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25DaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICBlLnBlcnNpc3QoKTtcbiAgICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSBlbC52YWx1ZTtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGlzQWxsb3dlZCA9IHByb3BzLmlzQWxsb3dlZDtcblxuICAgICAgdmFyIGxhc3RWYWx1ZSA9IHN0YXRlLnZhbHVlIHx8ICcnO1xuXG4gICAgICAvKk1heCBvZiBzZWxlY3Rpb25TdGFydCBhbmQgc2VsZWN0aW9uRW5kIGlzIHRha2VuIGZvciB0aGUgcGF0Y2ggb2YgcGl4ZWwgYW5kIG90aGVyIG1vYmlsZSBkZXZpY2UgY2FyZXQgYnVnKi9cbiAgICAgIHZhciBjdXJyZW50Q2FyZXRQb3NpdGlvbiA9IE1hdGgubWF4KGVsLnNlbGVjdGlvblN0YXJ0LCBlbC5zZWxlY3Rpb25FbmQpO1xuXG4gICAgICBpbnB1dFZhbHVlID0gdGhpcy5jb3JyZWN0SW5wdXRWYWx1ZShjdXJyZW50Q2FyZXRQb3NpdGlvbiwgbGFzdFZhbHVlLCBpbnB1dFZhbHVlKTtcblxuICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRJbnB1dChpbnB1dFZhbHVlKSB8fCAnJztcbiAgICAgIHZhciBudW1Bc1N0cmluZyA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyhmb3JtYXR0ZWRWYWx1ZSk7XG5cbiAgICAgIHZhciB2YWx1ZU9iaiA9IHRoaXMuZ2V0VmFsdWVPYmplY3QoZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nKTtcblxuICAgICAgaWYgKCFpc0FsbG93ZWQodmFsdWVPYmopKSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID0gbGFzdFZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvL3NldCB0aGUgdmFsdWUgaW1wZXJhdGl2ZWx5LCB0aGlzIGlzIHJlcXVpcmVkIGZvciBJRSBmaXhcbiAgICAgIGVsLnZhbHVlID0gZm9ybWF0dGVkVmFsdWU7XG5cbiAgICAgIC8vZ2V0IHRoZSBjYXJldCBwb3NpdGlvblxuICAgICAgdmFyIGNhcmV0UG9zID0gdGhpcy5nZXRDYXJldFBvc2l0aW9uKGlucHV0VmFsdWUsIGZvcm1hdHRlZFZhbHVlLCBjdXJyZW50Q2FyZXRQb3NpdGlvbik7XG5cbiAgICAgIC8vc2V0IGNhcmV0IHBvc2l0aW9uXG4gICAgICB0aGlzLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvcywgZm9ybWF0dGVkVmFsdWUpO1xuXG4gICAgICAvL2NoYW5nZSB0aGUgc3RhdGVcbiAgICAgIGlmIChmb3JtYXR0ZWRWYWx1ZSAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZU9iaiwgZSk7XG4gICAgICAgICAgcHJvcHMub25DaGFuZ2UoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UoZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25CbHVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25CbHVyKGUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBmb3JtYXQgPSBwcm9wcy5mb3JtYXQsXG4gICAgICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyO1xuICAgICAgdmFyIG51bUFzU3RyaW5nID0gc3RhdGUubnVtQXNTdHJpbmc7XG5cbiAgICAgIHZhciBsYXN0VmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgIG51bUFzU3RyaW5nID0gKDAsIF91dGlscy5maXhMZWFkaW5nWmVybykobnVtQXNTdHJpbmcpO1xuICAgICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdE51bVN0cmluZyhudW1Bc1N0cmluZyk7XG5cbiAgICAgICAgLy9jaGFuZ2UgdGhlIHN0YXRlXG4gICAgICAgIGlmIChmb3JtYXR0ZWRWYWx1ZSAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICAgICAgLy8gdGhlIGV2ZW50IG5lZWRzIHRvIGJlIHBlcnNpc3RlZCBiZWNhdXNlIGl0cyBwcm9wZXJ0aWVzIGNhbiBiZSBhY2Nlc3NlZCBpbiBhbiBhc3luY2hyb25vdXMgd2F5XG4gICAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmc6IG51bUFzU3RyaW5nIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZU9iaiA9IF90aGlzMi5nZXRWYWx1ZU9iamVjdChmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmcpO1xuICAgICAgICAgICAgcHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZU9iaiwgZSk7XG4gICAgICAgICAgICBvbkJsdXIoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvbkJsdXIoZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25LZXlEb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICAgIHZhciBrZXkgPSBlLmtleTtcbiAgICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgIHNlbGVjdGlvbkVuZCA9IGVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICBfZWwkdmFsdWUgPSBlbC52YWx1ZSxcbiAgICAgICAgICB2YWx1ZSA9IF9lbCR2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfZWwkdmFsdWU7XG5cbiAgICAgIHZhciBleHBlY3RlZENhcmV0UG9zaXRpb24gPSB2b2lkIDA7XG4gICAgICB2YXIgX3Byb3BzMTEgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlY2ltYWxTY2FsZSA9IF9wcm9wczExLmRlY2ltYWxTY2FsZSxcbiAgICAgICAgICBmaXhlZERlY2ltYWxTY2FsZSA9IF9wcm9wczExLmZpeGVkRGVjaW1hbFNjYWxlLFxuICAgICAgICAgIHByZWZpeCA9IF9wcm9wczExLnByZWZpeCxcbiAgICAgICAgICBzdWZmaXggPSBfcHJvcHMxMS5zdWZmaXgsXG4gICAgICAgICAgZm9ybWF0ID0gX3Byb3BzMTEuZm9ybWF0LFxuICAgICAgICAgIG9uS2V5RG93biA9IF9wcm9wczExLm9uS2V5RG93bixcbiAgICAgICAgICBvblZhbHVlQ2hhbmdlID0gX3Byb3BzMTEub25WYWx1ZUNoYW5nZTtcblxuICAgICAgdmFyIGlnbm9yZURlY2ltYWxTZXBhcmF0b3IgPSBkZWNpbWFsU2NhbGUgIT09IHVuZGVmaW5lZCAmJiBmaXhlZERlY2ltYWxTY2FsZTtcbiAgICAgIHZhciBudW1SZWdleCA9IHRoaXMuZ2V0TnVtYmVyUmVnZXgoZmFsc2UsIGlnbm9yZURlY2ltYWxTZXBhcmF0b3IpO1xuICAgICAgdmFyIG5lZ2F0aXZlUmVnZXggPSBuZXcgUmVnRXhwKCctJyk7XG4gICAgICB2YXIgaXNQYXR0ZXJuRm9ybWF0ID0gdHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZyc7XG5cbiAgICAgIHRoaXMuc2VsZWN0aW9uQmVmb3JlSW5wdXQgPSB7XG4gICAgICAgIHNlbGVjdGlvblN0YXJ0OiBzZWxlY3Rpb25TdGFydCxcbiAgICAgICAgc2VsZWN0aW9uRW5kOiBzZWxlY3Rpb25FbmRcblxuICAgICAgICAvL0hhbmRsZSBiYWNrc3BhY2UgYW5kIGRlbGV0ZSBhZ2FpbnN0IG5vbiBudW1lcmljYWwvZGVjaW1hbCBjaGFyYWN0ZXJzIG9yIGFycm93IGtleXNcbiAgICAgIH07aWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICBleHBlY3RlZENhcmV0UG9zaXRpb24gPSBzZWxlY3Rpb25TdGFydCAtIDE7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0ICsgMTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRGVsZXRlJykge1xuICAgICAgICBleHBlY3RlZENhcmV0UG9zaXRpb24gPSBzZWxlY3Rpb25TdGFydDtcbiAgICAgIH1cblxuICAgICAgLy9pZiBleHBlY3RlZENhcmV0UG9zaXRpb24gaXMgbm90IHNldCBpdCBtZWFucyB3ZSBkb24ndCB3YW50IHRvIEhhbmRsZSBrZXlEb3duXG4gICAgICAvL2Fsc28gaWYgbXVsdGlwbGUgY2hhcmFjdGVycyBhcmUgc2VsZWN0ZWQgZG9uJ3QgaGFuZGxlXG4gICAgICBpZiAoZXhwZWN0ZWRDYXJldFBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgc2VsZWN0aW9uU3RhcnQgIT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgICBvbktleURvd24oZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0NhcmV0UG9zaXRpb24gPSBleHBlY3RlZENhcmV0UG9zaXRpb247XG4gICAgICB2YXIgbGVmdEJvdW5kID0gaXNQYXR0ZXJuRm9ybWF0ID8gZm9ybWF0LmluZGV4T2YoJyMnKSA6IHByZWZpeC5sZW5ndGg7XG4gICAgICB2YXIgcmlnaHRCb3VuZCA9IGlzUGF0dGVybkZvcm1hdCA/IGZvcm1hdC5sYXN0SW5kZXhPZignIycpICsgMSA6IHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG5cbiAgICAgIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBrZXkgPT09ICdBcnJvd0xlZnQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiwgZGlyZWN0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRGVsZXRlJyAmJiAhbnVtUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSAmJiAhbmVnYXRpdmVSZWdleC50ZXN0KHZhbHVlW2V4cGVjdGVkQ2FyZXRQb3NpdGlvbl0pKSB7XG4gICAgICAgIHdoaWxlICghbnVtUmVnZXgudGVzdCh2YWx1ZVtuZXdDYXJldFBvc2l0aW9uXSkgJiYgbmV3Q2FyZXRQb3NpdGlvbiA8IHJpZ2h0Qm91bmQpIHtcbiAgICAgICAgICBuZXdDYXJldFBvc2l0aW9uKys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQmFja3NwYWNlJyAmJiAhbnVtUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSkge1xuICAgICAgICAvKiBOT1RFOiBUaGlzIGlzIHNwZWNpYWwgY2FzZSB3aGVuIGJhY2tzcGFjZSBpcyBwcmVzc2VkIG9uIGEgXG4gICAgICAgIG5lZ2F0aXZlIHZhbHVlIHdoaWxlIHRoZSBjdXJzb3IgcG9zaXRpb24gaXMgYWZ0ZXIgcHJlZml4LiBXZSBjYW4ndCBoYW5kbGUgaXQgb24gb25DaGFuZ2UgYmVjYXVzZVxuICAgICAgICB3ZSB3aWxsIG5vdCBoYXZlIGFueSBpbmZvcm1hdGlvbiBvZiBrZXlQcmVzc1xuICAgICAgICAqL1xuICAgICAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPD0gbGVmdEJvdW5kICsgMSAmJiB2YWx1ZVswXSA9PT0gJy0nICYmIHR5cGVvZiBmb3JtYXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdmFyIG5ld1ZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgIHZhciBfbnVtQXNTdHJpbmcyID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKG5ld1ZhbHVlKTtcbiAgICAgICAgICB2YXIgdmFsdWVPYmogPSB0aGlzLmdldFZhbHVlT2JqZWN0KG5ld1ZhbHVlLCBfbnVtQXNTdHJpbmcyKTtcblxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbmV3VmFsdWUsIG51bUFzU3RyaW5nOiBfbnVtQXNTdHJpbmcyIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgbmV3Q2FyZXRQb3NpdGlvbiwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZSh2YWx1ZU9iaiwgZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5lZ2F0aXZlUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSkge1xuICAgICAgICAgIHdoaWxlICghbnVtUmVnZXgudGVzdCh2YWx1ZVtuZXdDYXJldFBvc2l0aW9uIC0gMV0pICYmIG5ld0NhcmV0UG9zaXRpb24gPiBsZWZ0Qm91bmQpIHtcbiAgICAgICAgICAgIG5ld0NhcmV0UG9zaXRpb24tLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIG5ld0NhcmV0UG9zaXRpb24sICdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0NhcmV0UG9zaXRpb24gIT09IGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiB8fCBleHBlY3RlZENhcmV0UG9zaXRpb24gPCBsZWZ0Qm91bmQgfHwgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID4gcmlnaHRCb3VuZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIG5ld0NhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgLyogTk9URTogdGhpcyBpcyBqdXN0IHJlcXVpcmVkIGZvciB1bml0IHRlc3QgYXMgd2UgbmVlZCB0byBnZXQgdGhlIG5ld0NhcmV0UG9zaXRpb24sXG4gICAgICAgICAgICAgIFJlbW92ZSB0aGlzIHdoZW4geW91IGZpbmQgZGlmZmVyZW50IHNvbHV0aW9uICovXG4gICAgICBpZiAoZS5pc1VuaXRUZXN0UnVuKSB7XG4gICAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIG5ld0NhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuXG4gICAgLyoqIHJlcXVpcmVkIHRvIGhhbmRsZSB0aGUgY2FyZXQgcG9zaXRpb24gd2hlbiBjbGljayBhbnl3aGVyZSB3aXRoaW4gdGhlIGlucHV0ICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvbk1vdXNlVXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlVXAoZSkge1xuICAgICAgdmFyIGVsID0gZS50YXJnZXQ7XG5cbiAgICAgIC8qKiBcbiAgICAgICAqIE5PVEU6IHdlIGhhdmUgdG8gZ2l2ZSBkZWZhdWx0IHZhbHVlIGZvciB2YWx1ZSBhcyBpbiBjYXNlIHdoZW4gY3VzdG9tIGlucHV0IGlzIHByb3ZpZGVkIFxuICAgICAgICogdmFsdWUgY2FuIGNvbWUgYXMgdW5kZWZpbmVkIHdoZW4gbm90aGluZyBpcyBwcm92aWRlZCBvbiB2YWx1ZSBwcm9wLlxuICAgICAgKi9cbiAgICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgIHNlbGVjdGlvbkVuZCA9IGVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICBfZWwkdmFsdWUyID0gZWwudmFsdWUsXG4gICAgICAgICAgdmFsdWUgPSBfZWwkdmFsdWUyID09PSB1bmRlZmluZWQgPyAnJyA6IF9lbCR2YWx1ZTI7XG5cblxuICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0ID09PSBzZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgdmFyIGNhcmV0UG9zaXRpb24gPSB0aGlzLmNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBzZWxlY3Rpb25TdGFydCk7XG4gICAgICAgIGlmIChjYXJldFBvc2l0aW9uICE9PSBzZWxlY3Rpb25TdGFydCkge1xuICAgICAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLm9uTW91c2VVcChlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkZvY3VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Gb2N1cyhlKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgLy8gV29ya2Fyb3VuZCBDaHJvbWUgYW5kIFNhZmFyaSBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Nzc5MzI4XG4gICAgICAvLyAob25Gb2N1cyBldmVudCB0YXJnZXQgc2VsZWN0aW9uU3RhcnQgaXMgYWx3YXlzIDAgYmVmb3JlIHNldFRpbWVvdXQpXG4gICAgICBlLnBlcnNpc3QoKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICAgICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gZWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICBfZWwkdmFsdWUzID0gZWwudmFsdWUsXG4gICAgICAgICAgICB2YWx1ZSA9IF9lbCR2YWx1ZTMgPT09IHVuZGVmaW5lZCA/ICcnIDogX2VsJHZhbHVlMztcblxuXG4gICAgICAgIHZhciBjYXJldFBvc2l0aW9uID0gX3RoaXM0LmNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBzZWxlY3Rpb25TdGFydCk7XG4gICAgICAgIGlmIChjYXJldFBvc2l0aW9uICE9PSBzZWxlY3Rpb25TdGFydCkge1xuICAgICAgICAgIF90aGlzNC5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXM0LnByb3BzLm9uRm9jdXMoZSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzMTIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHR5cGUgPSBfcHJvcHMxMi50eXBlLFxuICAgICAgICAgIGRpc3BsYXlUeXBlID0gX3Byb3BzMTIuZGlzcGxheVR5cGUsXG4gICAgICAgICAgY3VzdG9tSW5wdXQgPSBfcHJvcHMxMi5jdXN0b21JbnB1dCxcbiAgICAgICAgICByZW5kZXJUZXh0ID0gX3Byb3BzMTIucmVuZGVyVGV4dCxcbiAgICAgICAgICBnZXRJbnB1dFJlZiA9IF9wcm9wczEyLmdldElucHV0UmVmO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblxuXG4gICAgICB2YXIgb3RoZXJQcm9wcyA9ICgwLCBfdXRpbHMub21pdCkodGhpcy5wcm9wcywgcHJvcFR5cGVzKTtcblxuICAgICAgdmFyIGlucHV0UHJvcHMgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlclByb3BzLCB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgb25CbHVyOiB0aGlzLm9uQmx1clxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkaXNwbGF5VHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHJldHVybiByZW5kZXJUZXh0ID8gcmVuZGVyVGV4dCh2YWx1ZSkgfHwgbnVsbCA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlclByb3BzLCB7IHJlZjogZ2V0SW5wdXRSZWYgfSksXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VzdG9tSW5wdXQpIHtcbiAgICAgICAgdmFyIEN1c3RvbUlucHV0ID0gY3VzdG9tSW5wdXQ7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDdXN0b21JbnB1dCwgaW5wdXRQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBpbnB1dFByb3BzLCB7XG4gICAgICAgIHJlZjogZ2V0SW5wdXRSZWZcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bWJlckZvcm1hdDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbk51bWJlckZvcm1hdC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5OdW1iZXJGb3JtYXQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlckZvcm1hdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1udW1iZXItZm9ybWF0L2xpYi9udW1iZXJfZm9ybWF0LmpzXG4vLyBtb2R1bGUgaWQgPSAxODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDYgNyA4IDkgMTAgMTEgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO1xuXG52YXIgX2tleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7XG5cbmV4cG9ydHMubm9vcCA9IG5vb3A7XG5leHBvcnRzLnJldHVyblRydWUgPSByZXR1cm5UcnVlO1xuZXhwb3J0cy5jaGFySXNOdW1iZXIgPSBjaGFySXNOdW1iZXI7XG5leHBvcnRzLmVzY2FwZVJlZ0V4cCA9IGVzY2FwZVJlZ0V4cDtcbmV4cG9ydHMuc3BsaXREZWNpbWFsID0gc3BsaXREZWNpbWFsO1xuZXhwb3J0cy5maXhMZWFkaW5nWmVybyA9IGZpeExlYWRpbmdaZXJvO1xuZXhwb3J0cy5saW1pdFRvU2NhbGUgPSBsaW1pdFRvU2NhbGU7XG5leHBvcnRzLnJvdW5kVG9QcmVjaXNpb24gPSByb3VuZFRvUHJlY2lzaW9uO1xuZXhwb3J0cy5vbWl0ID0gb21pdDtcbmV4cG9ydHMuc2V0Q2FyZXRQb3NpdGlvbiA9IHNldENhcmV0UG9zaXRpb247XG5leHBvcnRzLmZpbmRDaGFuZ2VkSW5kZXggPSBmaW5kQ2hhbmdlZEluZGV4O1xuZXhwb3J0cy5jbGFtcCA9IGNsYW1wO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBiYXNpYyBub29wIGZ1bmN0aW9uXG5mdW5jdGlvbiBub29wKCkge31cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjaGFySXNOdW1iZXIoY2hhcikge1xuICByZXR1cm4gISEoY2hhciB8fCAnJykubWF0Y2goL1xcZC8pO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csIFwiXFxcXCQmXCIpO1xufVxuXG4vL3NwaWx0IGEgZmxvYXQgbnVtYmVyIGludG8gZGlmZmVyZW50IHBhcnRzIGJlZm9yZURlY2ltYWwsIGFmdGVyRGVjaW1hbCwgYW5kIG5lZ2F0aW9uXG5mdW5jdGlvbiBzcGxpdERlY2ltYWwobnVtU3RyKSB7XG4gIHZhciBhbGxvd05lZ2F0aXZlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gIHZhciBoYXNOYWdhdGlvbiA9IG51bVN0clswXSA9PT0gJy0nO1xuICB2YXIgYWRkTmVnYXRpb24gPSBoYXNOYWdhdGlvbiAmJiBhbGxvd05lZ2F0aXZlO1xuICBudW1TdHIgPSBudW1TdHIucmVwbGFjZSgnLScsICcnKTtcblxuICB2YXIgcGFydHMgPSBudW1TdHIuc3BsaXQoJy4nKTtcbiAgdmFyIGJlZm9yZURlY2ltYWwgPSBwYXJ0c1swXTtcbiAgdmFyIGFmdGVyRGVjaW1hbCA9IHBhcnRzWzFdIHx8ICcnO1xuXG4gIHJldHVybiB7XG4gICAgYmVmb3JlRGVjaW1hbDogYmVmb3JlRGVjaW1hbCxcbiAgICBhZnRlckRlY2ltYWw6IGFmdGVyRGVjaW1hbCxcbiAgICBoYXNOYWdhdGlvbjogaGFzTmFnYXRpb24sXG4gICAgYWRkTmVnYXRpb246IGFkZE5lZ2F0aW9uXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpeExlYWRpbmdaZXJvKG51bVN0cikge1xuICBpZiAoIW51bVN0cikgcmV0dXJuIG51bVN0cjtcbiAgdmFyIGlzTmVnYXRpdmUgPSBudW1TdHJbMF0gPT09ICctJztcbiAgaWYgKGlzTmVnYXRpdmUpIG51bVN0ciA9IG51bVN0ci5zdWJzdHJpbmcoMSwgbnVtU3RyLmxlbmd0aCk7XG4gIHZhciBwYXJ0cyA9IG51bVN0ci5zcGxpdCgnLicpO1xuICB2YXIgYmVmb3JlRGVjaW1hbCA9IHBhcnRzWzBdLnJlcGxhY2UoL14wKy8sICcnKSB8fCAnMCc7XG4gIHZhciBhZnRlckRlY2ltYWwgPSBwYXJ0c1sxXSB8fCAnJztcblxuICByZXR1cm4gJycgKyAoaXNOZWdhdGl2ZSA/ICctJyA6ICcnKSArIGJlZm9yZURlY2ltYWwgKyAoYWZ0ZXJEZWNpbWFsID8gJy4nICsgYWZ0ZXJEZWNpbWFsIDogJycpO1xufVxuXG4vKipcbiAqIGxpbWl0IGRlY2ltYWwgbnVtYmVycyB0byBnaXZlbiBzY2FsZVxuICogTm90IHVzZWQgLmZpeGVkVG8gYmVjYXVzZSB0aGF0IHdpbGwgYnJlYWsgd2l0aCBiaWcgbnVtYmVyc1xuICovXG5mdW5jdGlvbiBsaW1pdFRvU2NhbGUobnVtU3RyLCBzY2FsZSwgZml4ZWREZWNpbWFsU2NhbGUpIHtcbiAgdmFyIHN0ciA9ICcnO1xuICB2YXIgZmlsbGVyID0gZml4ZWREZWNpbWFsU2NhbGUgPyAnMCcgOiAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPD0gc2NhbGUgLSAxOyBpKyspIHtcbiAgICBzdHIgKz0gbnVtU3RyW2ldIHx8IGZpbGxlcjtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIHJlcXVpcmVkIHRvIHJvdW5kIHByb3AgdmFsdWUgdG8gZ2l2ZW4gc2NhbGUuXG4gKiBOb3QgdXNlZCAucm91bmQgb3IgLmZpeGVkVG8gYmVjYXVzZSB0aGF0IHdpbGwgYnJlYWsgd2l0aCBiaWcgbnVtYmVyc1xuICovXG5mdW5jdGlvbiByb3VuZFRvUHJlY2lzaW9uKG51bVN0ciwgc2NhbGUsIGZpeGVkRGVjaW1hbFNjYWxlKSB7XG4gIC8vaWYgbnVtYmVyIGlzIGVtcHR5IGRvbid0IGRvIGFueXRoaW5nIHJldHVybiBlbXB0eSBzdHJpbmdcbiAgaWYgKFsnJywgJy0nXS5pbmNsdWRlcyhudW1TdHIpKSByZXR1cm4gbnVtU3RyO1xuXG4gIHZhciBzaG91ZEhhdmVEZWNpbWFsU2VwYXJhdG9yID0gbnVtU3RyLmluZGV4T2YoJy4nKSAhPT0gLTEgJiYgc2NhbGU7XG5cbiAgdmFyIF9zcGxpdERlY2ltYWwgPSBzcGxpdERlY2ltYWwobnVtU3RyKSxcbiAgICAgIGJlZm9yZURlY2ltYWwgPSBfc3BsaXREZWNpbWFsLmJlZm9yZURlY2ltYWwsXG4gICAgICBhZnRlckRlY2ltYWwgPSBfc3BsaXREZWNpbWFsLmFmdGVyRGVjaW1hbCxcbiAgICAgIGhhc05hZ2F0aW9uID0gX3NwbGl0RGVjaW1hbC5oYXNOYWdhdGlvbjtcblxuICB2YXIgcm91bmRlZERlY2ltYWxQYXJ0cyA9IHBhcnNlRmxvYXQoJzAuJyArIChhZnRlckRlY2ltYWwgfHwgJzAnKSkudG9GaXhlZChzY2FsZSkuc3BsaXQoJy4nKTtcbiAgdmFyIGludFBhcnQgPSBiZWZvcmVEZWNpbWFsLnNwbGl0KCcnKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChyb3VuZGVkU3RyLCBjdXJyZW50LCBpZHgpIHtcbiAgICBpZiAocm91bmRlZFN0ci5sZW5ndGggPiBpZHgpIHtcbiAgICAgIHJldHVybiAoTnVtYmVyKHJvdW5kZWRTdHJbMF0pICsgTnVtYmVyKGN1cnJlbnQpKS50b1N0cmluZygpICsgcm91bmRlZFN0ci5zdWJzdHJpbmcoMSwgcm91bmRlZFN0ci5sZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudCArIHJvdW5kZWRTdHI7XG4gIH0sIHJvdW5kZWREZWNpbWFsUGFydHNbMF0pO1xuXG4gIHZhciBkZWNpbWFsUGFydCA9IGxpbWl0VG9TY2FsZShyb3VuZGVkRGVjaW1hbFBhcnRzWzFdIHx8ICcnLCBNYXRoLm1pbihzY2FsZSwgYWZ0ZXJEZWNpbWFsLmxlbmd0aCksIGZpeGVkRGVjaW1hbFNjYWxlKTtcbiAgdmFyIG5lZ2F0aW9uID0gaGFzTmFnYXRpb24gPyAnLScgOiAnJztcbiAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSBzaG91ZEhhdmVEZWNpbWFsU2VwYXJhdG9yID8gJy4nIDogJyc7XG4gIHJldHVybiAnJyArIG5lZ2F0aW9uICsgaW50UGFydCArIGRlY2ltYWxTZXBhcmF0b3IgKyBkZWNpbWFsUGFydDtcbn1cblxuZnVuY3Rpb24gb21pdChvYmosIGtleU1hcHMpIHtcbiAgdmFyIGZpbHRlcmVkT2JqID0ge307XG4gICgwLCBfa2V5czIuZGVmYXVsdCkob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIWtleU1hcHNba2V5XSkgZmlsdGVyZWRPYmpba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbiAgcmV0dXJuIGZpbHRlcmVkT2JqO1xufVxuXG4vKiogc2V0IHRoZSBjYXJldCBwb3NpdG9uIGluIGFuIGlucHV0IGZpZWxkICoqL1xuZnVuY3Rpb24gc2V0Q2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3MpIHtcbiAgZWwudmFsdWUgPSBlbC52YWx1ZTtcbiAgLy8gXiB0aGlzIGlzIHVzZWQgdG8gbm90IG9ubHkgZ2V0IFwiZm9jdXNcIiwgYnV0XG4gIC8vIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlIGl0IGV2ZXJ5dGhpbmcgLXNlbGVjdGVkLVxuICAvLyAoaXQgY2F1c2VzIGFuIGlzc3VlIGluIGNocm9tZSwgYW5kIGhhdmluZyBpdCBkb2Vzbid0IGh1cnQgYW55IG90aGVyIGJyb3dzZXIpXG4gIGlmIChlbCAhPT0gbnVsbCkge1xuICAgIGlmIChlbC5jcmVhdGVUZXh0UmFuZ2UpIHtcbiAgICAgIHZhciByYW5nZSA9IGVsLmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgICAgcmFuZ2UubW92ZSgnY2hhcmFjdGVyJywgY2FyZXRQb3MpO1xuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gKGVsLnNlbGVjdGlvblN0YXJ0ID09PSAwIGFkZGVkIGZvciBGaXJlZm94IGJ1ZylcbiAgICBpZiAoZWwuc2VsZWN0aW9uU3RhcnQgfHwgZWwuc2VsZWN0aW9uU3RhcnQgPT09IDApIHtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgICBlbC5zZXRTZWxlY3Rpb25SYW5nZShjYXJldFBvcywgY2FyZXRQb3MpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFpbCBjaXR5LCBmb3J0dW5hdGVseSB0aGlzIG5ldmVyIGhhcHBlbnMgKGFzIGZhciBhcyBJJ3ZlIHRlc3RlZCkgOilcbiAgICBlbC5mb2N1cygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAgR2l2ZW4gcHJldmlvdXMgdmFsdWUgYW5kIG5ld1ZhbHVlIGl0IHJldHVybnMgdGhlIGluZGV4XG4gIHN0YXJ0IC0gZW5kIHRvIHdoaWNoIHZhbHVlcyBoYXZlIGNoYW5nZWQuXG4gIFRoaXMgZnVuY3Rpb24gbWFrZXMgYXNzdW1wdGlvbiBhYm91dCBvbmx5IGNvbnNlY3V0aXZlXG4gIGNoYXJhY3RlcnMgYXJlIGNoYW5nZWQgd2hpY2ggaXMgY29ycmVjdCBhc3N1bXB0aW9uIGZvciBjYXJldCBpbnB1dC5cbiovXG5mdW5jdGlvbiBmaW5kQ2hhbmdlZEluZGV4KHByZXZWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgdmFyIGkgPSAwLFxuICAgICAgaiA9IDA7XG4gIHZhciBwcmV2TGVuZ3RoID0gcHJldlZhbHVlLmxlbmd0aDtcbiAgdmFyIG5ld0xlbmd0aCA9IG5ld1ZhbHVlLmxlbmd0aDtcbiAgd2hpbGUgKHByZXZWYWx1ZVtpXSA9PT0gbmV3VmFsdWVbaV0gJiYgaSA8IHByZXZMZW5ndGgpIHtcbiAgICBpKys7XG4gIH0gLy9jaGVjayB3aGF0IGhhcyBiZWVuIGNoYW5nZWQgZnJvbSBsYXN0XG4gIHdoaWxlIChwcmV2VmFsdWVbcHJldkxlbmd0aCAtIDEgLSBqXSA9PT0gbmV3VmFsdWVbbmV3TGVuZ3RoIC0gMSAtIGpdICYmIG5ld0xlbmd0aCAtIGogPiBpICYmIHByZXZMZW5ndGggLSBqID4gaSkge1xuICAgIGorKztcbiAgfVxuXG4gIHJldHVybiB7IHN0YXJ0OiBpLCBlbmQ6IHByZXZMZW5ndGggLSBqIH07XG59XG5cbi8qXG4gIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2VcbiovXG5mdW5jdGlvbiBjbGFtcChudW0sIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtbnVtYmVyLWZvcm1hdC9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgNiA3IDggOSAxMCAxMSAxNiIsImltcG9ydCBBdXRvc2l6ZUlucHV0IGZyb20gJ3JlYWN0LWlucHV0LWF1dG9zaXplJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbnZhciBhcnJvd1JlbmRlcmVyID0gZnVuY3Rpb24gYXJyb3dSZW5kZXJlcihfcmVmKSB7XG5cdHZhciBvbk1vdXNlRG93biA9IF9yZWYub25Nb3VzZURvd247XG5cblx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG5cdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWFycm93Jyxcblx0XHRvbk1vdXNlRG93bjogb25Nb3VzZURvd25cblx0fSk7XG59O1xuXG5hcnJvd1JlbmRlcmVyLnByb3BUeXBlcyA9IHtcblx0b25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jXG59O1xuXG52YXIgY2xlYXJSZW5kZXJlciA9IGZ1bmN0aW9uIGNsZWFyUmVuZGVyZXIoKSB7XG5cdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge1xuXHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1jbGVhcicsXG5cdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiAnJnRpbWVzOycgfVxuXHR9KTtcbn07XG5cbnZhciBtYXAgPSBbeyAnYmFzZSc6ICdBJywgJ2xldHRlcnMnOiAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2cgfSwgeyAnYmFzZSc6ICdBQScsICdsZXR0ZXJzJzogL1tcXHVBNzMyXS9nIH0sIHsgJ2Jhc2UnOiAnQUUnLCAnbGV0dGVycyc6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nIH0sIHsgJ2Jhc2UnOiAnQU8nLCAnbGV0dGVycyc6IC9bXFx1QTczNF0vZyB9LCB7ICdiYXNlJzogJ0FVJywgJ2xldHRlcnMnOiAvW1xcdUE3MzZdL2cgfSwgeyAnYmFzZSc6ICdBVicsICdsZXR0ZXJzJzogL1tcXHVBNzM4XFx1QTczQV0vZyB9LCB7ICdiYXNlJzogJ0FZJywgJ2xldHRlcnMnOiAvW1xcdUE3M0NdL2cgfSwgeyAnYmFzZSc6ICdCJywgJ2xldHRlcnMnOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyB9LCB7ICdiYXNlJzogJ0MnLCAnbGV0dGVycyc6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nIH0sIHsgJ2Jhc2UnOiAnRCcsICdsZXR0ZXJzJzogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyB9LCB7ICdiYXNlJzogJ0RaJywgJ2xldHRlcnMnOiAvW1xcdTAxRjFcXHUwMUM0XS9nIH0sIHsgJ2Jhc2UnOiAnRHonLCAnbGV0dGVycyc6IC9bXFx1MDFGMlxcdTAxQzVdL2cgfSwgeyAnYmFzZSc6ICdFJywgJ2xldHRlcnMnOiAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyB9LCB7ICdiYXNlJzogJ0YnLCAnbGV0dGVycyc6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nIH0sIHsgJ2Jhc2UnOiAnRycsICdsZXR0ZXJzJzogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2cgfSwgeyAnYmFzZSc6ICdIJywgJ2xldHRlcnMnOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nIH0sIHsgJ2Jhc2UnOiAnSScsICdsZXR0ZXJzJzogL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyB9LCB7ICdiYXNlJzogJ0onLCAnbGV0dGVycyc6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2cgfSwgeyAnYmFzZSc6ICdLJywgJ2xldHRlcnMnOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nIH0sIHsgJ2Jhc2UnOiAnTCcsICdsZXR0ZXJzJzogL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2cgfSwgeyAnYmFzZSc6ICdMSicsICdsZXR0ZXJzJzogL1tcXHUwMUM3XS9nIH0sIHsgJ2Jhc2UnOiAnTGonLCAnbGV0dGVycyc6IC9bXFx1MDFDOF0vZyB9LCB7ICdiYXNlJzogJ00nLCAnbGV0dGVycyc6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2cgfSwgeyAnYmFzZSc6ICdOJywgJ2xldHRlcnMnOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2cgfSwgeyAnYmFzZSc6ICdOSicsICdsZXR0ZXJzJzogL1tcXHUwMUNBXS9nIH0sIHsgJ2Jhc2UnOiAnTmonLCAnbGV0dGVycyc6IC9bXFx1MDFDQl0vZyB9LCB7ICdiYXNlJzogJ08nLCAnbGV0dGVycyc6IC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyB9LCB7ICdiYXNlJzogJ09JJywgJ2xldHRlcnMnOiAvW1xcdTAxQTJdL2cgfSwgeyAnYmFzZSc6ICdPTycsICdsZXR0ZXJzJzogL1tcXHVBNzRFXS9nIH0sIHsgJ2Jhc2UnOiAnT1UnLCAnbGV0dGVycyc6IC9bXFx1MDIyMl0vZyB9LCB7ICdiYXNlJzogJ1AnLCAnbGV0dGVycyc6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyB9LCB7ICdiYXNlJzogJ1EnLCAnbGV0dGVycyc6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nIH0sIHsgJ2Jhc2UnOiAnUicsICdsZXR0ZXJzJzogL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyB9LCB7ICdiYXNlJzogJ1MnLCAnbGV0dGVycyc6IC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2cgfSwgeyAnYmFzZSc6ICdUJywgJ2xldHRlcnMnOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyB9LCB7ICdiYXNlJzogJ1RaJywgJ2xldHRlcnMnOiAvW1xcdUE3MjhdL2cgfSwgeyAnYmFzZSc6ICdVJywgJ2xldHRlcnMnOiAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2cgfSwgeyAnYmFzZSc6ICdWJywgJ2xldHRlcnMnOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nIH0sIHsgJ2Jhc2UnOiAnVlknLCAnbGV0dGVycyc6IC9bXFx1QTc2MF0vZyB9LCB7ICdiYXNlJzogJ1cnLCAnbGV0dGVycyc6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyB9LCB7ICdiYXNlJzogJ1gnLCAnbGV0dGVycyc6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2cgfSwgeyAnYmFzZSc6ICdZJywgJ2xldHRlcnMnOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyB9LCB7ICdiYXNlJzogJ1onLCAnbGV0dGVycyc6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2cgfSwgeyAnYmFzZSc6ICdhJywgJ2xldHRlcnMnOiAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nIH0sIHsgJ2Jhc2UnOiAnYWEnLCAnbGV0dGVycyc6IC9bXFx1QTczM10vZyB9LCB7ICdiYXNlJzogJ2FlJywgJ2xldHRlcnMnOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyB9LCB7ICdiYXNlJzogJ2FvJywgJ2xldHRlcnMnOiAvW1xcdUE3MzVdL2cgfSwgeyAnYmFzZSc6ICdhdScsICdsZXR0ZXJzJzogL1tcXHVBNzM3XS9nIH0sIHsgJ2Jhc2UnOiAnYXYnLCAnbGV0dGVycyc6IC9bXFx1QTczOVxcdUE3M0JdL2cgfSwgeyAnYmFzZSc6ICdheScsICdsZXR0ZXJzJzogL1tcXHVBNzNEXS9nIH0sIHsgJ2Jhc2UnOiAnYicsICdsZXR0ZXJzJzogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2cgfSwgeyAnYmFzZSc6ICdjJywgJ2xldHRlcnMnOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2cgfSwgeyAnYmFzZSc6ICdkJywgJ2xldHRlcnMnOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nIH0sIHsgJ2Jhc2UnOiAnZHonLCAnbGV0dGVycyc6IC9bXFx1MDFGM1xcdTAxQzZdL2cgfSwgeyAnYmFzZSc6ICdlJywgJ2xldHRlcnMnOiAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2cgfSwgeyAnYmFzZSc6ICdmJywgJ2xldHRlcnMnOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyB9LCB7ICdiYXNlJzogJ2cnLCAnbGV0dGVycyc6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nIH0sIHsgJ2Jhc2UnOiAnaCcsICdsZXR0ZXJzJzogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2cgfSwgeyAnYmFzZSc6ICdodicsICdsZXR0ZXJzJzogL1tcXHUwMTk1XS9nIH0sIHsgJ2Jhc2UnOiAnaScsICdsZXR0ZXJzJzogL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyB9LCB7ICdiYXNlJzogJ2onLCAnbGV0dGVycyc6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nIH0sIHsgJ2Jhc2UnOiAnaycsICdsZXR0ZXJzJzogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyB9LCB7ICdiYXNlJzogJ2wnLCAnbGV0dGVycyc6IC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyB9LCB7ICdiYXNlJzogJ2xqJywgJ2xldHRlcnMnOiAvW1xcdTAxQzldL2cgfSwgeyAnYmFzZSc6ICdtJywgJ2xldHRlcnMnOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nIH0sIHsgJ2Jhc2UnOiAnbicsICdsZXR0ZXJzJzogL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyB9LCB7ICdiYXNlJzogJ25qJywgJ2xldHRlcnMnOiAvW1xcdTAxQ0NdL2cgfSwgeyAnYmFzZSc6ICdvJywgJ2xldHRlcnMnOiAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2cgfSwgeyAnYmFzZSc6ICdvaScsICdsZXR0ZXJzJzogL1tcXHUwMUEzXS9nIH0sIHsgJ2Jhc2UnOiAnb3UnLCAnbGV0dGVycyc6IC9bXFx1MDIyM10vZyB9LCB7ICdiYXNlJzogJ29vJywgJ2xldHRlcnMnOiAvW1xcdUE3NEZdL2cgfSwgeyAnYmFzZSc6ICdwJywgJ2xldHRlcnMnOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2cgfSwgeyAnYmFzZSc6ICdxJywgJ2xldHRlcnMnOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyB9LCB7ICdiYXNlJzogJ3InLCAnbGV0dGVycyc6IC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2cgfSwgeyAnYmFzZSc6ICdzJywgJ2xldHRlcnMnOiAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyB9LCB7ICdiYXNlJzogJ3QnLCAnbGV0dGVycyc6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyB9LCB7ICdiYXNlJzogJ3R6JywgJ2xldHRlcnMnOiAvW1xcdUE3MjldL2cgfSwgeyAnYmFzZSc6ICd1JywgJ2xldHRlcnMnOiAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2cgfSwgeyAnYmFzZSc6ICd2JywgJ2xldHRlcnMnOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nIH0sIHsgJ2Jhc2UnOiAndnknLCAnbGV0dGVycyc6IC9bXFx1QTc2MV0vZyB9LCB7ICdiYXNlJzogJ3cnLCAnbGV0dGVycyc6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2cgfSwgeyAnYmFzZSc6ICd4JywgJ2xldHRlcnMnOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nIH0sIHsgJ2Jhc2UnOiAneScsICdsZXR0ZXJzJzogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nIH0sIHsgJ2Jhc2UnOiAneicsICdsZXR0ZXJzJzogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyB9XTtcblxudmFyIHN0cmlwRGlhY3JpdGljcyA9IGZ1bmN0aW9uIHN0cmlwRGlhY3JpdGljcyhzdHIpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXAubGVuZ3RoOyBpKyspIHtcblx0XHRzdHIgPSBzdHIucmVwbGFjZShtYXBbaV0ubGV0dGVycywgbWFwW2ldLmJhc2UpO1xuXHR9XG5cdHJldHVybiBzdHI7XG59O1xuXG52YXIgdHJpbSA9IGZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufTtcblxudmFyIGlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkKHZhbHVlKSB7XG5cdHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJztcbn07XG5cbnZhciBmaWx0ZXJPcHRpb25zID0gZnVuY3Rpb24gZmlsdGVyT3B0aW9ucyhvcHRpb25zLCBmaWx0ZXJWYWx1ZSwgZXhjbHVkZU9wdGlvbnMsIHByb3BzKSB7XG5cdGlmIChwcm9wcy5pZ25vcmVBY2NlbnRzKSB7XG5cdFx0ZmlsdGVyVmFsdWUgPSBzdHJpcERpYWNyaXRpY3MoZmlsdGVyVmFsdWUpO1xuXHR9XG5cblx0aWYgKHByb3BzLmlnbm9yZUNhc2UpIHtcblx0XHRmaWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRpZiAocHJvcHMudHJpbUZpbHRlcikge1xuXHRcdGZpbHRlclZhbHVlID0gdHJpbShmaWx0ZXJWYWx1ZSk7XG5cdH1cblxuXHRpZiAoZXhjbHVkZU9wdGlvbnMpIGV4Y2x1ZGVPcHRpb25zID0gZXhjbHVkZU9wdGlvbnMubWFwKGZ1bmN0aW9uIChpKSB7XG5cdFx0cmV0dXJuIGlbcHJvcHMudmFsdWVLZXldO1xuXHR9KTtcblxuXHRyZXR1cm4gb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuXHRcdGlmIChleGNsdWRlT3B0aW9ucyAmJiBleGNsdWRlT3B0aW9ucy5pbmRleE9mKG9wdGlvbltwcm9wcy52YWx1ZUtleV0pID4gLTEpIHJldHVybiBmYWxzZTtcblx0XHRpZiAocHJvcHMuZmlsdGVyT3B0aW9uKSByZXR1cm4gcHJvcHMuZmlsdGVyT3B0aW9uLmNhbGwodW5kZWZpbmVkLCBvcHRpb24sIGZpbHRlclZhbHVlKTtcblx0XHRpZiAoIWZpbHRlclZhbHVlKSByZXR1cm4gdHJ1ZTtcblxuXHRcdHZhciB2YWx1ZSA9IG9wdGlvbltwcm9wcy52YWx1ZUtleV07XG5cdFx0dmFyIGxhYmVsID0gb3B0aW9uW3Byb3BzLmxhYmVsS2V5XTtcblx0XHR2YXIgaGFzVmFsdWUgPSBpc1ZhbGlkKHZhbHVlKTtcblx0XHR2YXIgaGFzTGFiZWwgPSBpc1ZhbGlkKGxhYmVsKTtcblxuXHRcdGlmICghaGFzVmFsdWUgJiYgIWhhc0xhYmVsKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIHZhbHVlVGVzdCA9IGhhc1ZhbHVlID8gU3RyaW5nKHZhbHVlKSA6IG51bGw7XG5cdFx0dmFyIGxhYmVsVGVzdCA9IGhhc0xhYmVsID8gU3RyaW5nKGxhYmVsKSA6IG51bGw7XG5cblx0XHRpZiAocHJvcHMuaWdub3JlQWNjZW50cykge1xuXHRcdFx0aWYgKHZhbHVlVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICdsYWJlbCcpIHZhbHVlVGVzdCA9IHN0cmlwRGlhY3JpdGljcyh2YWx1ZVRlc3QpO1xuXHRcdFx0aWYgKGxhYmVsVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICd2YWx1ZScpIGxhYmVsVGVzdCA9IHN0cmlwRGlhY3JpdGljcyhsYWJlbFRlc3QpO1xuXHRcdH1cblxuXHRcdGlmIChwcm9wcy5pZ25vcmVDYXNlKSB7XG5cdFx0XHRpZiAodmFsdWVUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJykgdmFsdWVUZXN0ID0gdmFsdWVUZXN0LnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRpZiAobGFiZWxUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJykgbGFiZWxUZXN0ID0gbGFiZWxUZXN0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLm1hdGNoUG9zID09PSAnc3RhcnQnID8gdmFsdWVUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJyAmJiB2YWx1ZVRlc3Quc3Vic3RyKDAsIGZpbHRlclZhbHVlLmxlbmd0aCkgPT09IGZpbHRlclZhbHVlIHx8IGxhYmVsVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICd2YWx1ZScgJiYgbGFiZWxUZXN0LnN1YnN0cigwLCBmaWx0ZXJWYWx1ZS5sZW5ndGgpID09PSBmaWx0ZXJWYWx1ZSA6IHZhbHVlVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICdsYWJlbCcgJiYgdmFsdWVUZXN0LmluZGV4T2YoZmlsdGVyVmFsdWUpID49IDAgfHwgbGFiZWxUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJyAmJiBsYWJlbFRlc3QuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPj0gMDtcblx0fSk7XG59O1xuXG52YXIgbWVudVJlbmRlcmVyID0gZnVuY3Rpb24gbWVudVJlbmRlcmVyKF9yZWYpIHtcblx0dmFyIGZvY3VzZWRPcHRpb24gPSBfcmVmLmZvY3VzZWRPcHRpb24sXG5cdCAgICBmb2N1c09wdGlvbiA9IF9yZWYuZm9jdXNPcHRpb24sXG5cdCAgICBpbnB1dFZhbHVlID0gX3JlZi5pbnB1dFZhbHVlLFxuXHQgICAgaW5zdGFuY2VQcmVmaXggPSBfcmVmLmluc3RhbmNlUHJlZml4LFxuXHQgICAgb25Gb2N1cyA9IF9yZWYub25Gb2N1cyxcblx0ICAgIG9uT3B0aW9uUmVmID0gX3JlZi5vbk9wdGlvblJlZixcblx0ICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcblx0ICAgIG9wdGlvbkNsYXNzTmFtZSA9IF9yZWYub3B0aW9uQ2xhc3NOYW1lLFxuXHQgICAgb3B0aW9uQ29tcG9uZW50ID0gX3JlZi5vcHRpb25Db21wb25lbnQsXG5cdCAgICBvcHRpb25SZW5kZXJlciA9IF9yZWYub3B0aW9uUmVuZGVyZXIsXG5cdCAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuXHQgICAgcmVtb3ZlVmFsdWUgPSBfcmVmLnJlbW92ZVZhbHVlLFxuXHQgICAgc2VsZWN0VmFsdWUgPSBfcmVmLnNlbGVjdFZhbHVlLFxuXHQgICAgdmFsdWVBcnJheSA9IF9yZWYudmFsdWVBcnJheSxcblx0ICAgIHZhbHVlS2V5ID0gX3JlZi52YWx1ZUtleTtcblxuXHR2YXIgT3B0aW9uID0gb3B0aW9uQ29tcG9uZW50O1xuXG5cdHJldHVybiBvcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpKSB7XG5cdFx0dmFyIGlzU2VsZWN0ZWQgPSB2YWx1ZUFycmF5ICYmIHZhbHVlQXJyYXkuc29tZShmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIHhbdmFsdWVLZXldID09PSBvcHRpb25bdmFsdWVLZXldO1xuXHRcdH0pO1xuXHRcdHZhciBpc0ZvY3VzZWQgPSBvcHRpb24gPT09IGZvY3VzZWRPcHRpb247XG5cdFx0dmFyIG9wdGlvbkNsYXNzID0gY2xhc3NOYW1lcyhvcHRpb25DbGFzc05hbWUsIHtcblx0XHRcdCdTZWxlY3Qtb3B0aW9uJzogdHJ1ZSxcblx0XHRcdCdpcy1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXG5cdFx0XHQnaXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcblx0XHRcdCdpcy1kaXNhYmxlZCc6IG9wdGlvbi5kaXNhYmxlZFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRPcHRpb24sXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTmFtZTogb3B0aW9uQ2xhc3MsXG5cdFx0XHRcdGZvY3VzT3B0aW9uOiBmb2N1c09wdGlvbixcblx0XHRcdFx0aW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcblx0XHRcdFx0aW5zdGFuY2VQcmVmaXg6IGluc3RhbmNlUHJlZml4LFxuXHRcdFx0XHRpc0Rpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQsXG5cdFx0XHRcdGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuXHRcdFx0XHRpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuXHRcdFx0XHRrZXk6ICdvcHRpb24tJyArIGkgKyAnLScgKyBvcHRpb25bdmFsdWVLZXldLFxuXHRcdFx0XHRvbkZvY3VzOiBvbkZvY3VzLFxuXHRcdFx0XHRvblNlbGVjdDogb25TZWxlY3QsXG5cdFx0XHRcdG9wdGlvbjogb3B0aW9uLFxuXHRcdFx0XHRvcHRpb25JbmRleDogaSxcblx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZjIpIHtcblx0XHRcdFx0XHRvbk9wdGlvblJlZihfcmVmMiwgaXNGb2N1c2VkKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVtb3ZlVmFsdWU6IHJlbW92ZVZhbHVlLFxuXHRcdFx0XHRzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWVcblx0XHRcdH0sXG5cdFx0XHRvcHRpb25SZW5kZXJlcihvcHRpb24sIGksIGlucHV0VmFsdWUpXG5cdFx0KTtcblx0fSk7XG59O1xuXG5tZW51UmVuZGVyZXIucHJvcFR5cGVzID0ge1xuXHRmb2N1c09wdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG5cdGZvY3VzZWRPcHRpb246IFByb3BUeXBlcy5vYmplY3QsXG5cdGlucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGluc3RhbmNlUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblx0b25PcHRpb25SZWY6IFByb3BUeXBlcy5mdW5jLFxuXHRvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cdG9wdGlvbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0b3B0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcblx0b3B0aW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuXHRvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG5cdHJlbW92ZVZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcblx0c2VsZWN0VmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuXHR2YWx1ZUFycmF5OiBQcm9wVHlwZXMuYXJyYXksXG5cdHZhbHVlS2V5OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG52YXIgYmxvY2tFdmVudCA9IChmdW5jdGlvbiAoZXZlbnQpIHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGlmIChldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0EnIHx8ICEoJ2hyZWYnIGluIGV2ZW50LnRhcmdldCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGV2ZW50LnRhcmdldC50YXJnZXQpIHtcblx0XHR3aW5kb3cub3BlbihldmVudC50YXJnZXQuaHJlZiwgZXZlbnQudGFyZ2V0LnRhcmdldCk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBldmVudC50YXJnZXQuaHJlZjtcblx0fVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5cblxuXG5cbnZhciBhc3luY0dlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICAgIHZhciBmcm9udCwgYmFjaztcblxuICAgIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGFyZzogYXJnLFxuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS52YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgYXJnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgICAgaWYgKGZyb250KSB7XG4gICAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gICAgaWYgKHR5cGVvZiBnZW4ucmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmV0dXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgd3JhcDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGF3YWl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cblxuXG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuXG5cblxuXG5cblxuXG52YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgT3B0aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0aW5oZXJpdHMoT3B0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBPcHRpb24ocHJvcHMpIHtcblx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBPcHRpb24pO1xuXG5cdFx0dmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoT3B0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT3B0aW9uKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuaGFuZGxlTW91c2VEb3duID0gX3RoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBfdGhpcy5oYW5kbGVNb3VzZUVudGVyLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZU1vdXNlTW92ZSA9IF90aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gX3RoaXMuaGFuZGxlVG91Y2hTdGFydC5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IF90aGlzLmhhbmRsZVRvdWNoRW5kLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoTW92ZSA9IF90aGlzLmhhbmRsZVRvdWNoTW92ZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5vbkZvY3VzID0gX3RoaXMub25Gb2N1cy5iaW5kKF90aGlzKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhPcHRpb24sIFt7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMub3B0aW9uLCBldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VFbnRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoZXZlbnQpIHtcblx0XHRcdHRoaXMub25Gb2N1cyhldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VNb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG5cdFx0XHR0aGlzLm9uRm9jdXMoZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoRW5kJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZXZlbnQpIHtcblx0XHRcdC8vIENoZWNrIGlmIHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWQsIEluIHRoaXMgY2FzZVxuXHRcdFx0Ly8gd2UgZG9uJ3Qgd2FudCB0byBmaXJlIHRoZSBjbGljayBldmVudCAoYmVjYXVzZSB0aGUgdXNlciBvbmx5IHdhbnRzIHRvIHNjcm9sbClcblx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSByZXR1cm47XG5cblx0XHRcdHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgbm90IGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbkZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25Gb2N1cyhldmVudCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLmlzRm9jdXNlZCkge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uRm9jdXModGhpcy5wcm9wcy5vcHRpb24sIGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBvcHRpb24gPSBfcHJvcHMub3B0aW9uLFxuXHRcdFx0ICAgIGluc3RhbmNlUHJlZml4ID0gX3Byb3BzLmluc3RhbmNlUHJlZml4LFxuXHRcdFx0ICAgIG9wdGlvbkluZGV4ID0gX3Byb3BzLm9wdGlvbkluZGV4O1xuXG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgb3B0aW9uLmNsYXNzTmFtZSk7XG5cblx0XHRcdHJldHVybiBvcHRpb24uZGlzYWJsZWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogYmxvY2tFdmVudCxcblx0XHRcdFx0XHRvbkNsaWNrOiBibG9ja0V2ZW50IH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdCkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRzdHlsZTogb3B0aW9uLnN0eWxlLFxuXHRcdFx0XHRcdHJvbGU6ICdvcHRpb24nLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogb3B0aW9uLmxhYmVsLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcblx0XHRcdFx0XHRvbk1vdXNlTW92ZTogdGhpcy5oYW5kbGVNb3VzZU1vdmUsXG5cdFx0XHRcdFx0b25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG5cdFx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuXHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG5cdFx0XHRcdFx0aWQ6IGluc3RhbmNlUHJlZml4ICsgJy1vcHRpb24tJyArIG9wdGlvbkluZGV4LFxuXHRcdFx0XHRcdHRpdGxlOiBvcHRpb24udGl0bGUgfSxcblx0XHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblx0cmV0dXJuIE9wdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuT3B0aW9uLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGNsYXNzTmFtZSAoYmFzZWQgb24gbW91c2UgcG9zaXRpb24pXG5cdGluc3RhbmNlUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsIC8vIHVuaXF1ZSBwcmVmaXggZm9yIHRoZSBpZHMgKHVzZWQgZm9yIGFyaWEpXG5cdGlzRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLCAvLyB0aGUgb3B0aW9uIGlzIGRpc2FibGVkXG5cdGlzRm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsIC8vIHRoZSBvcHRpb24gaXMgZm9jdXNlZFxuXHRpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCwgLy8gdGhlIG9wdGlvbiBpcyBzZWxlY3RlZFxuXHRvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBtb3VzZUVudGVyIG9uIG9wdGlvbiBlbGVtZW50XG5cdG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBjbGljayBvbiBvcHRpb24gZWxlbWVudFxuXHRvblVuZm9jdXM6IFByb3BUeXBlcy5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIG1vdXNlTGVhdmUgb24gb3B0aW9uIGVsZW1lbnRcblx0b3B0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIG9iamVjdCB0aGF0IGlzIGJhc2UgZm9yIHRoYXQgb3B0aW9uXG5cdG9wdGlvbkluZGV4OiBQcm9wVHlwZXMubnVtYmVyIC8vIGluZGV4IG9mIHRoZSBvcHRpb24sIHVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIGlkcyBmb3IgYXJpYVxufTtcblxudmFyIFZhbHVlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0aW5oZXJpdHMoVmFsdWUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIFZhbHVlKHByb3BzKSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWUpO1xuXG5cdFx0dmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVmFsdWUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihWYWx1ZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzLmhhbmRsZU1vdXNlRG93biA9IF90aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5vblJlbW92ZSA9IF90aGlzLm9uUmVtb3ZlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoRW5kUmVtb3ZlID0gX3RoaXMuaGFuZGxlVG91Y2hFbmRSZW1vdmUuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hNb3ZlID0gX3RoaXMuaGFuZGxlVG91Y2hNb3ZlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LmJpbmQoX3RoaXMpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdGNyZWF0ZUNsYXNzKFZhbHVlLCBbe1xuXHRcdGtleTogJ2hhbmRsZU1vdXNlRG93bicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy52YWx1ZSwgZXZlbnQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZS5ocmVmKSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uUmVtb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25SZW1vdmUoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMucHJvcHMub25SZW1vdmUodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmRSZW1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZFJlbW92ZShldmVudCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHJldHVybjtcblxuXHRcdFx0Ly8gRmlyZSB0aGUgbW91c2UgZXZlbnRzXG5cdFx0XHR0aGlzLm9uUmVtb3ZlKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoKSB7XG5cdFx0XHQvLyBTZXQgYSBmbGFnIHRoYXQgdGhlIHZpZXcgaXMgbm90IGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJSZW1vdmVJY29uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVtb3ZlSWNvbigpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8ICF0aGlzLnByb3BzLm9uUmVtb3ZlKSByZXR1cm47XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC12YWx1ZS1pY29uJyxcblx0XHRcdFx0XHQnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG5cdFx0XHRcdFx0b25Nb3VzZURvd246IHRoaXMub25SZW1vdmUsXG5cdFx0XHRcdFx0b25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFJlbW92ZSxcblx0XHRcdFx0XHRvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcblx0XHRcdFx0XHRvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUgfSxcblx0XHRcdFx0J1xceEQ3J1xuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJMYWJlbCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxhYmVsKCkge1xuXHRcdFx0dmFyIGNsYXNzTmFtZSA9ICdTZWxlY3QtdmFsdWUtbGFiZWwnO1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMub25DbGljayB8fCB0aGlzLnByb3BzLnZhbHVlLmhyZWYgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnYScsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIGhyZWY6IHRoaXMucHJvcHMudmFsdWUuaHJlZiwgdGFyZ2V0OiB0aGlzLnByb3BzLnZhbHVlLnRhcmdldCwgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLCBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZU1vdXNlRG93biB9LFxuXHRcdFx0XHR0aGlzLnByb3BzLmNoaWxkcmVuXG5cdFx0XHQpIDogUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCByb2xlOiAnb3B0aW9uJywgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsIGlkOiB0aGlzLnByb3BzLmlkIH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lcygnU2VsZWN0LXZhbHVlJywgdGhpcy5wcm9wcy52YWx1ZS5jbGFzc05hbWUpLFxuXHRcdFx0XHRcdHN0eWxlOiB0aGlzLnByb3BzLnZhbHVlLnN0eWxlLFxuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLnByb3BzLnZhbHVlLnRpdGxlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRoaXMucmVuZGVyUmVtb3ZlSWNvbigpLFxuXHRcdFx0XHR0aGlzLnJlbmRlckxhYmVsKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cdHJldHVybiBWYWx1ZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVmFsdWUucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cdGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCwgLy8gZGlzYWJsZWQgcHJvcCBwYXNzZWQgdG8gUmVhY3RTZWxlY3Rcblx0aWQ6IFByb3BUeXBlcy5zdHJpbmcsIC8vIFVuaXF1ZSBpZCBmb3IgdGhlIHZhbHVlIC0gdXNlZCBmb3IgYXJpYVxuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBjbGljayBvbiB2YWx1ZSBsYWJlbFxuXHRvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsIC8vIG1ldGhvZCB0byBoYW5kbGUgcmVtb3ZhbCBvZiB0aGUgdmFsdWVcblx0dmFsdWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCAvLyB0aGUgb3B0aW9uIG9iamVjdCBmb3IgdGhpcyB2YWx1ZVxufTtcblxuLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9yZWFjdC1zZWxlY3RcbiovXG52YXIgc3RyaW5naWZ5VmFsdWUgPSBmdW5jdGlvbiBzdHJpbmdpZnlWYWx1ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdmFsdWUgIT09IG51bGwgJiYgSlNPTi5zdHJpbmdpZnkodmFsdWUpIHx8ICcnO1xufTtcblxudmFyIHN0cmluZ09yTm9kZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSk7XG52YXIgc3RyaW5nT3JOdW1iZXIgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSk7XG5cbnZhciBpbnN0YW5jZUlkID0gMTtcblxudmFyIHNob3VsZFNob3dWYWx1ZSA9IGZ1bmN0aW9uIHNob3VsZFNob3dWYWx1ZShzdGF0ZSwgcHJvcHMpIHtcblx0dmFyIGlucHV0VmFsdWUgPSBzdGF0ZS5pbnB1dFZhbHVlLFxuXHQgICAgaXNQc2V1ZG9Gb2N1c2VkID0gc3RhdGUuaXNQc2V1ZG9Gb2N1c2VkLFxuXHQgICAgaXNGb2N1c2VkID0gc3RhdGUuaXNGb2N1c2VkO1xuXHR2YXIgb25TZWxlY3RSZXNldHNJbnB1dCA9IHByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQ7XG5cblxuXHRpZiAoIWlucHV0VmFsdWUpIHJldHVybiB0cnVlO1xuXG5cdGlmICghb25TZWxlY3RSZXNldHNJbnB1dCkge1xuXHRcdHJldHVybiAhKCFpc0ZvY3VzZWQgJiYgaXNQc2V1ZG9Gb2N1c2VkIHx8IGlzRm9jdXNlZCAmJiAhaXNQc2V1ZG9Gb2N1c2VkKTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBzaG91bGRTaG93UGxhY2Vob2xkZXIgPSBmdW5jdGlvbiBzaG91bGRTaG93UGxhY2Vob2xkZXIoc3RhdGUsIHByb3BzLCBpc09wZW4pIHtcblx0dmFyIGlucHV0VmFsdWUgPSBzdGF0ZS5pbnB1dFZhbHVlLFxuXHQgICAgaXNQc2V1ZG9Gb2N1c2VkID0gc3RhdGUuaXNQc2V1ZG9Gb2N1c2VkLFxuXHQgICAgaXNGb2N1c2VkID0gc3RhdGUuaXNGb2N1c2VkO1xuXHR2YXIgb25TZWxlY3RSZXNldHNJbnB1dCA9IHByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQ7XG5cblxuXHRyZXR1cm4gIWlucHV0VmFsdWUgfHwgIW9uU2VsZWN0UmVzZXRzSW5wdXQgJiYgIWlzT3BlbiAmJiAhaXNQc2V1ZG9Gb2N1c2VkICYmICFpc0ZvY3VzZWQ7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIGEgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gb3B0aW9ucyBhbmQgdmFsdWVLZXlcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxBcnJheX0gdmFsdWVcdC0gdGhlIHNlbGVjdGVkIHZhbHVlKHMpXG4gKiBAcGFyYW0ge09iamVjdH1cdFx0IHByb3BzXHQtIHRoZSBTZWxlY3QgY29tcG9uZW50J3MgcHJvcHMgKG9yIG5leHRQcm9wcylcbiAqL1xudmFyIGV4cGFuZFZhbHVlID0gZnVuY3Rpb24gZXhwYW5kVmFsdWUodmFsdWUsIHByb3BzKSB7XG5cdHZhciB2YWx1ZVR5cGUgPSB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKTtcblx0aWYgKHZhbHVlVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsdWVUeXBlICE9PSAnbnVtYmVyJyAmJiB2YWx1ZVR5cGUgIT09ICdib29sZWFuJykgcmV0dXJuIHZhbHVlO1xuXHR2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG5cdCAgICB2YWx1ZUtleSA9IHByb3BzLnZhbHVlS2V5O1xuXG5cdGlmICghb3B0aW9ucykgcmV0dXJuO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoU3RyaW5nKG9wdGlvbnNbaV1bdmFsdWVLZXldKSA9PT0gU3RyaW5nKHZhbHVlKSkgcmV0dXJuIG9wdGlvbnNbaV07XG5cdH1cbn07XG5cbnZhciBoYW5kbGVSZXF1aXJlZCA9IGZ1bmN0aW9uIGhhbmRsZVJlcXVpcmVkKHZhbHVlLCBtdWx0aSkge1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIG11bHRpID8gdmFsdWUubGVuZ3RoID09PSAwIDogT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbn07XG5cbnZhciBTZWxlY3QkMSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKFNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gU2VsZWN0KHByb3BzKSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuXHRcdHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNlbGVjdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlbGVjdCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdFsnY2xlYXJWYWx1ZScsICdmb2N1c09wdGlvbicsICdnZXRPcHRpb25MYWJlbCcsICdoYW5kbGVJbnB1dEJsdXInLCAnaGFuZGxlSW5wdXRDaGFuZ2UnLCAnaGFuZGxlSW5wdXRGb2N1cycsICdoYW5kbGVJbnB1dFZhbHVlQ2hhbmdlJywgJ2hhbmRsZUtleURvd24nLCAnaGFuZGxlTWVudVNjcm9sbCcsICdoYW5kbGVNb3VzZURvd24nLCAnaGFuZGxlTW91c2VEb3duT25BcnJvdycsICdoYW5kbGVNb3VzZURvd25Pbk1lbnUnLCAnaGFuZGxlVG91Y2hFbmQnLCAnaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlJywgJ2hhbmRsZVRvdWNoTW92ZScsICdoYW5kbGVUb3VjaE91dHNpZGUnLCAnaGFuZGxlVG91Y2hTdGFydCcsICdoYW5kbGVWYWx1ZUNsaWNrJywgJ29uT3B0aW9uUmVmJywgJ3JlbW92ZVZhbHVlJywgJ3NlbGVjdFZhbHVlJ10uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcblx0XHRcdHJldHVybiBfdGhpc1tmbl0gPSBfdGhpc1tmbl0uYmluZChfdGhpcyk7XG5cdFx0fSk7XG5cblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0VmFsdWU6ICcnLFxuXHRcdFx0aXNGb2N1c2VkOiBmYWxzZSxcblx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhTZWxlY3QsIFt7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFx0dGhpcy5faW5zdGFuY2VQcmVmaXggPSAncmVhY3Qtc2VsZWN0LScgKyAodGhpcy5wcm9wcy5pbnN0YW5jZUlkIHx8ICsraW5zdGFuY2VJZCkgKyAnLSc7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblxuXHRcdFx0aWYgKHRoaXMucHJvcHMucmVxdWlyZWQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IGhhbmRsZVJlcXVpcmVkKHZhbHVlQXJyYXlbMF0sIHRoaXMucHJvcHMubXVsdGkpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMuYXV0b2ZvY3VzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdXYXJuaW5nOiBUaGUgYXV0b2ZvY3VzIHByb3AgaGFzIGNoYW5nZWQgdG8gYXV0b0ZvY3VzLCBzdXBwb3J0IHdpbGwgYmUgcmVtb3ZlZCBhZnRlciByZWFjdC1zZWxlY3RAMS4wJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMgfHwgdGhpcy5wcm9wcy5hdXRvZm9jdXMpIHtcblx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkobmV4dFByb3BzLnZhbHVlLCBuZXh0UHJvcHMpO1xuXG5cdFx0XHRpZiAobmV4dFByb3BzLnJlcXVpcmVkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHJlcXVpcmVkOiBoYW5kbGVSZXF1aXJlZCh2YWx1ZUFycmF5WzBdLCBuZXh0UHJvcHMubXVsdGkpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLnJlcXVpcmVkKSB7XG5cdFx0XHRcdC8vIFVzZWQgdG8gYmUgcmVxdWlyZWQgYnV0IGl0J3Mgbm90IGFueSBtb3JlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZXF1aXJlZDogZmFsc2UgfSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgJiYgdGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlICYmIG5leHRQcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0KSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UoJycpIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdFx0Ly8gZm9jdXMgdG8gdGhlIHNlbGVjdGVkIG9wdGlvblxuXHRcdFx0aWYgKHRoaXMubWVudSAmJiB0aGlzLmZvY3VzZWQgJiYgdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbikge1xuXHRcdFx0XHR2YXIgZm9jdXNlZE9wdGlvbk5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzLmZvY3VzZWQpO1xuXHRcdFx0XHR2YXIgbWVudU5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzLm1lbnUpO1xuXG5cdFx0XHRcdHZhciBzY3JvbGxUb3AgPSBtZW51Tm9kZS5zY3JvbGxUb3A7XG5cdFx0XHRcdHZhciBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyBtZW51Tm9kZS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdHZhciBvcHRpb25Ub3AgPSBmb2N1c2VkT3B0aW9uTm9kZS5vZmZzZXRUb3A7XG5cdFx0XHRcdHZhciBvcHRpb25Cb3R0b20gPSBvcHRpb25Ub3AgKyBmb2N1c2VkT3B0aW9uTm9kZS5vZmZzZXRIZWlnaHQ7XG5cblx0XHRcdFx0aWYgKHNjcm9sbFRvcCA+IG9wdGlvblRvcCB8fCBzY3JvbGxCb3R0b20gPCBvcHRpb25Cb3R0b20pIHtcblx0XHRcdFx0XHRtZW51Tm9kZS5zY3JvbGxUb3AgPSBmb2N1c2VkT3B0aW9uTm9kZS5vZmZzZXRUb3A7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSBzdGlsbCBzZXQgaGFzU2Nyb2xsZWRUb09wdGlvbiB0byB0cnVlIGV2ZW4gaWYgd2UgZGlkbid0XG5cdFx0XHRcdC8vIGFjdHVhbGx5IG5lZWQgdG8gc2Nyb2xsLCBhcyB3ZSd2ZSBzdGlsbCBjb25maXJtZWQgdGhhdCB0aGVcblx0XHRcdFx0Ly8gb3B0aW9uIGlzIGluIHZpZXcuXG5cdFx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHR0aGlzLmhhc1Njcm9sbGVkVG9PcHRpb24gPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX3Njcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlICYmIHRoaXMuZm9jdXNlZCAmJiB0aGlzLm1lbnUpIHtcblx0XHRcdFx0dGhpcy5fc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSBmYWxzZTtcblx0XHRcdFx0dmFyIGZvY3VzZWRET00gPSBmaW5kRE9NTm9kZSh0aGlzLmZvY3VzZWQpO1xuXHRcdFx0XHR2YXIgbWVudURPTSA9IGZpbmRET01Ob2RlKHRoaXMubWVudSk7XG5cdFx0XHRcdHZhciBmb2N1c2VkUmVjdCA9IGZvY3VzZWRET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHZhciBtZW51UmVjdCA9IG1lbnVET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdGlmIChmb2N1c2VkUmVjdC5ib3R0b20gPiBtZW51UmVjdC5ib3R0b20pIHtcblx0XHRcdFx0XHRtZW51RE9NLnNjcm9sbFRvcCA9IGZvY3VzZWRET00ub2Zmc2V0VG9wICsgZm9jdXNlZERPTS5jbGllbnRIZWlnaHQgLSBtZW51RE9NLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fSBlbHNlIGlmIChmb2N1c2VkUmVjdC50b3AgPCBtZW51UmVjdC50b3ApIHtcblx0XHRcdFx0XHRtZW51RE9NLnNjcm9sbFRvcCA9IGZvY3VzZWRET00ub2Zmc2V0VG9wO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5zY3JvbGxNZW51SW50b1ZpZXcgJiYgdGhpcy5tZW51Q29udGFpbmVyKSB7XG5cdFx0XHRcdHZhciBtZW51Q29udGFpbmVyUmVjdCA9IHRoaXMubWVudUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IG1lbnVDb250YWluZXJSZWN0LmJvdHRvbSArIHRoaXMucHJvcHMubWVudUJ1ZmZlcikge1xuXHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxCeSgwLCBtZW51Q29udGFpbmVyUmVjdC5ib3R0b20gKyB0aGlzLnByb3BzLm1lbnVCdWZmZXIgLSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldlByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IGZhbHNlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG5cdFx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldlN0YXRlLmlzT3BlbiAhPT0gdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0dGhpcy50b2dnbGVUb3VjaE91dHNpZGVFdmVudCh0aGlzLnN0YXRlLmlzT3Blbik7XG5cdFx0XHRcdHZhciBoYW5kbGVyID0gdGhpcy5zdGF0ZS5pc09wZW4gPyB0aGlzLnByb3BzLm9uT3BlbiA6IHRoaXMucHJvcHMub25DbG9zZTtcblx0XHRcdFx0aGFuZGxlciAmJiBoYW5kbGVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcdHRoaXMudG9nZ2xlVG91Y2hPdXRzaWRlRXZlbnQoZmFsc2UpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3RvZ2dsZVRvdWNoT3V0c2lkZUV2ZW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlVG91Y2hPdXRzaWRlRXZlbnQoZW5hYmxlZCkge1xuXHRcdFx0aWYgKGVuYWJsZWQpIHtcblx0XHRcdFx0aWYgKCFkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICYmIGRvY3VtZW50LmF0dGFjaEV2ZW50KSB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuYXR0YWNoRXZlbnQoJ29udG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlVG91Y2hPdXRzaWRlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVUb3VjaE91dHNpZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIWRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIgJiYgZG9jdW1lbnQuZGV0YWNoRXZlbnQpIHtcblx0XHRcdFx0XHRkb2N1bWVudC5kZXRhY2hFdmVudCgnb250b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVUb3VjaE91dHNpZGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVRvdWNoT3V0c2lkZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE91dHNpZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE91dHNpZGUoZXZlbnQpIHtcblx0XHRcdC8vIGhhbmRsZSB0b3VjaCBvdXRzaWRlIG9uIGlvcyB0byBkaXNtaXNzIG1lbnVcblx0XHRcdGlmICh0aGlzLndyYXBwZXIgJiYgIXRoaXMud3JhcHBlci5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG5cdFx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdGlmICghdGhpcy5pbnB1dCkgcmV0dXJuO1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2JsdXJJbnB1dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGJsdXJJbnB1dCgpIHtcblx0XHRcdGlmICghdGhpcy5pbnB1dCkgcmV0dXJuO1xuXHRcdFx0dGhpcy5pbnB1dC5ibHVyKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hNb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKCkge1xuXHRcdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoU3RhcnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KCkge1xuXHRcdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIG5vdCBiZWluZyBkcmFnZ2VkXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChldmVudCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHJldHVybjtcblxuXHRcdFx0Ly8gRmlyZSB0aGUgbW91c2UgZXZlbnRzXG5cdFx0XHR0aGlzLmhhbmRsZU1vdXNlRG93bihldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlKGV2ZW50KSB7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkLCBJbiB0aGlzIGNhc2Vcblx0XHRcdC8vIHdlIGRvbid0IHdhbnQgdG8gZmlyZSB0aGUgY2xpY2sgZXZlbnQgKGJlY2F1c2UgdGhlIHVzZXIgb25seSB3YW50cyB0byBzY3JvbGwpXG5cdFx0XHRpZiAodGhpcy5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdFx0XHQvLyBDbGVhciB0aGUgdmFsdWVcblx0XHRcdHRoaXMuY2xlYXJWYWx1ZShldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0XHQvLyBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBieSBhIG1vdXNlZG93biBhbmQgbm90IHRoZSBwcmltYXJ5XG5cdFx0XHQvLyBidXR0b24sIG9yIGlmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGlnbm9yZSBpdC5cblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSB0aGlzLnByb3BzLm9wZW5PbkNsaWNrO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0fSBlbHNlIGlmICghdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGlzT3BlbjogdHJ1ZSxcblx0XHRcdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2Vcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJldmVudCBkZWZhdWx0IGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvLyBmb3IgdGhlIG5vbi1zZWFyY2hhYmxlIHNlbGVjdCwgdG9nZ2xlIHRoZSBtZW51XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuc2VhcmNoYWJsZSkge1xuXHRcdFx0XHQvLyBUaGlzIGNvZGUgbWVhbnMgdGhhdCBpZiBhIHNlbGVjdCBpcyBzZWFyY2hhYmxlLCBvbkNsaWNrIHRoZSBvcHRpb25zIG1lbnUgd2lsbCBub3QgYXBwZWFyLCBvbmx5IG9uIHN1YnNlcXVlbnQgY2xpY2sgd2lsbCBpdCBvcGVuLlxuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlblxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdC8vIE9uIGlPUywgd2UgY2FuIGdldCBpbnRvIGEgc3RhdGUgd2hlcmUgd2UgdGhpbmsgdGhlIGlucHV0IGlzIGZvY3VzZWQgYnV0IGl0IGlzbid0IHJlYWxseSxcblx0XHRcdFx0Ly8gc2luY2UgaU9TIGlnbm9yZXMgcHJvZ3JhbW1hdGljIGNhbGxzIHRvIGlucHV0LmZvY3VzKCkgdGhhdCB3ZXJlbid0IHRyaWdnZXJlZCBieSBhIGNsaWNrIGV2ZW50LlxuXHRcdFx0XHQvLyBDYWxsIGZvY3VzKCkgYWdhaW4gaGVyZSB0byBiZSBzYWZlLlxuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cblx0XHRcdFx0dmFyIGlucHV0ID0gdGhpcy5pbnB1dDtcblx0XHRcdFx0dmFyIHRvT3BlbiA9IHRydWU7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBpbnB1dC5nZXRJbnB1dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdC8vIEdldCB0aGUgYWN0dWFsIERPTSBpbnB1dCBpZiB0aGUgcmVmIGlzIGFuIDxBdXRvc2l6ZUlucHV0IC8+IGNvbXBvbmVudFxuXHRcdFx0XHRcdGlucHV0ID0gaW5wdXQuZ2V0SW5wdXQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNsZWFycyB0aGUgdmFsdWUgc28gdGhhdCB0aGUgY3Vyc29yIHdpbGwgYmUgYXQgdGhlIGVuZCBvZiBpbnB1dCB3aGVuIHRoZSBjb21wb25lbnQgcmUtcmVuZGVyc1xuXHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xuXG5cdFx0XHRcdGlmICh0aGlzLl9mb2N1c0FmdGVyQ2xlYXIpIHtcblx0XHRcdFx0XHR0b09wZW4gPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLl9mb2N1c0FmdGVyQ2xlYXIgPSBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGlmIHRoZSBpbnB1dCBpcyBmb2N1c2VkLCBlbnN1cmUgdGhlIG1lbnUgaXMgb3BlblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc09wZW46IHRvT3Blbixcblx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IG51bGxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBvdGhlcndpc2UsIGZvY3VzIHRoZSBpbnB1dCBhbmQgb3BlbiB0aGUgbWVudVxuXHRcdFx0XHR0aGlzLl9vcGVuQWZ0ZXJGb2N1cyA9IHRoaXMucHJvcHMub3Blbk9uQ2xpY2s7XG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRPcHRpb246IG51bGwgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duT25BcnJvdycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bk9uQXJyb3coZXZlbnQpIHtcblx0XHRcdC8vIGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbW91c2Vkb3duIGFuZCBub3QgdGhlIHByaW1hcnlcblx0XHRcdC8vIGJ1dHRvbiwgb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgaWdub3JlIGl0LlxuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdC8vIHByZXZlbnQgZGVmYXVsdCBldmVudCBoYW5kbGVyc1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Ly8gY2xvc2UgdGhlIG1lbnVcblx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIHRoZSBtZW51IGlzbid0IG9wZW4sIGxldCB0aGUgZXZlbnQgYnViYmxlIHRvIHRoZSBtYWluIGhhbmRsZU1vdXNlRG93blxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc09wZW46IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duT25NZW51Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duT25NZW51KGV2ZW50KSB7XG5cdFx0XHQvLyBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBieSBhIG1vdXNlZG93biBhbmQgbm90IHRoZSBwcmltYXJ5XG5cdFx0XHQvLyBidXR0b24sIG9yIGlmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGlnbm9yZSBpdC5cblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSB0cnVlO1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2Nsb3NlTWVudScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLm9uQ2xvc2VSZXNldHNJbnB1dCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpbnB1dFZhbHVlOiB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UoJycpLFxuXHRcdFx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiAhdGhpcy5wcm9wcy5tdWx0aVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiAhdGhpcy5wcm9wcy5tdWx0aVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUlucHV0Rm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbnB1dEZvY3VzKGV2ZW50KSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG5cdFx0XHR2YXIgdG9PcGVuID0gdGhpcy5zdGF0ZS5pc09wZW4gfHwgdGhpcy5fb3BlbkFmdGVyRm9jdXMgfHwgdGhpcy5wcm9wcy5vcGVuT25Gb2N1cztcblx0XHRcdHRvT3BlbiA9IHRoaXMuX2ZvY3VzQWZ0ZXJDbGVhciA/IGZhbHNlIDogdG9PcGVuOyAvL2lmIGZvY3VzIGhhcHBlbnMgYWZ0ZXIgY2xlYXIgdmFsdWVzLCBkb24ndCBvcGVuIGRyb3Bkb3duIHlldC5cblxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aXNGb2N1c2VkOiB0cnVlLFxuXHRcdFx0XHRpc09wZW46ICEhdG9PcGVuXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5fZm9jdXNBZnRlckNsZWFyID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUlucHV0Qmx1cicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUlucHV0Qmx1cihldmVudCkge1xuXHRcdFx0Ly8gVGhlIGNoZWNrIGZvciBtZW51LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IElFMTEncyBzY3JvbGxiYXIgZnJvbSBjbG9zaW5nIHRoZSBtZW51IGluIGNlcnRhaW4gY29udGV4dHMuXG5cdFx0XHRpZiAodGhpcy5tZW51ICYmICh0aGlzLm1lbnUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHwgdGhpcy5tZW51LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSkge1xuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdHZhciBvbkJsdXJyZWRTdGF0ZSA9IHtcblx0XHRcdFx0aXNGb2N1c2VkOiBmYWxzZSxcblx0XHRcdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiBmYWxzZVxuXHRcdFx0fTtcblx0XHRcdGlmICh0aGlzLnByb3BzLm9uQmx1clJlc2V0c0lucHV0KSB7XG5cdFx0XHRcdG9uQmx1cnJlZFN0YXRlLmlucHV0VmFsdWUgPSB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UoJycpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZShvbkJsdXJyZWRTdGF0ZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlSW5wdXRDaGFuZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuXHRcdFx0dmFyIG5ld0lucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cblx0XHRcdGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xuXHRcdFx0XHRuZXdJbnB1dFZhbHVlID0gdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKG5ld0lucHV0VmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5wdXRWYWx1ZTogbmV3SW5wdXRWYWx1ZSxcblx0XHRcdFx0aXNPcGVuOiB0cnVlLFxuXHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzZXRJbnB1dFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2V0SW5wdXRWYWx1ZShuZXdWYWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMub25JbnB1dENoYW5nZSkge1xuXHRcdFx0XHR2YXIgbmV4dFN0YXRlID0gdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKG5ld1ZhbHVlKTtcblx0XHRcdFx0aWYgKG5leHRTdGF0ZSAhPSBudWxsICYmICh0eXBlb2YgbmV4dFN0YXRlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuZXh0U3RhdGUpKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRuZXdWYWx1ZSA9ICcnICsgbmV4dFN0YXRlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5wdXRWYWx1ZTogbmV3VmFsdWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUlucHV0VmFsdWVDaGFuZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKG5ld1ZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKSB7XG5cdFx0XHRcdHZhciBuZXh0U3RhdGUgPSB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UobmV3VmFsdWUpO1xuXHRcdFx0XHQvLyBOb3RlOiAhPSB1c2VkIGRlbGliZXJhdGVseSBoZXJlIHRvIGNhdGNoIHVuZGVmaW5lZCBhbmQgbnVsbFxuXHRcdFx0XHRpZiAobmV4dFN0YXRlICE9IG51bGwgJiYgKHR5cGVvZiBuZXh0U3RhdGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5leHRTdGF0ZSkpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdG5ld1ZhbHVlID0gJycgKyBuZXh0U3RhdGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXdWYWx1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVLZXlEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uSW5wdXRLZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25JbnB1dEtleURvd24oZXZlbnQpO1xuXHRcdFx0XHRpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcblx0XHRcdFx0Y2FzZSA4OlxuXHRcdFx0XHRcdC8vIGJhY2tzcGFjZVxuXHRcdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMucHJvcHMuYmFja3NwYWNlUmVtb3Zlcykge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMucG9wVmFsdWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgOTpcblx0XHRcdFx0XHQvLyB0YWJcblx0XHRcdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkgfHwgIXRoaXMuc3RhdGUuaXNPcGVuIHx8ICF0aGlzLnByb3BzLnRhYlNlbGVjdHNWYWx1ZSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RGb2N1c2VkT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTM6XG5cdFx0XHRcdFx0Ly8gZW50ZXJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RGb2N1c2VkT3B0aW9uKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZm9jdXNOZXh0T3B0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI3OlxuXHRcdFx0XHRcdC8vIGVzY2FwZVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmNsZWFyYWJsZSAmJiB0aGlzLnByb3BzLmVzY2FwZUNsZWFyc1ZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsZWFyVmFsdWUoZXZlbnQpO1xuXHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDMyOlxuXHRcdFx0XHRcdC8vIHNwYWNlXG5cdFx0XHRcdFx0aWYgKHRoaXMucHJvcHMuc2VhcmNoYWJsZSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHRcdFx0dGhpcy5mb2N1c05leHRPcHRpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEZvY3VzZWRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0XHQvLyB1cFxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c1ByZXZpb3VzT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdFx0Ly8gZG93blxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c05leHRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzMzpcblx0XHRcdFx0XHQvLyBwYWdlIHVwXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzUGFnZVVwT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzQ6XG5cdFx0XHRcdFx0Ly8gcGFnZSBkb3duXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzUGFnZURvd25PcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzNTpcblx0XHRcdFx0XHQvLyBlbmQga2V5XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzRW5kT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzY6XG5cdFx0XHRcdFx0Ly8gaG9tZSBrZXlcblx0XHRcdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNTdGFydE9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQ2OlxuXHRcdFx0XHRcdC8vIGRlbGV0ZVxuXHRcdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMucHJvcHMuZGVsZXRlUmVtb3Zlcykge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMucG9wVmFsdWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVmFsdWVDbGljaycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVZhbHVlQ2xpY2sob3B0aW9uLCBldmVudCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLm9uVmFsdWVDbGljaykgcmV0dXJuO1xuXHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlQ2xpY2sob3B0aW9uLCBldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTWVudVNjcm9sbCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1lbnVTY3JvbGwoZXZlbnQpIHtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5vbk1lbnVTY3JvbGxUb0JvdHRvbSkgcmV0dXJuO1xuXHRcdFx0dmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuXHRcdFx0aWYgKHRhcmdldC5zY3JvbGxIZWlnaHQgPiB0YXJnZXQub2Zmc2V0SGVpZ2h0ICYmIHRhcmdldC5zY3JvbGxIZWlnaHQgLSB0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdGFyZ2V0LnNjcm9sbFRvcCA8PSAwKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25NZW51U2Nyb2xsVG9Cb3R0b20oKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRPcHRpb25MYWJlbCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKG9wKSB7XG5cdFx0XHRyZXR1cm4gb3BbdGhpcy5wcm9wcy5sYWJlbEtleV07XG5cdFx0fVxuXG5cdFx0LyoqXG4gICAqIFR1cm5zIGEgdmFsdWUgaW50byBhbiBhcnJheSBmcm9tIHRoZSBnaXZlbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxBcnJheX0gdmFsdWVcdFx0LSB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdCBpbnB1dFxuICAgKiBAcGFyYW0ge09iamVjdH1cdFx0bmV4dFByb3BzXHQtIG9wdGlvbmFsbHkgc3BlY2lmeSB0aGUgbmV4dFByb3BzIHNvIHRoZSByZXR1cm5lZCBhcnJheSB1c2VzIHRoZSBsYXRlc3QgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuc1x0e0FycmF5fVx0dGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgcmVwcmVzZW50ZWQgaW4gYW4gYXJyYXlcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogJ2dldFZhbHVlQXJyYXknLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZUFycmF5KHZhbHVlKSB7XG5cdFx0XHR2YXIgbmV4dFByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cblx0XHRcdC8qKiBzdXBwb3J0IG9wdGlvbmFsbHkgcGFzc2luZyBpbiB0aGUgYG5leHRQcm9wc2Agc28gYGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNgIHVwZGF0ZXMgd2lsbCBmdW5jdGlvbiBhcyBleHBlY3RlZCAqL1xuXHRcdFx0dmFyIHByb3BzID0gKHR5cGVvZiBuZXh0UHJvcHMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5leHRQcm9wcykpID09PSAnb2JqZWN0JyA/IG5leHRQcm9wcyA6IHRoaXMucHJvcHM7XG5cdFx0XHRpZiAocHJvcHMubXVsdGkpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KHByb3BzLmRlbGltaXRlcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW107XG5cdFx0XHRcdFx0dmFsdWUgPSBbdmFsdWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGV4cGFuZFZhbHVlKHZhbHVlLCBwcm9wcyk7XG5cdFx0XHRcdH0pLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHZhciBleHBhbmRlZFZhbHVlID0gZXhwYW5kVmFsdWUodmFsdWUsIHByb3BzKTtcblx0XHRcdHJldHVybiBleHBhbmRlZFZhbHVlID8gW2V4cGFuZGVkVmFsdWVdIDogW107XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2V0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdGlmICh0aGlzLnByb3BzLmF1dG9CbHVyKSB7XG5cdFx0XHRcdHRoaXMuYmx1cklucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5yZXF1aXJlZCkge1xuXHRcdFx0XHR2YXIgcmVxdWlyZWQgPSBoYW5kbGVSZXF1aXJlZCh2YWx1ZSwgdGhpcy5wcm9wcy5tdWx0aSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZXF1aXJlZDogcmVxdWlyZWQgfSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5zaW1wbGVWYWx1ZSAmJiB2YWx1ZSkge1xuXHRcdFx0XHR2YWx1ZSA9IHRoaXMucHJvcHMubXVsdGkgPyB2YWx1ZS5tYXAoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gaVtfdGhpczIucHJvcHMudmFsdWVLZXldO1xuXHRcdFx0XHR9KS5qb2luKHRoaXMucHJvcHMuZGVsaW1pdGVyKSA6IHZhbHVlW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2VsZWN0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHRcdC8vIE5PVEU6IHdlIGFjdHVhbGx5IGFkZC9zZXQgdGhlIHZhbHVlIGluIGEgY2FsbGJhY2sgdG8gbWFrZSBzdXJlIHRoZVxuXHRcdFx0Ly8gaW5wdXQgdmFsdWUgaXMgZW1wdHkgdG8gYXZvaWQgc3R5bGluZyBpc3N1ZXMgaW4gQ2hyb21lXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG5cdFx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHVwZGF0ZWRWYWx1ZSA9IHRoaXMucHJvcHMub25TZWxlY3RSZXNldHNJbnB1dCA/ICcnIDogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubXVsdGkpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4OiBudWxsLFxuXHRcdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSh1cGRhdGVkVmFsdWUpLFxuXHRcdFx0XHRcdGlzT3BlbjogIXRoaXMucHJvcHMuY2xvc2VPblNlbGVjdFxuXHRcdFx0XHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlQXJyYXkgPSBfdGhpczMuZ2V0VmFsdWVBcnJheShfdGhpczMucHJvcHMudmFsdWUpO1xuXHRcdFx0XHRcdGlmICh2YWx1ZUFycmF5LnNvbWUoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBpW190aGlzMy5wcm9wcy52YWx1ZUtleV0gPT09IHZhbHVlW190aGlzMy5wcm9wcy52YWx1ZUtleV07XG5cdFx0XHRcdFx0fSkpIHtcblx0XHRcdFx0XHRcdF90aGlzMy5yZW1vdmVWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF90aGlzMy5hZGRWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSh1cGRhdGVkVmFsdWUpLFxuXHRcdFx0XHRcdGlzT3BlbjogIXRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCxcblx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IHRoaXMuc3RhdGUuaXNGb2N1c2VkXG5cdFx0XHRcdH0sIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRfdGhpczMuc2V0VmFsdWUodmFsdWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdhZGRWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGFkZFZhbHVlKHZhbHVlKSB7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdHZhciB2aXNpYmxlT3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdHJldHVybiAhdmFsLmRpc2FibGVkO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgbGFzdFZhbHVlSW5kZXggPSB2aXNpYmxlT3B0aW9ucy5pbmRleE9mKHZhbHVlKTtcblx0XHRcdHRoaXMuc2V0VmFsdWUodmFsdWVBcnJheS5jb25jYXQodmFsdWUpKTtcblx0XHRcdGlmICh2aXNpYmxlT3B0aW9ucy5sZW5ndGggLSAxID09PSBsYXN0VmFsdWVJbmRleCkge1xuXHRcdFx0XHQvLyB0aGUgbGFzdCBvcHRpb24gd2FzIHNlbGVjdGVkOyBmb2N1cyB0aGUgc2Vjb25kLWxhc3Qgb25lXG5cdFx0XHRcdHRoaXMuZm9jdXNPcHRpb24odmlzaWJsZU9wdGlvbnNbbGFzdFZhbHVlSW5kZXggLSAxXSk7XG5cdFx0XHR9IGVsc2UgaWYgKHZpc2libGVPcHRpb25zLmxlbmd0aCA+IGxhc3RWYWx1ZUluZGV4KSB7XG5cdFx0XHRcdC8vIGZvY3VzIHRoZSBvcHRpb24gYmVsb3cgdGhlIHNlbGVjdGVkIG9uZVxuXHRcdFx0XHR0aGlzLmZvY3VzT3B0aW9uKHZpc2libGVPcHRpb25zW2xhc3RWYWx1ZUluZGV4ICsgMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3BvcFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcG9wVmFsdWUoKSB7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdGlmICghdmFsdWVBcnJheS5sZW5ndGgpIHJldHVybjtcblx0XHRcdGlmICh2YWx1ZUFycmF5W3ZhbHVlQXJyYXkubGVuZ3RoIC0gMV0uY2xlYXJhYmxlVmFsdWUgPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHR0aGlzLnNldFZhbHVlKHRoaXMucHJvcHMubXVsdGkgPyB2YWx1ZUFycmF5LnNsaWNlKDAsIHZhbHVlQXJyYXkubGVuZ3RoIC0gMSkgOiBudWxsKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW1vdmVWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVZhbHVlKHZhbHVlKSB7XG5cdFx0XHR2YXIgX3RoaXM0ID0gdGhpcztcblxuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0XHR0aGlzLnNldFZhbHVlKHZhbHVlQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdHJldHVybiBpW190aGlzNC5wcm9wcy52YWx1ZUtleV0gIT09IHZhbHVlW190aGlzNC5wcm9wcy52YWx1ZUtleV07XG5cdFx0XHR9KSk7XG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY2xlYXJWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNsZWFyVmFsdWUoZXZlbnQpIHtcblx0XHRcdC8vIGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbW91c2Vkb3duIGFuZCBub3QgdGhlIHByaW1hcnlcblx0XHRcdC8vIGJ1dHRvbiwgaWdub3JlIGl0LlxuXHRcdFx0aWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXMuc2V0VmFsdWUodGhpcy5nZXRSZXNldFZhbHVlKCkpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSgnJyksXG5cdFx0XHRcdGlzT3BlbjogZmFsc2Vcblx0XHRcdH0sIHRoaXMuZm9jdXMpO1xuXG5cdFx0XHR0aGlzLl9mb2N1c0FmdGVyQ2xlYXIgPSB0cnVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldFJlc2V0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRSZXNldFZhbHVlKCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMucmVzZXRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzLnJlc2V0VmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMubXVsdGkpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c09wdGlvbihvcHRpb24pIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBvcHRpb25cblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzTmV4dE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzTmV4dE9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbignbmV4dCcpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzUHJldmlvdXNPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c1ByZXZpb3VzT3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdwcmV2aW91cycpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzUGFnZVVwT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNQYWdlVXBPcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ3BhZ2VfdXAnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c1BhZ2VEb3duT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNQYWdlRG93bk9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbigncGFnZV9kb3duJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNTdGFydE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzU3RhcnRPcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ3N0YXJ0Jyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNFbmRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c0VuZE9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbignZW5kJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNBZGphY2VudE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzQWRqYWNlbnRPcHRpb24oZGlyKSB7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4geyBvcHRpb246IG9wdGlvbiwgaW5kZXg6IGluZGV4IH07XG5cdFx0XHR9KS5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuXHRcdFx0XHRyZXR1cm4gIW9wdGlvbi5vcHRpb24uZGlzYWJsZWQ7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuX3Njcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0dmFyIG5ld1N0YXRlID0ge1xuXHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IHRoaXMuX2ZvY3VzZWRPcHRpb24gfHwgKG9wdGlvbnMubGVuZ3RoID8gb3B0aW9uc1tkaXIgPT09ICduZXh0JyA/IDAgOiBvcHRpb25zLmxlbmd0aCAtIDFdLm9wdGlvbiA6IG51bGwpLFxuXHRcdFx0XHRcdGlzT3BlbjogdHJ1ZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0KSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUuaW5wdXRWYWx1ZSA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHR2YXIgZm9jdXNlZEluZGV4ID0gLTE7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRoaXMuX2ZvY3VzZWRPcHRpb24gPT09IG9wdGlvbnNbaV0ub3B0aW9uKSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRpciA9PT0gJ25leHQnICYmIGZvY3VzZWRJbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gKGZvY3VzZWRJbmRleCArIDEpICUgb3B0aW9ucy5sZW5ndGg7XG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ3ByZXZpb3VzJykge1xuXHRcdFx0XHRpZiAoZm9jdXNlZEluZGV4ID4gMCkge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IGZvY3VzZWRJbmRleCAtIDE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ3N0YXJ0Jykge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSAwO1xuXHRcdFx0fSBlbHNlIGlmIChkaXIgPT09ICdlbmQnKSB7XG5cdFx0XHRcdGZvY3VzZWRJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAncGFnZV91cCcpIHtcblx0XHRcdFx0dmFyIHBvdGVudGlhbEluZGV4ID0gZm9jdXNlZEluZGV4IC0gdGhpcy5wcm9wcy5wYWdlU2l6ZTtcblx0XHRcdFx0aWYgKHBvdGVudGlhbEluZGV4IDwgMCkge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IDA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gcG90ZW50aWFsSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAncGFnZV9kb3duJykge1xuXHRcdFx0XHR2YXIgX3BvdGVudGlhbEluZGV4ID0gZm9jdXNlZEluZGV4ICsgdGhpcy5wcm9wcy5wYWdlU2l6ZTtcblx0XHRcdFx0aWYgKF9wb3RlbnRpYWxJbmRleCA+IG9wdGlvbnMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBfcG90ZW50aWFsSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGZvY3VzZWRJbmRleCA9PT0gLTEpIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGZvY3VzZWRJbmRleDogb3B0aW9uc1tmb2N1c2VkSW5kZXhdLmluZGV4LFxuXHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBvcHRpb25zW2ZvY3VzZWRJbmRleF0ub3B0aW9uXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRGb2N1c2VkT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9jdXNlZE9wdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLl9mb2N1c2VkT3B0aW9uO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NlbGVjdEZvY3VzZWRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RGb2N1c2VkT3B0aW9uKCkge1xuXHRcdFx0aWYgKHRoaXMuX2ZvY3VzZWRPcHRpb24pIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0VmFsdWUodGhpcy5fZm9jdXNlZE9wdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyTG9hZGluZycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxvYWRpbmcoKSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuaXNMb2FkaW5nKSByZXR1cm47XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1sb2FkaW5nLXpvbmUnLCAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnU2VsZWN0LWxvYWRpbmcnIH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlclZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVmFsdWUodmFsdWVBcnJheSwgaXNPcGVuKSB7XG5cdFx0XHR2YXIgX3RoaXM1ID0gdGhpcztcblxuXHRcdFx0dmFyIHJlbmRlckxhYmVsID0gdGhpcy5wcm9wcy52YWx1ZVJlbmRlcmVyIHx8IHRoaXMuZ2V0T3B0aW9uTGFiZWw7XG5cdFx0XHR2YXIgVmFsdWVDb21wb25lbnQgPSB0aGlzLnByb3BzLnZhbHVlQ29tcG9uZW50O1xuXHRcdFx0aWYgKCF2YWx1ZUFycmF5Lmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgc2hvd1BsYWNlaG9sZGVyID0gc2hvdWxkU2hvd1BsYWNlaG9sZGVyKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMsIGlzT3Blbik7XG5cdFx0XHRcdHJldHVybiBzaG93UGxhY2Vob2xkZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LXBsYWNlaG9sZGVyJyB9LFxuXHRcdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblx0XHRcdFx0KSA6IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgb25DbGljayA9IHRoaXMucHJvcHMub25WYWx1ZUNsaWNrID8gdGhpcy5oYW5kbGVWYWx1ZUNsaWNrIDogbnVsbDtcblx0XHRcdGlmICh0aGlzLnByb3BzLm11bHRpKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZUFycmF5Lm1hcChmdW5jdGlvbiAodmFsdWUsIGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFZhbHVlQ29tcG9uZW50LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogX3RoaXM1LnByb3BzLmRpc2FibGVkIHx8IHZhbHVlLmNsZWFyYWJsZVZhbHVlID09PSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0aWQ6IF90aGlzNS5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlLScgKyBpLFxuXHRcdFx0XHRcdFx0XHRpbnN0YW5jZVByZWZpeDogX3RoaXM1Ll9pbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0XHRcdFx0a2V5OiAndmFsdWUtJyArIGkgKyAnLScgKyB2YWx1ZVtfdGhpczUucHJvcHMudmFsdWVLZXldLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBvbkNsaWNrLFxuXHRcdFx0XHRcdFx0XHRvblJlbW92ZTogX3RoaXM1LnJlbW92ZVZhbHVlLFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX3RoaXM1LnByb3BzLnBsYWNlaG9sZGVyLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRyZW5kZXJMYWJlbCh2YWx1ZSwgaSksXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LWFyaWEtb25seScgfSxcblx0XHRcdFx0XHRcdFx0J1xceEEwJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChzaG91bGRTaG93VmFsdWUodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykpIHtcblx0XHRcdFx0aWYgKGlzT3Blbikgb25DbGljayA9IG51bGw7XG5cdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFZhbHVlQ29tcG9uZW50LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZS1pdGVtJyxcblx0XHRcdFx0XHRcdGluc3RhbmNlUHJlZml4OiB0aGlzLl9pbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9uQ2xpY2ssXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogdGhpcy5wcm9wcy5wbGFjZWhvbGRlcixcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZUFycmF5WzBdXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZW5kZXJMYWJlbCh2YWx1ZUFycmF5WzBdKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcklucHV0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXQodmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbkluZGV4KSB7XG5cdFx0XHR2YXIgX2NsYXNzTmFtZXMsXG5cdFx0XHQgICAgX3RoaXM2ID0gdGhpcztcblxuXHRcdFx0dmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ1NlbGVjdC1pbnB1dCcsIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5jbGFzc05hbWUpO1xuXHRcdFx0dmFyIGlzT3BlbiA9IHRoaXMuc3RhdGUuaXNPcGVuO1xuXG5cdFx0XHR2YXIgYXJpYU93bnMgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBkZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWxpc3QnLCBpc09wZW4pLCBkZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWJhY2tzcGFjZS1yZW1vdmUtbWVzc2FnZScsIHRoaXMucHJvcHMubXVsdGkgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5zdGF0ZS5pc0ZvY3VzZWQgJiYgIXRoaXMuc3RhdGUuaW5wdXRWYWx1ZSksIF9jbGFzc05hbWVzKSk7XG5cblx0XHRcdHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcblx0XHRcdGlmICh2YWx1ZSAmJiAhdGhpcy5wcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0ICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xuXHRcdFx0XHQvLyBpdCBoaWRlcyBpbnB1dCB2YWx1ZSB3aGVuIGl0IGlzIG5vdCBmb2N1c2VkIGFuZCB3YXMgbm90IHJlc2V0IG9uIHNlbGVjdFxuXHRcdFx0XHR2YWx1ZSA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLmlucHV0UHJvcHMsIHtcblx0XHRcdFx0J2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGlzT3BlbiA/IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1vcHRpb24tJyArIGZvY3VzZWRPcHRpb25JbmRleCA6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZScsXG5cdFx0XHRcdCdhcmlhLWRlc2NyaWJlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1kZXNjcmliZWRieSddLFxuXHRcdFx0XHQnYXJpYS1leHBhbmRlZCc6ICcnICsgaXNPcGVuLFxuXHRcdFx0XHQnYXJpYS1oYXNwb3B1cCc6ICcnICsgaXNPcGVuLFxuXHRcdFx0XHQnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWwnXSxcblx0XHRcdFx0J2FyaWEtbGFiZWxsZWRieSc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWxsZWRieSddLFxuXHRcdFx0XHQnYXJpYS1vd25zJzogYXJpYU93bnMsXG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHRvbkJsdXI6IHRoaXMuaGFuZGxlSW5wdXRCbHVyLFxuXHRcdFx0XHRvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSxcblx0XHRcdFx0b25Gb2N1czogdGhpcy5oYW5kbGVJbnB1dEZvY3VzLFxuXHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG5cdFx0XHRcdFx0cmV0dXJuIF90aGlzNi5pbnB1dCA9IF9yZWY7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJvbGU6ICdjb21ib2JveCcsXG5cdFx0XHRcdHJlcXVpcmVkOiB0aGlzLnN0YXRlLnJlcXVpcmVkLFxuXHRcdFx0XHR0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCxcblx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKHRoaXMucHJvcHMuaW5wdXRSZW5kZXJlcikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5pbnB1dFJlbmRlcmVyKGlucHV0UHJvcHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG5cdFx0XHRcdHZhciBkaXZQcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMucHJvcHMuaW5wdXRQcm9wcywgW10pO1xuXG5cblx0XHRcdFx0dmFyIF9hcmlhT3ducyA9IGNsYXNzTmFtZXMoZGVmaW5lUHJvcGVydHkoe30sIHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1saXN0JywgaXNPcGVuKSk7XG5cdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7fSwgZGl2UHJvcHMsIHtcblx0XHRcdFx0XHQnYXJpYS1leHBhbmRlZCc6IGlzT3Blbixcblx0XHRcdFx0XHQnYXJpYS1vd25zJzogX2FyaWFPd25zLFxuXHRcdFx0XHRcdCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBpc09wZW4gPyB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctb3B0aW9uLScgKyBmb2N1c2VkT3B0aW9uSW5kZXggOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctdmFsdWUnLFxuXHRcdFx0XHRcdCdhcmlhLWRpc2FibGVkJzogJycgKyB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcblx0XHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRvbkJsdXI6IHRoaXMuaGFuZGxlSW5wdXRCbHVyLFxuXHRcdFx0XHRcdG9uRm9jdXM6IHRoaXMuaGFuZGxlSW5wdXRGb2N1cyxcblx0XHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzNi5pbnB1dCA9IF9yZWYyO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cm9sZTogJ2NvbWJvYm94Jyxcblx0XHRcdFx0XHRzdHlsZTogeyBib3JkZXI6IDAsIHdpZHRoOiAxLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9LFxuXHRcdFx0XHRcdHRhYkluZGV4OiB0aGlzLnByb3BzLnRhYkluZGV4IHx8IDBcblx0XHRcdFx0fSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5hdXRvc2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBdXRvc2l6ZUlucHV0LCBfZXh0ZW5kcyh7IGlkOiB0aGlzLnByb3BzLmlkIH0sIGlucHV0UHJvcHMsIHsgbWluV2lkdGg6ICc1JyB9KSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIGtleTogJ2lucHV0LXdyYXAnLCBzdHlsZTogeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IH0sXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoeyBpZDogdGhpcy5wcm9wcy5pZCB9LCBpbnB1dFByb3BzKSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyQ2xlYXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDbGVhcigpIHtcblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLmNsZWFyYWJsZSB8fCAhdmFsdWVBcnJheS5sZW5ndGggfHwgdGhpcy5wcm9wcy5kaXNhYmxlZCB8fCB0aGlzLnByb3BzLmlzTG9hZGluZykgcmV0dXJuO1xuXHRcdFx0dmFyIGFyaWFMYWJlbCA9IHRoaXMucHJvcHMubXVsdGkgPyB0aGlzLnByb3BzLmNsZWFyQWxsVGV4dCA6IHRoaXMucHJvcHMuY2xlYXJWYWx1ZVRleHQ7XG5cdFx0XHR2YXIgY2xlYXIgPSB0aGlzLnByb3BzLmNsZWFyUmVuZGVyZXIoKTtcblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1jbGVhci16b25lJyxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5jbGVhclZhbHVlLFxuXHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlLFxuXHRcdFx0XHRcdG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcblx0XHRcdFx0XHRvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcblx0XHRcdFx0XHR0aXRsZTogYXJpYUxhYmVsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNsZWFyXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlckFycm93Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQXJyb3coKSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuYXJyb3dSZW5kZXJlcikgcmV0dXJuO1xuXG5cdFx0XHR2YXIgb25Nb3VzZURvd24gPSB0aGlzLmhhbmRsZU1vdXNlRG93bk9uQXJyb3c7XG5cdFx0XHR2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG5cdFx0XHR2YXIgYXJyb3cgPSB0aGlzLnByb3BzLmFycm93UmVuZGVyZXIoeyBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sIGlzT3BlbjogaXNPcGVuIH0pO1xuXG5cdFx0XHRpZiAoIWFycm93KSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWFycm93LXpvbmUnLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiBvbk1vdXNlRG93blxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhcnJvd1xuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmaWx0ZXJPcHRpb25zJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZmlsdGVyT3B0aW9ucyQkMShleGNsdWRlT3B0aW9ucykge1xuXHRcdFx0dmFyIGZpbHRlclZhbHVlID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgfHwgW107XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zKSB7XG5cdFx0XHRcdC8vIE1haW50YWluIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggYm9vbGVhbiBhdHRyaWJ1dGVcblx0XHRcdFx0dmFyIGZpbHRlck9wdGlvbnMkJDEgPSB0eXBlb2YgdGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5maWx0ZXJPcHRpb25zIDogZmlsdGVyT3B0aW9ucztcblxuXHRcdFx0XHRyZXR1cm4gZmlsdGVyT3B0aW9ucyQkMShvcHRpb25zLCBmaWx0ZXJWYWx1ZSwgZXhjbHVkZU9wdGlvbnMsIHtcblx0XHRcdFx0XHRmaWx0ZXJPcHRpb246IHRoaXMucHJvcHMuZmlsdGVyT3B0aW9uLFxuXHRcdFx0XHRcdGlnbm9yZUFjY2VudHM6IHRoaXMucHJvcHMuaWdub3JlQWNjZW50cyxcblx0XHRcdFx0XHRpZ25vcmVDYXNlOiB0aGlzLnByb3BzLmlnbm9yZUNhc2UsXG5cdFx0XHRcdFx0bGFiZWxLZXk6IHRoaXMucHJvcHMubGFiZWxLZXksXG5cdFx0XHRcdFx0bWF0Y2hQb3M6IHRoaXMucHJvcHMubWF0Y2hQb3MsXG5cdFx0XHRcdFx0bWF0Y2hQcm9wOiB0aGlzLnByb3BzLm1hdGNoUHJvcCxcblx0XHRcdFx0XHR0cmltRmlsdGVyOiB0aGlzLnByb3BzLnRyaW1GaWx0ZXIsXG5cdFx0XHRcdFx0dmFsdWVLZXk6IHRoaXMucHJvcHMudmFsdWVLZXlcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb3B0aW9ucztcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbk9wdGlvblJlZicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uT3B0aW9uUmVmKHJlZiwgaXNGb2N1c2VkKSB7XG5cdFx0XHRpZiAoaXNGb2N1c2VkKSB7XG5cdFx0XHRcdHRoaXMuZm9jdXNlZCA9IHJlZjtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJNZW51Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudShvcHRpb25zLCB2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uKSB7XG5cdFx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5tZW51UmVuZGVyZXIoe1xuXHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG5cdFx0XHRcdFx0Zm9jdXNPcHRpb246IHRoaXMuZm9jdXNPcHRpb24sXG5cdFx0XHRcdFx0aW5wdXRWYWx1ZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlLFxuXHRcdFx0XHRcdGluc3RhbmNlUHJlZml4OiB0aGlzLl9pbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0XHRsYWJlbEtleTogdGhpcy5wcm9wcy5sYWJlbEtleSxcblx0XHRcdFx0XHRvbkZvY3VzOiB0aGlzLmZvY3VzT3B0aW9uLFxuXHRcdFx0XHRcdG9uT3B0aW9uUmVmOiB0aGlzLm9uT3B0aW9uUmVmLFxuXHRcdFx0XHRcdG9uU2VsZWN0OiB0aGlzLnNlbGVjdFZhbHVlLFxuXHRcdFx0XHRcdG9wdGlvbkNsYXNzTmFtZTogdGhpcy5wcm9wcy5vcHRpb25DbGFzc05hbWUsXG5cdFx0XHRcdFx0b3B0aW9uQ29tcG9uZW50OiB0aGlzLnByb3BzLm9wdGlvbkNvbXBvbmVudCxcblx0XHRcdFx0XHRvcHRpb25SZW5kZXJlcjogdGhpcy5wcm9wcy5vcHRpb25SZW5kZXJlciB8fCB0aGlzLmdldE9wdGlvbkxhYmVsLFxuXHRcdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnMsXG5cdFx0XHRcdFx0cmVtb3ZlVmFsdWU6IHRoaXMucmVtb3ZlVmFsdWUsXG5cdFx0XHRcdFx0c2VsZWN0VmFsdWU6IHRoaXMuc2VsZWN0VmFsdWUsXG5cdFx0XHRcdFx0dmFsdWVBcnJheTogdmFsdWVBcnJheSxcblx0XHRcdFx0XHR2YWx1ZUtleTogdGhpcy5wcm9wcy52YWx1ZUtleVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5ub1Jlc3VsdHNUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LW5vcmVzdWx0cycgfSxcblx0XHRcdFx0XHR0aGlzLnByb3BzLm5vUmVzdWx0c1RleHRcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlckhpZGRlbkZpZWxkJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVySGlkZGVuRmllbGQodmFsdWVBcnJheSkge1xuXHRcdFx0dmFyIF90aGlzNyA9IHRoaXM7XG5cblx0XHRcdGlmICghdGhpcy5wcm9wcy5uYW1lKSByZXR1cm47XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5qb2luVmFsdWVzKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHZhbHVlQXJyYXkubWFwKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0cmluZ2lmeVZhbHVlKGlbX3RoaXM3LnByb3BzLnZhbHVlS2V5XSk7XG5cdFx0XHRcdH0pLmpvaW4odGhpcy5wcm9wcy5kZWxpbWl0ZXIpO1xuXHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG5cdFx0XHRcdFx0ZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdFx0bmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuXHRcdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM3LnZhbHVlID0gX3JlZjM7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHR2YWx1ZTogdmFsdWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWVBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRkaXNhYmxlZDogX3RoaXM3LnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHRcdGtleTogJ2hpZGRlbi4nICsgaW5kZXgsXG5cdFx0XHRcdFx0bmFtZTogX3RoaXM3LnByb3BzLm5hbWUsXG5cdFx0XHRcdFx0cmVmOiAndmFsdWUnICsgaW5kZXgsXG5cdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0dmFsdWU6IHN0cmluZ2lmeVZhbHVlKGl0ZW1bX3RoaXM3LnByb3BzLnZhbHVlS2V5XSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRGb2N1c2FibGVPcHRpb25JbmRleCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEZvY3VzYWJsZU9wdGlvbkluZGV4KHNlbGVjdGVkT3B0aW9uKSB7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zO1xuXHRcdFx0aWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cblx0XHRcdHZhciB2YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXk7XG5cdFx0XHR2YXIgZm9jdXNlZE9wdGlvbiA9IHRoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbiB8fCBzZWxlY3RlZE9wdGlvbjtcblx0XHRcdGlmIChmb2N1c2VkT3B0aW9uICYmICFmb2N1c2VkT3B0aW9uLmRpc2FibGVkKSB7XG5cdFx0XHRcdHZhciBmb2N1c2VkT3B0aW9uSW5kZXggPSAtMTtcblx0XHRcdFx0b3B0aW9ucy5zb21lKGZ1bmN0aW9uIChvcHRpb24sIGluZGV4KSB7XG5cdFx0XHRcdFx0dmFyIGlzT3B0aW9uRXF1YWwgPSBvcHRpb25bdmFsdWVLZXldID09PSBmb2N1c2VkT3B0aW9uW3ZhbHVlS2V5XTtcblx0XHRcdFx0XHRpZiAoaXNPcHRpb25FcXVhbCkge1xuXHRcdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbkluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBpc09wdGlvbkVxdWFsO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGZvY3VzZWRPcHRpb25JbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHRyZXR1cm4gZm9jdXNlZE9wdGlvbkluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoIW9wdGlvbnNbaV0uZGlzYWJsZWQpIHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyT3V0ZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJPdXRlcihvcHRpb25zLCB2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uKSB7XG5cdFx0XHR2YXIgX3RoaXM4ID0gdGhpcztcblxuXHRcdFx0dmFyIG1lbnUgPSB0aGlzLnJlbmRlck1lbnUob3B0aW9ucywgdmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbik7XG5cdFx0XHRpZiAoIW1lbnUpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyByZWY6IGZ1bmN0aW9uIHJlZihfcmVmNSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzOC5tZW51Q29udGFpbmVyID0gX3JlZjU7XG5cdFx0XHRcdFx0fSwgY2xhc3NOYW1lOiAnU2VsZWN0LW1lbnUtb3V0ZXInLCBzdHlsZTogdGhpcy5wcm9wcy5tZW51Q29udGFpbmVyU3R5bGUgfSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdTZWxlY3QtbWVudScsXG5cdFx0XHRcdFx0XHRpZDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWxpc3QnLFxuXHRcdFx0XHRcdFx0b25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duT25NZW51LFxuXHRcdFx0XHRcdFx0b25TY3JvbGw6IHRoaXMuaGFuZGxlTWVudVNjcm9sbCxcblx0XHRcdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWY0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfdGhpczgubWVudSA9IF9yZWY0O1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHJvbGU6ICdsaXN0Ym94Jyxcblx0XHRcdFx0XHRcdHN0eWxlOiB0aGlzLnByb3BzLm1lbnVTdHlsZSxcblx0XHRcdFx0XHRcdHRhYkluZGV4OiAtMVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bWVudVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczkgPSB0aGlzO1xuXG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5fdmlzaWJsZU9wdGlvbnMgPSB0aGlzLmZpbHRlck9wdGlvbnModGhpcy5wcm9wcy5tdWx0aSAmJiB0aGlzLnByb3BzLnJlbW92ZVNlbGVjdGVkID8gdmFsdWVBcnJheSA6IG51bGwpO1xuXHRcdFx0dmFyIGlzT3BlbiA9IHRoaXMuc3RhdGUuaXNPcGVuO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubXVsdGkgJiYgIW9wdGlvbnMubGVuZ3RoICYmIHZhbHVlQXJyYXkubGVuZ3RoICYmICF0aGlzLnN0YXRlLmlucHV0VmFsdWUpIGlzT3BlbiA9IGZhbHNlO1xuXHRcdFx0dmFyIGZvY3VzZWRPcHRpb25JbmRleCA9IHRoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9uSW5kZXgodmFsdWVBcnJheVswXSk7XG5cblx0XHRcdHZhciBmb2N1c2VkT3B0aW9uID0gbnVsbDtcblx0XHRcdGlmIChmb2N1c2VkT3B0aW9uSW5kZXggIT09IG51bGwpIHtcblx0XHRcdFx0Zm9jdXNlZE9wdGlvbiA9IHRoaXMuX2ZvY3VzZWRPcHRpb24gPSBvcHRpb25zW2ZvY3VzZWRPcHRpb25JbmRleF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb2N1c2VkT3B0aW9uID0gdGhpcy5fZm9jdXNlZE9wdGlvbiA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygnU2VsZWN0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcblx0XHRcdFx0J2hhcy12YWx1ZSc6IHZhbHVlQXJyYXkubGVuZ3RoLFxuXHRcdFx0XHQnaXMtY2xlYXJhYmxlJzogdGhpcy5wcm9wcy5jbGVhcmFibGUsXG5cdFx0XHRcdCdpcy1kaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdCdpcy1mb2N1c2VkJzogdGhpcy5zdGF0ZS5pc0ZvY3VzZWQsXG5cdFx0XHRcdCdpcy1sb2FkaW5nJzogdGhpcy5wcm9wcy5pc0xvYWRpbmcsXG5cdFx0XHRcdCdpcy1vcGVuJzogaXNPcGVuLFxuXHRcdFx0XHQnaXMtcHNldWRvLWZvY3VzZWQnOiB0aGlzLnN0YXRlLmlzUHNldWRvRm9jdXNlZCxcblx0XHRcdFx0J2lzLXNlYXJjaGFibGUnOiB0aGlzLnByb3BzLnNlYXJjaGFibGUsXG5cdFx0XHRcdCdTZWxlY3QtLW11bHRpJzogdGhpcy5wcm9wcy5tdWx0aSxcblx0XHRcdFx0J1NlbGVjdC0tcnRsJzogdGhpcy5wcm9wcy5ydGwsXG5cdFx0XHRcdCdTZWxlY3QtLXNpbmdsZSc6ICF0aGlzLnByb3BzLm11bHRpXG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIHJlbW92ZU1lc3NhZ2UgPSBudWxsO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubXVsdGkgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdmFsdWVBcnJheS5sZW5ndGggJiYgIXRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAmJiB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiB0aGlzLnByb3BzLmJhY2tzcGFjZVJlbW92ZXMpIHtcblx0XHRcdFx0cmVtb3ZlTWVzc2FnZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHRcdHsgaWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1iYWNrc3BhY2UtcmVtb3ZlLW1lc3NhZ2UnLCBjbGFzc05hbWU6ICdTZWxlY3QtYXJpYS1vbmx5JywgJ2FyaWEtbGl2ZSc6ICdhc3NlcnRpdmUnIH0sXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5iYWNrc3BhY2VUb1JlbW92ZU1lc3NhZ2UucmVwbGFjZSgne2xhYmVsfScsIHZhbHVlQXJyYXlbdmFsdWVBcnJheS5sZW5ndGggLSAxXVt0aGlzLnByb3BzLmxhYmVsS2V5XSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IHJlZjogZnVuY3Rpb24gcmVmKF9yZWY3KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM5LndyYXBwZXIgPSBfcmVmNztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHRcdHN0eWxlOiB0aGlzLnByb3BzLndyYXBwZXJTdHlsZSB9LFxuXHRcdFx0XHR0aGlzLnJlbmRlckhpZGRlbkZpZWxkKHZhbHVlQXJyYXkpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgcmVmOiBmdW5jdGlvbiByZWYoX3JlZjYpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzOS5jb250cm9sID0gX3JlZjY7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWNvbnRyb2wnLFxuXHRcdFx0XHRcdFx0b25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG5cdFx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG5cdFx0XHRcdFx0XHRvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuXHRcdFx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuXHRcdFx0XHRcdFx0b25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG5cdFx0XHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LW11bHRpLXZhbHVlLXdyYXBwZXInLCBpZDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlJyB9LFxuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJWYWx1ZSh2YWx1ZUFycmF5LCBpc09wZW4pLFxuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJJbnB1dCh2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uSW5kZXgpXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRyZW1vdmVNZXNzYWdlLFxuXHRcdFx0XHRcdHRoaXMucmVuZGVyTG9hZGluZygpLFxuXHRcdFx0XHRcdHRoaXMucmVuZGVyQ2xlYXIoKSxcblx0XHRcdFx0XHR0aGlzLnJlbmRlckFycm93KClcblx0XHRcdFx0KSxcblx0XHRcdFx0aXNPcGVuID8gdGhpcy5yZW5kZXJPdXRlcihvcHRpb25zLCB2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uKSA6IG51bGxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cdHJldHVybiBTZWxlY3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblNlbGVjdCQxLnByb3BUeXBlcyA9IHtcblx0J2FyaWEtZGVzY3JpYmVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBodG1sIGlkKHMpIG9mIGVsZW1lbnQocykgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBkZXNjcmliZSB0aGlzIGlucHV0IChmb3IgYXNzaXN0aXZlIHRlY2gpXG5cdCdhcmlhLWxhYmVsJzogUHJvcFR5cGVzLnN0cmluZywgLy8gYXJpYSBsYWJlbCAoZm9yIGFzc2lzdGl2ZSB0ZWNoKVxuXHQnYXJpYS1sYWJlbGxlZGJ5JzogUHJvcFR5cGVzLnN0cmluZywgLy8gaHRtbCBpZCBvZiBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIGxhYmVsIChmb3IgYXNzaXN0aXZlIHRlY2gpXG5cdGFycm93UmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLCAvLyBjcmVhdGUgdGhlIGRyb3AtZG93biBjYXJldCBlbGVtZW50XG5cdGF1dG9CbHVyOiBQcm9wVHlwZXMuYm9vbCwgLy8gYXV0b21hdGljYWxseSBibHVyIHRoZSBjb21wb25lbnQgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWRcblx0YXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCwgLy8gYXV0b2ZvY3VzIHRoZSBjb21wb25lbnQgb24gbW91bnRcblx0YXV0b2ZvY3VzOiBQcm9wVHlwZXMuYm9vbCwgLy8gZGVwcmVjYXRlZDsgdXNlIGF1dG9Gb2N1cyBpbnN0ZWFkXG5cdGF1dG9zaXplOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byBlbmFibGUgYXV0b3NpemluZyBvciBub3Rcblx0YmFja3NwYWNlUmVtb3ZlczogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgYmFja3NwYWNlIHJlbW92ZXMgYW4gaXRlbSBpZiB0aGVyZSBpcyBubyB0ZXh0IGlucHV0XG5cdGJhY2tzcGFjZVRvUmVtb3ZlTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZywgLy8gbWVzc2FnZSB0byB1c2UgZm9yIHNjcmVlbnJlYWRlcnMgdG8gcHJlc3MgYmFja3NwYWNlIHRvIHJlbW92ZSB0aGUgY3VycmVudCBpdGVtIC0ge2xhYmVsfSBpcyByZXBsYWNlZCB3aXRoIHRoZSBpdGVtIGxhYmVsXG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHRjbGVhckFsbFRleHQ6IHN0cmluZ09yTm9kZSwgLy8gdGl0bGUgZm9yIHRoZSBcImNsZWFyXCIgY29udHJvbCB3aGVuIG11bHRpOiB0cnVlXG5cdGNsZWFyUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLCAvLyBjcmVhdGUgY2xlYXJhYmxlIHggZWxlbWVudFxuXHRjbGVhclZhbHVlVGV4dDogc3RyaW5nT3JOb2RlLCAvLyB0aXRsZSBmb3IgdGhlIFwiY2xlYXJcIiBjb250cm9sXG5cdGNsZWFyYWJsZTogUHJvcFR5cGVzLmJvb2wsIC8vIHNob3VsZCBpdCBiZSBwb3NzaWJsZSB0byByZXNldCB2YWx1ZVxuXHRjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byBjbG9zZSB0aGUgbWVudSB3aGVuIGEgdmFsdWUgaXMgc2VsZWN0ZWRcblx0ZGVsZXRlUmVtb3ZlczogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgZGVsZXRlIHJlbW92ZXMgYW4gaXRlbSBpZiB0aGVyZSBpcyBubyB0ZXh0IGlucHV0XG5cdGRlbGltaXRlcjogUHJvcFR5cGVzLnN0cmluZywgLy8gZGVsaW1pdGVyIHRvIHVzZSB0byBqb2luIG11bHRpcGxlIHZhbHVlcyBmb3IgdGhlIGhpZGRlbiBmaWVsZCB2YWx1ZVxuXHRkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdGhlIFNlbGVjdCBpcyBkaXNhYmxlZCBvciBub3Rcblx0ZXNjYXBlQ2xlYXJzVmFsdWU6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGVzY2FwZSBjbGVhcnMgdGhlIHZhbHVlIHdoZW4gdGhlIG1lbnUgaXMgY2xvc2VkXG5cdGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLmZ1bmMsIC8vIG1ldGhvZCB0byBmaWx0ZXIgYSBzaW5nbGUgb3B0aW9uIChvcHRpb24sIGZpbHRlclN0cmluZylcblx0ZmlsdGVyT3B0aW9uczogUHJvcFR5cGVzLmFueSwgLy8gYm9vbGVhbiB0byBlbmFibGUgZGVmYXVsdCBmaWx0ZXJpbmcgb3IgZnVuY3Rpb24gdG8gZmlsdGVyIHRoZSBvcHRpb25zIGFycmF5IChbb3B0aW9uc10sIGZpbHRlclN0cmluZywgW3ZhbHVlc10pXG5cdGlkOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBodG1sIGlkIHRvIHNldCBvbiB0aGUgaW5wdXQgZWxlbWVudCBmb3IgYWNjZXNzaWJpbGl0eSBvciB0ZXN0c1xuXHRpZ25vcmVBY2NlbnRzOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byBzdHJpcCBkaWFjcml0aWNzIHdoZW4gZmlsdGVyaW5nXG5cdGlnbm9yZUNhc2U6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRvIHBlcmZvcm0gY2FzZS1pbnNlbnNpdGl2ZSBmaWx0ZXJpbmdcblx0aW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCwgLy8gY3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHRoZSBJbnB1dFxuXHRpbnB1dFJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYywgLy8gcmV0dXJucyBhIGN1c3RvbSBpbnB1dCBjb21wb25lbnRcblx0aW5zdGFuY2VJZDogUHJvcFR5cGVzLnN0cmluZywgLy8gc2V0IHRoZSBjb21wb25lbnRzIGluc3RhbmNlSWRcblx0aXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0aGUgU2VsZWN0IGlzIGxvYWRpbmcgZXh0ZXJuYWxseSBvciBub3QgKHN1Y2ggYXMgb3B0aW9ucyBiZWluZyBsb2FkZWQpXG5cdGpvaW5WYWx1ZXM6IFByb3BUeXBlcy5ib29sLCAvLyBqb2lucyBtdWx0aXBsZSB2YWx1ZXMgaW50byBhIHNpbmdsZSBmb3JtIGZpZWxkIHdpdGggdGhlIGRlbGltaXRlciAobGVnYWN5IG1vZGUpXG5cdGxhYmVsS2V5OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBwYXRoIG9mIHRoZSBsYWJlbCB2YWx1ZSBpbiBvcHRpb24gb2JqZWN0c1xuXHRtYXRjaFBvczogUHJvcFR5cGVzLnN0cmluZywgLy8gKGFueXxzdGFydCkgbWF0Y2ggdGhlIHN0YXJ0IG9yIGVudGlyZSBzdHJpbmcgd2hlbiBmaWx0ZXJpbmdcblx0bWF0Y2hQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyAoYW55fGxhYmVsfHZhbHVlKSB3aGljaCBvcHRpb24gcHJvcGVydHkgdG8gZmlsdGVyIG9uXG5cdG1lbnVCdWZmZXI6IFByb3BUeXBlcy5udW1iZXIsIC8vIG9wdGlvbmFsIGJ1ZmZlciAoaW4gcHgpIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQgYW5kIHRoZSBib3R0b20gb2YgdGhlIG1lbnVcblx0bWVudUNvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBvcHRpb25hbCBzdHlsZSB0byBhcHBseSB0byB0aGUgbWVudSBjb250YWluZXJcblx0bWVudVJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYywgLy8gcmVuZGVycyBhIGN1c3RvbSBtZW51IHdpdGggb3B0aW9uc1xuXHRtZW51U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIG9wdGlvbmFsIHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBtZW51XG5cdG11bHRpOiBQcm9wVHlwZXMuYm9vbCwgLy8gbXVsdGktdmFsdWUgaW5wdXRcblx0bmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gZ2VuZXJhdGVzIGEgaGlkZGVuIDxpbnB1dCAvPiB0YWcgd2l0aCB0aGlzIGZpZWxkIG5hbWUgZm9yIGh0bWwgZm9ybXNcblx0bm9SZXN1bHRzVGV4dDogc3RyaW5nT3JOb2RlLCAvLyBwbGFjZWhvbGRlciBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBhcmUgbm8gbWF0Y2hpbmcgc2VhcmNoIHJlc3VsdHNcblx0b25CbHVyOiBQcm9wVHlwZXMuZnVuYywgLy8gb25CbHVyIGhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge31cblx0b25CbHVyUmVzZXRzSW5wdXQ6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGlucHV0IGlzIGNsZWFyZWQgb24gYmx1clxuXHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsIC8vIG9uQ2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge31cblx0b25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsIC8vIGZpcmVzIHdoZW4gdGhlIG1lbnUgaXMgY2xvc2VkXG5cdG9uQ2xvc2VSZXNldHNJbnB1dDogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgaW5wdXQgaXMgY2xlYXJlZCB3aGVuIG1lbnUgaXMgY2xvc2VkIHRocm91Z2ggdGhlIGFycm93XG5cdG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLCAvLyBvbkZvY3VzIGhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge31cblx0b25JbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsIC8vIG9uSW5wdXRDaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24gKGlucHV0VmFsdWUpIHt9XG5cdG9uSW5wdXRLZXlEb3duOiBQcm9wVHlwZXMuZnVuYywgLy8gaW5wdXQga2V5RG93biBoYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHt9XG5cdG9uTWVudVNjcm9sbFRvQm90dG9tOiBQcm9wVHlwZXMuZnVuYywgLy8gZmlyZXMgd2hlbiB0aGUgbWVudSBpcyBzY3JvbGxlZCB0byB0aGUgYm90dG9tOyBjYW4gYmUgdXNlZCB0byBwYWdpbmF0ZSBvcHRpb25zXG5cdG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsIC8vIGZpcmVzIHdoZW4gdGhlIG1lbnUgaXMgb3BlbmVkXG5cdG9uU2VsZWN0UmVzZXRzSW5wdXQ6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGlucHV0IGlzIGNsZWFyZWQgb24gc2VsZWN0ICh3b3JrcyBvbmx5IGZvciBtdWx0aXNlbGVjdClcblx0b25WYWx1ZUNsaWNrOiBQcm9wVHlwZXMuZnVuYywgLy8gb25DbGljayBoYW5kbGVyIGZvciB2YWx1ZSBsYWJlbHM6IGZ1bmN0aW9uICh2YWx1ZSwgZXZlbnQpIHt9XG5cdG9wZW5PbkNsaWNrOiBQcm9wVHlwZXMuYm9vbCwgLy8gYm9vbGVhbiB0byBjb250cm9sIG9wZW5pbmcgdGhlIG1lbnUgd2hlbiB0aGUgY29udHJvbCBpcyBjbGlja2VkXG5cdG9wZW5PbkZvY3VzOiBQcm9wVHlwZXMuYm9vbCwgLy8gYWx3YXlzIG9wZW4gb3B0aW9ucyBtZW51IG9uIGZvY3VzXG5cdG9wdGlvbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gYWRkaXRpb25hbCBjbGFzcyhlcykgdG8gYXBwbHkgdG8gdGhlIDxPcHRpb24gLz4gZWxlbWVudHNcblx0b3B0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYywgLy8gb3B0aW9uIGNvbXBvbmVudCB0byByZW5kZXIgaW4gZHJvcGRvd25cblx0b3B0aW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLCAvLyBvcHRpb25SZW5kZXJlcjogZnVuY3Rpb24gKG9wdGlvbikge31cblx0b3B0aW9uczogUHJvcFR5cGVzLmFycmF5LCAvLyBhcnJheSBvZiBvcHRpb25zXG5cdHBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLCAvLyBudW1iZXIgb2YgZW50cmllcyB0byBwYWdlIHdoZW4gdXNpbmcgcGFnZSB1cC9kb3duIGtleXNcblx0cGxhY2Vob2xkZXI6IHN0cmluZ09yTm9kZSwgLy8gZmllbGQgcGxhY2Vob2xkZXIsIGRpc3BsYXllZCB3aGVuIHRoZXJlJ3Mgbm8gdmFsdWVcblx0cmVtb3ZlU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRoZSBzZWxlY3RlZCBvcHRpb24gaXMgcmVtb3ZlZCBmcm9tIHRoZSBkcm9wZG93biBvbiBtdWx0aSBzZWxlY3RzXG5cdHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCwgLy8gYXBwbGllcyBIVE1MNSByZXF1aXJlZCBhdHRyaWJ1dGUgd2hlbiBuZWVkZWRcblx0cmVzZXRWYWx1ZTogUHJvcFR5cGVzLmFueSwgLy8gdmFsdWUgdG8gdXNlIHdoZW4geW91IGNsZWFyIHRoZSBjb250cm9sXG5cdHJ0bDogUHJvcFR5cGVzLmJvb2wsIC8vIHNldCB0byB0cnVlIGluIG9yZGVyIHRvIHVzZSByZWFjdC1zZWxlY3QgaW4gcmlnaHQtdG8tbGVmdCBkaXJlY3Rpb25cblx0c2Nyb2xsTWVudUludG9WaWV3OiBQcm9wVHlwZXMuYm9vbCwgLy8gYm9vbGVhbiB0byBlbmFibGUgdGhlIHZpZXdwb3J0IHRvIHNoaWZ0IHNvIHRoYXQgdGhlIGZ1bGwgbWVudSBmdWxseSB2aXNpYmxlIHdoZW4gZW5nYWdlZFxuXHRzZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byBlbmFibGUgc2VhcmNoaW5nIGZlYXR1cmUgb3Igbm90XG5cdHNpbXBsZVZhbHVlOiBQcm9wVHlwZXMuYm9vbCwgLy8gcGFzcyB0aGUgdmFsdWUgdG8gb25DaGFuZ2UgYXMgYSBzaW1wbGUgdmFsdWUgKGxlZ2FjeSBwcmUgMS4wIG1vZGUpLCBkZWZhdWx0cyB0byBmYWxzZVxuXHRzdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gb3B0aW9uYWwgc3R5bGUgdG8gYXBwbHkgdG8gdGhlIGNvbnRyb2xcblx0dGFiSW5kZXg6IHN0cmluZ09yTnVtYmVyLCAvLyBvcHRpb25hbCB0YWIgaW5kZXggb2YgdGhlIGNvbnRyb2xcblx0dGFiU2VsZWN0c1ZhbHVlOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byB0cmVhdCB0YWJiaW5nIG91dCB3aGlsZSBmb2N1c2VkIHRvIGJlIHZhbHVlIHNlbGVjdGlvblxuXHR0cmltRmlsdGVyOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byB0cmltIHdoaXRlc3BhY2UgYXJvdW5kIGZpbHRlciB2YWx1ZVxuXHR2YWx1ZTogUHJvcFR5cGVzLmFueSwgLy8gaW5pdGlhbCBmaWVsZCB2YWx1ZVxuXHR2YWx1ZUNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsIC8vIHZhbHVlIGNvbXBvbmVudCB0byByZW5kZXJcblx0dmFsdWVLZXk6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHBhdGggb2YgdGhlIGxhYmVsIHZhbHVlIGluIG9wdGlvbiBvYmplY3RzXG5cdHZhbHVlUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLCAvLyB2YWx1ZVJlbmRlcmVyOiBmdW5jdGlvbiAob3B0aW9uKSB7fVxuXHR3cmFwcGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QgLy8gb3B0aW9uYWwgc3R5bGUgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCB3cmFwcGVyXG59O1xuXG5TZWxlY3QkMS5kZWZhdWx0UHJvcHMgPSB7XG5cdGFycm93UmVuZGVyZXI6IGFycm93UmVuZGVyZXIsXG5cdGF1dG9zaXplOiB0cnVlLFxuXHRiYWNrc3BhY2VSZW1vdmVzOiB0cnVlLFxuXHRiYWNrc3BhY2VUb1JlbW92ZU1lc3NhZ2U6ICdQcmVzcyBiYWNrc3BhY2UgdG8gcmVtb3ZlIHtsYWJlbH0nLFxuXHRjbGVhcmFibGU6IHRydWUsXG5cdGNsZWFyQWxsVGV4dDogJ0NsZWFyIGFsbCcsXG5cdGNsZWFyUmVuZGVyZXI6IGNsZWFyUmVuZGVyZXIsXG5cdGNsZWFyVmFsdWVUZXh0OiAnQ2xlYXIgdmFsdWUnLFxuXHRjbG9zZU9uU2VsZWN0OiB0cnVlLFxuXHRkZWxldGVSZW1vdmVzOiB0cnVlLFxuXHRkZWxpbWl0ZXI6ICcsJyxcblx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRlc2NhcGVDbGVhcnNWYWx1ZTogdHJ1ZSxcblx0ZmlsdGVyT3B0aW9uczogZmlsdGVyT3B0aW9ucyxcblx0aWdub3JlQWNjZW50czogdHJ1ZSxcblx0aWdub3JlQ2FzZTogdHJ1ZSxcblx0aW5wdXRQcm9wczoge30sXG5cdGlzTG9hZGluZzogZmFsc2UsXG5cdGpvaW5WYWx1ZXM6IGZhbHNlLFxuXHRsYWJlbEtleTogJ2xhYmVsJyxcblx0bWF0Y2hQb3M6ICdhbnknLFxuXHRtYXRjaFByb3A6ICdhbnknLFxuXHRtZW51QnVmZmVyOiAwLFxuXHRtZW51UmVuZGVyZXI6IG1lbnVSZW5kZXJlcixcblx0bXVsdGk6IGZhbHNlLFxuXHRub1Jlc3VsdHNUZXh0OiAnTm8gcmVzdWx0cyBmb3VuZCcsXG5cdG9uQmx1clJlc2V0c0lucHV0OiB0cnVlLFxuXHRvbkNsb3NlUmVzZXRzSW5wdXQ6IHRydWUsXG5cdG9uU2VsZWN0UmVzZXRzSW5wdXQ6IHRydWUsXG5cdG9wZW5PbkNsaWNrOiB0cnVlLFxuXHRvcHRpb25Db21wb25lbnQ6IE9wdGlvbixcblx0cGFnZVNpemU6IDUsXG5cdHBsYWNlaG9sZGVyOiAnU2VsZWN0Li4uJyxcblx0cmVtb3ZlU2VsZWN0ZWQ6IHRydWUsXG5cdHJlcXVpcmVkOiBmYWxzZSxcblx0cnRsOiBmYWxzZSxcblx0c2Nyb2xsTWVudUludG9WaWV3OiB0cnVlLFxuXHRzZWFyY2hhYmxlOiB0cnVlLFxuXHRzaW1wbGVWYWx1ZTogZmFsc2UsXG5cdHRhYlNlbGVjdHNWYWx1ZTogdHJ1ZSxcblx0dHJpbUZpbHRlcjogdHJ1ZSxcblx0dmFsdWVDb21wb25lbnQ6IFZhbHVlLFxuXHR2YWx1ZUtleTogJ3ZhbHVlJ1xufTtcblxudmFyIHByb3BUeXBlcyA9IHtcblx0YXV0b2xvYWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsIC8vIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGUgYGxvYWRPcHRpb25zYCBwcm9wIG9uLW1vdW50OyBkZWZhdWx0cyB0byB0cnVlXG5cdGNhY2hlOiBQcm9wVHlwZXMuYW55LCAvLyBvYmplY3QgdG8gdXNlIHRvIGNhY2hlIHJlc3VsdHM7IHNldCB0byBudWxsL2ZhbHNlIHRvIGRpc2FibGUgY2FjaGluZ1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gQ2hpbGQgZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSBpbm5lciBTZWxlY3QgY29tcG9uZW50OyAocHJvcHM6IE9iamVjdCk6IFByb3BUeXBlcy5lbGVtZW50XG5cdGlnbm9yZUFjY2VudHM6IFByb3BUeXBlcy5ib29sLCAvLyBzdHJpcCBkaWFjcml0aWNzIHdoZW4gZmlsdGVyaW5nOyBkZWZhdWx0cyB0byB0cnVlXG5cdGlnbm9yZUNhc2U6IFByb3BUeXBlcy5ib29sLCAvLyBwZXJmb3JtIGNhc2UtaW5zZW5zaXRpdmUgZmlsdGVyaW5nOyBkZWZhdWx0cyB0byB0cnVlXG5cdGxvYWRPcHRpb25zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBjYWxsYmFjayB0byBsb2FkIG9wdGlvbnMgYXN5bmNocm9ub3VzbHk7IChpbnB1dFZhbHVlOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6ID9Qcm9taXNlXG5cdGxvYWRpbmdQbGFjZWhvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbLy8gcmVwbGFjZXMgdGhlIHBsYWNlaG9sZGVyIHdoaWxlIG9wdGlvbnMgYXJlIGxvYWRpbmdcblx0UHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblx0bXVsdGk6IFByb3BUeXBlcy5ib29sLCAvLyBtdWx0aS12YWx1ZSBpbnB1dFxuXHRub1Jlc3VsdHNUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsvLyBmaWVsZCBub1Jlc3VsdHNUZXh0LCBkaXNwbGF5ZWQgd2hlbiBubyBvcHRpb25zIGNvbWUgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcblx0UHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLCAvLyBvbkNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbiAobmV3VmFsdWUpIHt9XG5cdG9uSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLCAvLyBvcHRpb25hbCBmb3Iga2VlcGluZyB0cmFjayBvZiB3aGF0IGlzIGJlaW5nIHR5cGVkXG5cdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBhcnJheSBvZiBvcHRpb25zXG5cdHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsvLyBmaWVsZCBwbGFjZWhvbGRlciwgZGlzcGxheWVkIHdoZW4gdGhlcmUncyBubyB2YWx1ZSAoc2hhcmVkIHdpdGggU2VsZWN0KVxuXHRQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXHRzZWFyY2hQcm9tcHRUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsvLyBsYWJlbCB0byBwcm9tcHQgZm9yIHNlYXJjaCBpbnB1dFxuXHRQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXHR2YWx1ZTogUHJvcFR5cGVzLmFueSAvLyBpbml0aWFsIGZpZWxkIHZhbHVlXG59O1xuXG52YXIgZGVmYXVsdENhY2hlID0ge307XG5cbnZhciBkZWZhdWx0Q2hpbGRyZW4gPSBmdW5jdGlvbiBkZWZhdWx0Q2hpbGRyZW4ocHJvcHMpIHtcblx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0JDEsIHByb3BzKTtcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG5cdGF1dG9sb2FkOiB0cnVlLFxuXHRjYWNoZTogZGVmYXVsdENhY2hlLFxuXHRjaGlsZHJlbjogZGVmYXVsdENoaWxkcmVuLFxuXHRpZ25vcmVBY2NlbnRzOiB0cnVlLFxuXHRpZ25vcmVDYXNlOiB0cnVlLFxuXHRsb2FkaW5nUGxhY2Vob2xkZXI6ICdMb2FkaW5nLi4uJyxcblx0b3B0aW9uczogW10sXG5cdHNlYXJjaFByb21wdFRleHQ6ICdUeXBlIHRvIHNlYXJjaCdcbn07XG5cbnZhciBBc3luYyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKEFzeW5jLCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBBc3luYyhwcm9wcywgY29udGV4dCkge1xuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIEFzeW5jKTtcblxuXHRcdHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFzeW5jLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXN5bmMpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cblx0XHRfdGhpcy5fY2FjaGUgPSBwcm9wcy5jYWNoZSA9PT0gZGVmYXVsdENhY2hlID8ge30gOiBwcm9wcy5jYWNoZTtcblxuXHRcdF90aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRWYWx1ZTogJycsXG5cdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0b3B0aW9uczogcHJvcHMub3B0aW9uc1xuXHRcdH07XG5cblx0XHRfdGhpcy5vbklucHV0Q2hhbmdlID0gX3RoaXMub25JbnB1dENoYW5nZS5iaW5kKF90aGlzKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhBc3luYywgW3tcblx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0dmFyIGF1dG9sb2FkID0gdGhpcy5wcm9wcy5hdXRvbG9hZDtcblxuXG5cdFx0XHRpZiAoYXV0b2xvYWQpIHtcblx0XHRcdFx0dGhpcy5sb2FkT3B0aW9ucygnJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0XHRpZiAobmV4dFByb3BzLm9wdGlvbnMgIT09IHRoaXMucHJvcHMub3B0aW9ucykge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRvcHRpb25zOiBuZXh0UHJvcHMub3B0aW9uc1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFx0dGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xvYWRPcHRpb25zJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdHZhciBsb2FkT3B0aW9ucyA9IHRoaXMucHJvcHMubG9hZE9wdGlvbnM7XG5cblx0XHRcdHZhciBjYWNoZSA9IHRoaXMuX2NhY2hlO1xuXG5cdFx0XHRpZiAoY2FjaGUgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNhY2hlLCBpbnB1dFZhbHVlKSkge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFjayA9IG51bGw7XG5cblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0XHRvcHRpb25zOiBjYWNoZVtpbnB1dFZhbHVlXVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKGVycm9yLCBkYXRhKSB7XG5cdFx0XHRcdHZhciBvcHRpb25zID0gZGF0YSAmJiBkYXRhLm9wdGlvbnMgfHwgW107XG5cblx0XHRcdFx0aWYgKGNhY2hlKSB7XG5cdFx0XHRcdFx0Y2FjaGVbaW5wdXRWYWx1ZV0gPSBvcHRpb25zO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGNhbGxiYWNrID09PSBfdGhpczIuX2NhbGxiYWNrKSB7XG5cdFx0XHRcdFx0X3RoaXMyLl9jYWxsYmFjayA9IG51bGw7XG5cblx0XHRcdFx0XHRfdGhpczIuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnNcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gSWdub3JlIGFsbCBidXQgdGhlIG1vc3QgcmVjZW50IHJlcXVlc3Rcblx0XHRcdHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG5cblx0XHRcdHZhciBwcm9taXNlID0gbG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSwgY2FsbGJhY2spO1xuXHRcdFx0aWYgKHByb21pc2UpIHtcblx0XHRcdFx0cHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9LCBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX2NhbGxiYWNrICYmICF0aGlzLnN0YXRlLmlzTG9hZGluZykge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc0xvYWRpbmc6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25JbnB1dENoYW5nZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSkge1xuXHRcdFx0dmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgaWdub3JlQWNjZW50cyA9IF9wcm9wcy5pZ25vcmVBY2NlbnRzLFxuXHRcdFx0ICAgIGlnbm9yZUNhc2UgPSBfcHJvcHMuaWdub3JlQ2FzZSxcblx0XHRcdCAgICBvbklucHV0Q2hhbmdlID0gX3Byb3BzLm9uSW5wdXRDaGFuZ2U7XG5cblx0XHRcdHZhciBuZXdJbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcblxuXHRcdFx0aWYgKG9uSW5wdXRDaGFuZ2UpIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gb25JbnB1dENoYW5nZShuZXdJbnB1dFZhbHVlKTtcblx0XHRcdFx0Ly8gTm90ZTogIT0gdXNlZCBkZWxpYmVyYXRlbHkgaGVyZSB0byBjYXRjaCB1bmRlZmluZWQgYW5kIG51bGxcblx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRuZXdJbnB1dFZhbHVlID0gJycgKyB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdHJhbnNmb3JtZWRJbnB1dFZhbHVlID0gbmV3SW5wdXRWYWx1ZTtcblxuXHRcdFx0aWYgKGlnbm9yZUFjY2VudHMpIHtcblx0XHRcdFx0dHJhbnNmb3JtZWRJbnB1dFZhbHVlID0gc3RyaXBEaWFjcml0aWNzKHRyYW5zZm9ybWVkSW5wdXRWYWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpZ25vcmVDYXNlKSB7XG5cdFx0XHRcdHRyYW5zZm9ybWVkSW5wdXRWYWx1ZSA9IHRyYW5zZm9ybWVkSW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogbmV3SW5wdXRWYWx1ZSB9KTtcblx0XHRcdHRoaXMubG9hZE9wdGlvbnModHJhbnNmb3JtZWRJbnB1dFZhbHVlKTtcblxuXHRcdFx0Ly8gUmV0dXJuIG5ldyBpbnB1dCB2YWx1ZSwgYnV0IHdpdGhvdXQgYXBwbHlpbmcgdG9Mb3dlckNhc2UoKSB0byBhdm9pZCBtb2RpZnlpbmcgdGhlIHVzZXIncyB2aWV3IGNhc2Ugb2YgdGhlIGlucHV0IHdoaWxlIHR5cGluZy5cblx0XHRcdHJldHVybiBuZXdJbnB1dFZhbHVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ25vUmVzdWx0c1RleHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBub1Jlc3VsdHNUZXh0KCkge1xuXHRcdFx0dmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIGxvYWRpbmdQbGFjZWhvbGRlciA9IF9wcm9wczIubG9hZGluZ1BsYWNlaG9sZGVyLFxuXHRcdFx0ICAgIG5vUmVzdWx0c1RleHQgPSBfcHJvcHMyLm5vUmVzdWx0c1RleHQsXG5cdFx0XHQgICAgc2VhcmNoUHJvbXB0VGV4dCA9IF9wcm9wczIuc2VhcmNoUHJvbXB0VGV4dDtcblx0XHRcdHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdFx0ICAgIGlucHV0VmFsdWUgPSBfc3RhdGUuaW5wdXRWYWx1ZSxcblx0XHRcdCAgICBpc0xvYWRpbmcgPSBfc3RhdGUuaXNMb2FkaW5nO1xuXG5cblx0XHRcdGlmIChpc0xvYWRpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGxvYWRpbmdQbGFjZWhvbGRlcjtcblx0XHRcdH1cblx0XHRcdGlmIChpbnB1dFZhbHVlICYmIG5vUmVzdWx0c1RleHQpIHtcblx0XHRcdFx0cmV0dXJuIG5vUmVzdWx0c1RleHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2VhcmNoUHJvbXB0VGV4dDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0dGhpcy5zZWxlY3QuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMzID0gdGhpcztcblxuXHRcdFx0dmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIGNoaWxkcmVuID0gX3Byb3BzMy5jaGlsZHJlbixcblx0XHRcdCAgICBsb2FkaW5nUGxhY2Vob2xkZXIgPSBfcHJvcHMzLmxvYWRpbmdQbGFjZWhvbGRlcixcblx0XHRcdCAgICBwbGFjZWhvbGRlciA9IF9wcm9wczMucGxhY2Vob2xkZXI7XG5cdFx0XHR2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG5cdFx0XHQgICAgaXNMb2FkaW5nID0gX3N0YXRlMi5pc0xvYWRpbmcsXG5cdFx0XHQgICAgb3B0aW9ucyA9IF9zdGF0ZTIub3B0aW9ucztcblxuXG5cdFx0XHR2YXIgcHJvcHMgPSB7XG5cdFx0XHRcdG5vUmVzdWx0c1RleHQ6IHRoaXMubm9SZXN1bHRzVGV4dCgpLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogaXNMb2FkaW5nID8gbG9hZGluZ1BsYWNlaG9sZGVyIDogcGxhY2Vob2xkZXIsXG5cdFx0XHRcdG9wdGlvbnM6IGlzTG9hZGluZyAmJiBsb2FkaW5nUGxhY2Vob2xkZXIgPyBbXSA6IG9wdGlvbnMsXG5cdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcblx0XHRcdFx0XHRyZXR1cm4gX3RoaXMzLnNlbGVjdCA9IF9yZWY7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHJldHVybiBjaGlsZHJlbihfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMsIHtcblx0XHRcdFx0aXNMb2FkaW5nOiBpc0xvYWRpbmcsXG5cdFx0XHRcdG9uSW5wdXRDaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fV0pO1xuXHRyZXR1cm4gQXN5bmM7XG59KENvbXBvbmVudCk7XG5cbkFzeW5jLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkFzeW5jLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxudmFyIENyZWF0YWJsZVNlbGVjdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKENyZWF0YWJsZVNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQ3JlYXRhYmxlU2VsZWN0KHByb3BzLCBjb250ZXh0KSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgQ3JlYXRhYmxlU2VsZWN0KTtcblxuXHRcdHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENyZWF0YWJsZVNlbGVjdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENyZWF0YWJsZVNlbGVjdCkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuXHRcdF90aGlzLmZpbHRlck9wdGlvbnMgPSBfdGhpcy5maWx0ZXJPcHRpb25zLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm1lbnVSZW5kZXJlciA9IF90aGlzLm1lbnVSZW5kZXJlci5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5vbklucHV0S2V5RG93biA9IF90aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm9uSW5wdXRDaGFuZ2UgPSBfdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLm9uT3B0aW9uU2VsZWN0ID0gX3RoaXMub25PcHRpb25TZWxlY3QuYmluZChfdGhpcyk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0Y3JlYXRlQ2xhc3MoQ3JlYXRhYmxlU2VsZWN0LCBbe1xuXHRcdGtleTogJ2NyZWF0ZU5ld09wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU5ld09wdGlvbigpIHtcblx0XHRcdHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIGlzVmFsaWROZXdPcHRpb24gPSBfcHJvcHMuaXNWYWxpZE5ld09wdGlvbixcblx0XHRcdCAgICBuZXdPcHRpb25DcmVhdG9yID0gX3Byb3BzLm5ld09wdGlvbkNyZWF0b3IsXG5cdFx0XHQgICAgb25OZXdPcHRpb25DbGljayA9IF9wcm9wcy5vbk5ld09wdGlvbkNsaWNrLFxuXHRcdFx0ICAgIF9wcm9wcyRvcHRpb25zID0gX3Byb3BzLm9wdGlvbnMsXG5cdFx0XHQgICAgb3B0aW9ucyA9IF9wcm9wcyRvcHRpb25zID09PSB1bmRlZmluZWQgPyBbXSA6IF9wcm9wcyRvcHRpb25zO1xuXG5cblx0XHRcdGlmIChpc1ZhbGlkTmV3T3B0aW9uKHsgbGFiZWw6IHRoaXMuaW5wdXRWYWx1ZSB9KSkge1xuXHRcdFx0XHR2YXIgb3B0aW9uID0gbmV3T3B0aW9uQ3JlYXRvcih7IGxhYmVsOiB0aGlzLmlucHV0VmFsdWUsIGxhYmVsS2V5OiB0aGlzLmxhYmVsS2V5LCB2YWx1ZUtleTogdGhpcy52YWx1ZUtleSB9KTtcblx0XHRcdFx0dmFyIF9pc09wdGlvblVuaXF1ZSA9IHRoaXMuaXNPcHRpb25VbmlxdWUoeyBvcHRpb246IG9wdGlvbiwgb3B0aW9uczogb3B0aW9ucyB9KTtcblxuXHRcdFx0XHQvLyBEb24ndCBhZGQgdGhlIHNhbWUgb3B0aW9uIHR3aWNlLlxuXHRcdFx0XHRpZiAoX2lzT3B0aW9uVW5pcXVlKSB7XG5cdFx0XHRcdFx0aWYgKG9uTmV3T3B0aW9uQ2xpY2spIHtcblx0XHRcdFx0XHRcdG9uTmV3T3B0aW9uQ2xpY2sob3B0aW9uKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0b3B0aW9ucy51bnNoaWZ0KG9wdGlvbik7XG5cblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0LnNlbGVjdFZhbHVlKG9wdGlvbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZmlsdGVyT3B0aW9ucycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZpbHRlck9wdGlvbnMkJDEoKSB7XG5cdFx0XHR2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgZmlsdGVyT3B0aW9ucyQkMSA9IF9wcm9wczIuZmlsdGVyT3B0aW9ucyxcblx0XHRcdCAgICBpc1ZhbGlkTmV3T3B0aW9uID0gX3Byb3BzMi5pc1ZhbGlkTmV3T3B0aW9uLFxuXHRcdFx0ICAgIHByb21wdFRleHRDcmVhdG9yID0gX3Byb3BzMi5wcm9tcHRUZXh0Q3JlYXRvcjtcblxuXHRcdFx0Ly8gVFJJQ0tZIENoZWNrIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25zIGFzIHdlbGwuXG5cdFx0XHQvLyBEb24ndCBkaXNwbGF5IGEgY3JlYXRlLXByb21wdCBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2VsZWN0ZWQuXG5cdFx0XHQvLyBUaGlzIGNvdmVycyBhc3luYyBlZGdlLWNhc2VzIHdoZXJlIGEgbmV3bHktY3JlYXRlZCBPcHRpb24gaXNuJ3QgeWV0IGluIHRoZSBhc3luYy1sb2FkZWQgYXJyYXkuXG5cblx0XHRcdHZhciBleGNsdWRlT3B0aW9ucyA9IChhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl0pIHx8IFtdO1xuXG5cdFx0XHR2YXIgZmlsdGVyZWRPcHRpb25zID0gZmlsdGVyT3B0aW9ucyQkMS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykgfHwgW107XG5cblx0XHRcdGlmIChpc1ZhbGlkTmV3T3B0aW9uKHsgbGFiZWw6IHRoaXMuaW5wdXRWYWx1ZSB9KSkge1xuXHRcdFx0XHR2YXIgX25ld09wdGlvbkNyZWF0b3IgPSB0aGlzLnByb3BzLm5ld09wdGlvbkNyZWF0b3I7XG5cblxuXHRcdFx0XHR2YXIgb3B0aW9uID0gX25ld09wdGlvbkNyZWF0b3Ioe1xuXHRcdFx0XHRcdGxhYmVsOiB0aGlzLmlucHV0VmFsdWUsXG5cdFx0XHRcdFx0bGFiZWxLZXk6IHRoaXMubGFiZWxLZXksXG5cdFx0XHRcdFx0dmFsdWVLZXk6IHRoaXMudmFsdWVLZXlcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gVFJJQ0tZIENvbXBhcmUgdG8gYWxsIG9wdGlvbnMgKG5vdCBqdXN0IGZpbHRlcmVkIG9wdGlvbnMpIGluIGNhc2Ugb3B0aW9uIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQpLlxuXHRcdFx0XHQvLyBGb3IgbXVsdGktc2VsZWN0cywgdGhpcyB3b3VsZCByZW1vdmUgaXQgZnJvbSB0aGUgZmlsdGVyZWQgbGlzdC5cblx0XHRcdFx0dmFyIF9pc09wdGlvblVuaXF1ZTIgPSB0aGlzLmlzT3B0aW9uVW5pcXVlKHtcblx0XHRcdFx0XHRvcHRpb246IG9wdGlvbixcblx0XHRcdFx0XHRvcHRpb25zOiBleGNsdWRlT3B0aW9ucy5jb25jYXQoZmlsdGVyZWRPcHRpb25zKVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoX2lzT3B0aW9uVW5pcXVlMikge1xuXHRcdFx0XHRcdHZhciBwcm9tcHQgPSBwcm9tcHRUZXh0Q3JlYXRvcih0aGlzLmlucHV0VmFsdWUpO1xuXG5cdFx0XHRcdFx0dGhpcy5fY3JlYXRlUGxhY2Vob2xkZXJPcHRpb24gPSBfbmV3T3B0aW9uQ3JlYXRvcih7XG5cdFx0XHRcdFx0XHRsYWJlbDogcHJvbXB0LFxuXHRcdFx0XHRcdFx0bGFiZWxLZXk6IHRoaXMubGFiZWxLZXksXG5cdFx0XHRcdFx0XHR2YWx1ZUtleTogdGhpcy52YWx1ZUtleVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0ZmlsdGVyZWRPcHRpb25zLnVuc2hpZnQodGhpcy5fY3JlYXRlUGxhY2Vob2xkZXJPcHRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaXNPcHRpb25VbmlxdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvblVuaXF1ZShfcmVmKSB7XG5cdFx0XHR2YXIgb3B0aW9uID0gX3JlZi5vcHRpb24sXG5cdFx0XHQgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcblx0XHRcdHZhciBpc09wdGlvblVuaXF1ZSA9IHRoaXMucHJvcHMuaXNPcHRpb25VbmlxdWU7XG5cblxuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwgdGhpcy5wcm9wcy5vcHRpb25zO1xuXG5cdFx0XHRyZXR1cm4gaXNPcHRpb25VbmlxdWUoe1xuXHRcdFx0XHRsYWJlbEtleTogdGhpcy5sYWJlbEtleSxcblx0XHRcdFx0b3B0aW9uOiBvcHRpb24sXG5cdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnMsXG5cdFx0XHRcdHZhbHVlS2V5OiB0aGlzLnZhbHVlS2V5XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdtZW51UmVuZGVyZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBtZW51UmVuZGVyZXIkJDEocGFyYW1zKSB7XG5cdFx0XHR2YXIgbWVudVJlbmRlcmVyJCQxID0gdGhpcy5wcm9wcy5tZW51UmVuZGVyZXI7XG5cblxuXHRcdFx0cmV0dXJuIG1lbnVSZW5kZXJlciQkMShfZXh0ZW5kcyh7fSwgcGFyYW1zLCB7XG5cdFx0XHRcdG9uU2VsZWN0OiB0aGlzLm9uT3B0aW9uU2VsZWN0LFxuXHRcdFx0XHRzZWxlY3RWYWx1ZTogdGhpcy5vbk9wdGlvblNlbGVjdFxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uSW5wdXRDaGFuZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGlucHV0KSB7XG5cdFx0XHR2YXIgb25JbnB1dENoYW5nZSA9IHRoaXMucHJvcHMub25JbnB1dENoYW5nZTtcblxuXHRcdFx0Ly8gVGhpcyB2YWx1ZSBtYXkgYmUgbmVlZGVkIGluIGJldHdlZW4gU2VsZWN0IG1vdW50cyAod2hlbiB0aGlzLnNlbGVjdCBpcyBudWxsKVxuXG5cdFx0XHR0aGlzLmlucHV0VmFsdWUgPSBpbnB1dDtcblxuXHRcdFx0aWYgKG9uSW5wdXRDaGFuZ2UpIHtcblx0XHRcdFx0dGhpcy5pbnB1dFZhbHVlID0gb25JbnB1dENoYW5nZShpbnB1dCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLmlucHV0VmFsdWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25JbnB1dEtleURvd24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbklucHV0S2V5RG93bihldmVudCkge1xuXHRcdFx0dmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbiA9IF9wcm9wczMuc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uLFxuXHRcdFx0ICAgIG9uSW5wdXRLZXlEb3duID0gX3Byb3BzMy5vbklucHV0S2V5RG93bjtcblxuXHRcdFx0dmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLnNlbGVjdC5nZXRGb2N1c2VkT3B0aW9uKCk7XG5cblx0XHRcdGlmIChmb2N1c2VkT3B0aW9uICYmIGZvY3VzZWRPcHRpb24gPT09IHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyT3B0aW9uICYmIHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbih7IGtleUNvZGU6IGV2ZW50LmtleUNvZGUgfSkpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVOZXdPcHRpb24oKTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IGRlY29yYXRlZCBTZWxlY3QgZnJvbSBkb2luZyBhbnl0aGluZyBhZGRpdGlvbmFsIHdpdGggdGhpcyBrZXlEb3duIGV2ZW50XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKG9uSW5wdXRLZXlEb3duKSB7XG5cdFx0XHRcdG9uSW5wdXRLZXlEb3duKGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbk9wdGlvblNlbGVjdCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uT3B0aW9uU2VsZWN0KG9wdGlvbikge1xuXHRcdFx0aWYgKG9wdGlvbiA9PT0gdGhpcy5fY3JlYXRlUGxhY2Vob2xkZXJPcHRpb24pIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVOZXdPcHRpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0LnNlbGVjdFZhbHVlKG9wdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdHRoaXMuc2VsZWN0LmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICByZWZQcm9wID0gX3Byb3BzNC5yZWYsXG5cdFx0XHQgICAgcmVzdFByb3BzID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzNCwgWydyZWYnXSk7XG5cdFx0XHR2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG5cdFx0XHQvLyBXZSBjYW4ndCB1c2UgZGVzdHJ1Y3R1cmluZyBkZWZhdWx0IHZhbHVlcyB0byBzZXQgdGhlIGNoaWxkcmVuLFxuXHRcdFx0Ly8gYmVjYXVzZSBpdCB3b24ndCBhcHBseSB3b3JrIGlmIGBjaGlsZHJlbmAgaXMgbnVsbC4gQSBmYWxzeSBjaGVjayBpc1xuXHRcdFx0Ly8gbW9yZSByZWxpYWJsZSBpbiByZWFsIHdvcmxkIHVzZS1jYXNlcy5cblxuXHRcdFx0aWYgKCFjaGlsZHJlbikge1xuXHRcdFx0XHRjaGlsZHJlbiA9IGRlZmF1bHRDaGlsZHJlbiQyO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG5cdFx0XHRcdGFsbG93Q3JlYXRlOiB0cnVlLFxuXHRcdFx0XHRmaWx0ZXJPcHRpb25zOiB0aGlzLmZpbHRlck9wdGlvbnMsXG5cdFx0XHRcdG1lbnVSZW5kZXJlcjogdGhpcy5tZW51UmVuZGVyZXIsXG5cdFx0XHRcdG9uSW5wdXRDaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZSxcblx0XHRcdFx0b25JbnB1dEtleURvd246IHRoaXMub25JbnB1dEtleURvd24sXG5cdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYyKSB7XG5cdFx0XHRcdFx0X3RoaXMyLnNlbGVjdCA9IF9yZWYyO1xuXG5cdFx0XHRcdFx0Ly8gVGhlc2UgdmFsdWVzIG1heSBiZSBuZWVkZWQgaW4gYmV0d2VlbiBTZWxlY3QgbW91bnRzICh3aGVuIHRoaXMuc2VsZWN0IGlzIG51bGwpXG5cdFx0XHRcdFx0aWYgKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHRfdGhpczIubGFiZWxLZXkgPSBfcmVmMi5wcm9wcy5sYWJlbEtleTtcblx0XHRcdFx0XHRcdF90aGlzMi52YWx1ZUtleSA9IF9yZWYyLnByb3BzLnZhbHVlS2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocmVmUHJvcCkge1xuXHRcdFx0XHRcdFx0cmVmUHJvcChfcmVmMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGNoaWxkcmVuKHByb3BzKTtcblx0XHR9XG5cdH1dKTtcblx0cmV0dXJuIENyZWF0YWJsZVNlbGVjdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIGRlZmF1bHRDaGlsZHJlbiQyID0gZnVuY3Rpb24gZGVmYXVsdENoaWxkcmVuKHByb3BzKSB7XG5cdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCQxLCBwcm9wcyk7XG59O1xuXG52YXIgaXNPcHRpb25VbmlxdWUgPSBmdW5jdGlvbiBpc09wdGlvblVuaXF1ZShfcmVmMykge1xuXHR2YXIgb3B0aW9uID0gX3JlZjMub3B0aW9uLFxuXHQgICAgb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG5cdCAgICBsYWJlbEtleSA9IF9yZWYzLmxhYmVsS2V5LFxuXHQgICAgdmFsdWVLZXkgPSBfcmVmMy52YWx1ZUtleTtcblxuXHRpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGV4aXN0aW5nT3B0aW9uKSB7XG5cdFx0cmV0dXJuIGV4aXN0aW5nT3B0aW9uW2xhYmVsS2V5XSA9PT0gb3B0aW9uW2xhYmVsS2V5XSB8fCBleGlzdGluZ09wdGlvblt2YWx1ZUtleV0gPT09IG9wdGlvblt2YWx1ZUtleV07XG5cdH0pLmxlbmd0aCA9PT0gMDtcbn07XG5cbnZhciBpc1ZhbGlkTmV3T3B0aW9uID0gZnVuY3Rpb24gaXNWYWxpZE5ld09wdGlvbihfcmVmNCkge1xuXHR2YXIgbGFiZWwgPSBfcmVmNC5sYWJlbDtcblx0cmV0dXJuICEhbGFiZWw7XG59O1xuXG52YXIgbmV3T3B0aW9uQ3JlYXRvciA9IGZ1bmN0aW9uIG5ld09wdGlvbkNyZWF0b3IoX3JlZjUpIHtcblx0dmFyIGxhYmVsID0gX3JlZjUubGFiZWwsXG5cdCAgICBsYWJlbEtleSA9IF9yZWY1LmxhYmVsS2V5LFxuXHQgICAgdmFsdWVLZXkgPSBfcmVmNS52YWx1ZUtleTtcblxuXHR2YXIgb3B0aW9uID0ge307XG5cdG9wdGlvblt2YWx1ZUtleV0gPSBsYWJlbDtcblx0b3B0aW9uW2xhYmVsS2V5XSA9IGxhYmVsO1xuXHRvcHRpb24uY2xhc3NOYW1lID0gJ1NlbGVjdC1jcmVhdGUtb3B0aW9uLXBsYWNlaG9sZGVyJztcblxuXHRyZXR1cm4gb3B0aW9uO1xufTtcblxudmFyIHByb21wdFRleHRDcmVhdG9yID0gZnVuY3Rpb24gcHJvbXB0VGV4dENyZWF0b3IobGFiZWwpIHtcblx0cmV0dXJuICdDcmVhdGUgb3B0aW9uIFwiJyArIGxhYmVsICsgJ1wiJztcbn07XG5cbnZhciBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24gPSBmdW5jdGlvbiBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24oX3JlZjYpIHtcblx0dmFyIGtleUNvZGUgPSBfcmVmNi5rZXlDb2RlO1xuXG5cdHN3aXRjaCAoa2V5Q29kZSkge1xuXHRcdGNhc2UgOTogLy8gVEFCXG5cdFx0Y2FzZSAxMzogLy8gRU5URVJcblx0XHRjYXNlIDE4ODpcblx0XHRcdC8vIENPTU1BXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG4vLyBEZWZhdWx0IHByb3AgbWV0aG9kc1xuQ3JlYXRhYmxlU2VsZWN0LmlzT3B0aW9uVW5pcXVlID0gaXNPcHRpb25VbmlxdWU7XG5DcmVhdGFibGVTZWxlY3QuaXNWYWxpZE5ld09wdGlvbiA9IGlzVmFsaWROZXdPcHRpb247XG5DcmVhdGFibGVTZWxlY3QubmV3T3B0aW9uQ3JlYXRvciA9IG5ld09wdGlvbkNyZWF0b3I7XG5DcmVhdGFibGVTZWxlY3QucHJvbXB0VGV4dENyZWF0b3IgPSBwcm9tcHRUZXh0Q3JlYXRvcjtcbkNyZWF0YWJsZVNlbGVjdC5zaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24gPSBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb247XG5cbkNyZWF0YWJsZVNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG5cdGZpbHRlck9wdGlvbnM6IGZpbHRlck9wdGlvbnMsXG5cdGlzT3B0aW9uVW5pcXVlOiBpc09wdGlvblVuaXF1ZSxcblx0aXNWYWxpZE5ld09wdGlvbjogaXNWYWxpZE5ld09wdGlvbixcblx0bWVudVJlbmRlcmVyOiBtZW51UmVuZGVyZXIsXG5cdG5ld09wdGlvbkNyZWF0b3I6IG5ld09wdGlvbkNyZWF0b3IsXG5cdHByb21wdFRleHRDcmVhdG9yOiBwcm9tcHRUZXh0Q3JlYXRvcixcblx0c2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uOiBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb25cbn07XG5cbkNyZWF0YWJsZVNlbGVjdC5wcm9wVHlwZXMgPSB7XG5cdC8vIENoaWxkIGZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgaW5uZXIgU2VsZWN0IGNvbXBvbmVudFxuXHQvLyBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCB0byBjb21wb3NlIEhPQ3MgKGVnIENyZWF0YWJsZSBhbmQgQXN5bmMpXG5cdC8vIChwcm9wczogT2JqZWN0KTogUHJvcFR5cGVzLmVsZW1lbnRcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIFNlZSBTZWxlY3QucHJvcFR5cGVzLmZpbHRlck9wdGlvbnNcblx0ZmlsdGVyT3B0aW9uczogUHJvcFR5cGVzLmFueSxcblxuXHQvLyBTZWFyY2hlcyBmb3IgYW55IG1hdGNoaW5nIG9wdGlvbiB3aXRoaW4gdGhlIHNldCBvZiBvcHRpb25zLlxuXHQvLyBUaGlzIGZ1bmN0aW9uIHByZXZlbnRzIGR1cGxpY2F0ZSBvcHRpb25zIGZyb20gYmVpbmcgY3JlYXRlZC5cblx0Ly8gKHsgb3B0aW9uOiBPYmplY3QsIG9wdGlvbnM6IEFycmF5LCBsYWJlbEtleTogc3RyaW5nLCB2YWx1ZUtleTogc3RyaW5nIH0pOiBib29sZWFuXG5cdGlzT3B0aW9uVW5pcXVlOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IGlucHV0IHRleHQgcmVwcmVzZW50cyBhIHZhbGlkIG9wdGlvbi5cblx0Ly8gKHsgbGFiZWw6IHN0cmluZyB9KTogYm9vbGVhblxuXHRpc1ZhbGlkTmV3T3B0aW9uOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBTZWUgU2VsZWN0LnByb3BUeXBlcy5tZW51UmVuZGVyZXJcblx0bWVudVJlbmRlcmVyOiBQcm9wVHlwZXMuYW55LFxuXG5cdC8vIEZhY3RvcnkgdG8gY3JlYXRlIG5ldyBvcHRpb24uXG5cdC8vICh7IGxhYmVsOiBzdHJpbmcsIGxhYmVsS2V5OiBzdHJpbmcsIHZhbHVlS2V5OiBzdHJpbmcgfSk6IE9iamVjdFxuXHRuZXdPcHRpb25DcmVhdG9yOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBpbnB1dCBjaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24gKGlucHV0VmFsdWUpIHt9XG5cdG9uSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIGlucHV0IGtleURvd24gaGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7fVxuXHRvbklucHV0S2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cblx0Ly8gbmV3IG9wdGlvbiBjbGljayBoYW5kbGVyOiBmdW5jdGlvbiAob3B0aW9uKSB7fVxuXHRvbk5ld09wdGlvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBTZWUgU2VsZWN0LnByb3BUeXBlcy5vcHRpb25zXG5cdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcblxuXHQvLyBDcmVhdGVzIHByb21wdC9wbGFjZWhvbGRlciBvcHRpb24gdGV4dC5cblx0Ly8gKGZpbHRlclRleHQ6IHN0cmluZyk6IHN0cmluZ1xuXHRwcm9tcHRUZXh0Q3JlYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG5cblx0cmVmOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBEZWNpZGVzIGlmIGEga2V5RG93biBldmVudCAoZWcgaXRzIGBrZXlDb2RlYCkgc2hvdWxkIHJlc3VsdCBpbiB0aGUgY3JlYXRpb24gb2YgYSBuZXcgb3B0aW9uLlxuXHRzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb246IFByb3BUeXBlcy5mdW5jXG59O1xuXG52YXIgQXN5bmNDcmVhdGFibGVTZWxlY3QgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRpbmhlcml0cyhBc3luY0NyZWF0YWJsZVNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQXN5bmNDcmVhdGFibGVTZWxlY3QoKSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgQXN5bmNDcmVhdGFibGVTZWxlY3QpO1xuXHRcdHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBc3luY0NyZWF0YWJsZVNlbGVjdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFzeW5jQ3JlYXRhYmxlU2VsZWN0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhBc3luY0NyZWF0YWJsZVNlbGVjdCwgW3tcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0dGhpcy5zZWxlY3QuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEFzeW5jLFxuXHRcdFx0XHR0aGlzLnByb3BzLFxuXHRcdFx0XHRmdW5jdGlvbiAoX3JlZikge1xuXHRcdFx0XHRcdHZhciByZWYgPSBfcmVmLnJlZixcblx0XHRcdFx0XHQgICAgYXN5bmNQcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsncmVmJ10pO1xuXG5cdFx0XHRcdFx0dmFyIGFzeW5jUmVmID0gcmVmO1xuXHRcdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0Q3JlYXRhYmxlU2VsZWN0LFxuXHRcdFx0XHRcdFx0YXN5bmNQcm9wcyxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfcmVmMikge1xuXHRcdFx0XHRcdFx0XHR2YXIgcmVmID0gX3JlZjIucmVmLFxuXHRcdFx0XHRcdFx0XHQgICAgY3JlYXRhYmxlUHJvcHMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWydyZWYnXSk7XG5cblx0XHRcdFx0XHRcdFx0dmFyIGNyZWF0YWJsZVJlZiA9IHJlZjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzMi5wcm9wcy5jaGlsZHJlbihfZXh0ZW5kcyh7fSwgY3JlYXRhYmxlUHJvcHMsIHtcblx0XHRcdFx0XHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihzZWxlY3QpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNyZWF0YWJsZVJlZihzZWxlY3QpO1xuXHRcdFx0XHRcdFx0XHRcdFx0YXN5bmNSZWYoc2VsZWN0KTtcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzMi5zZWxlY3QgPSBzZWxlY3Q7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblx0cmV0dXJuIEFzeW5jQ3JlYXRhYmxlU2VsZWN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgZGVmYXVsdENoaWxkcmVuJDEgPSBmdW5jdGlvbiBkZWZhdWx0Q2hpbGRyZW4ocHJvcHMpIHtcblx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0JDEsIHByb3BzKTtcbn07XG5cbkFzeW5jQ3JlYXRhYmxlU2VsZWN0LnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQgLy8gQ2hpbGQgZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSBpbm5lciBTZWxlY3QgY29tcG9uZW50OyAocHJvcHM6IE9iamVjdCk6IFByb3BUeXBlcy5lbGVtZW50XG59O1xuXG5Bc3luY0NyZWF0YWJsZVNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG5cdGNoaWxkcmVuOiBkZWZhdWx0Q2hpbGRyZW4kMVxufTtcblxuU2VsZWN0JDEuQXN5bmMgPSBBc3luYztcblNlbGVjdCQxLkFzeW5jQ3JlYXRhYmxlID0gQXN5bmNDcmVhdGFibGVTZWxlY3Q7XG5TZWxlY3QkMS5DcmVhdGFibGUgPSBDcmVhdGFibGVTZWxlY3Q7XG5TZWxlY3QkMS5WYWx1ZSA9IFZhbHVlO1xuU2VsZWN0JDEuT3B0aW9uID0gT3B0aW9uO1xuXG5leHBvcnQgeyBBc3luYywgQXN5bmNDcmVhdGFibGVTZWxlY3QgYXMgQXN5bmNDcmVhdGFibGUsIENyZWF0YWJsZVNlbGVjdCBhcyBDcmVhdGFibGUsIFZhbHVlLCBPcHRpb24sIG1lbnVSZW5kZXJlciBhcyBkZWZhdWx0TWVudVJlbmRlcmVyLCBhcnJvd1JlbmRlcmVyIGFzIGRlZmF1bHRBcnJvd1JlbmRlcmVyLCBjbGVhclJlbmRlcmVyIGFzIGRlZmF1bHRDbGVhclJlbmRlcmVyLCBmaWx0ZXJPcHRpb25zIGFzIGRlZmF1bHRGaWx0ZXJPcHRpb25zIH07XG5leHBvcnQgZGVmYXVsdCBTZWxlY3QkMTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5lcy5qc1xuLy8gbW9kdWxlIGlkID0gMjIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDExIDE2IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7XG4gICAgU0VSVkVSX0VSUk9SLCBTVUJNSVRfUEVORElORywgU1VCTUlUX0NPTVBMRVRFLCBSRVNFVF9TVEFUVVNcbn0gZnJvbSAnLi4vcmVkdWNlcnMvYWpheFN0YXR1c1JlZHVjZXJzJ1xuaW1wb3J0IHsgUkVTRVRfQ0FQVENIQSB9IGZyb20gXCIuLi9yZWR1Y2Vycy9yZWdpc3RlclJlZHVjZXJcIjtcbmltcG9ydCB7IHJlc2V0IH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmV4cG9ydCBjb25zdCBwb3N0Rm9ybURhdGEgPSAodXJsLCBmb3JtRGF0YSwgZm9ybU5hbWUsIG1ldGhvZCwgcmVzZXRGb3JtID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogU1VCTUlUX1BFTkRJTkcsXG4gICAgICAgICAgICAgICAgc2VuZEZvcm06IGZvcm1OYW1lXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ3B1dCcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQodXJsLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ3BhdGNoJykge1xuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKHVybCwgZm9ybURhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KHVybCwgZm9ybURhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogU1VCTUlUX0NPTVBMRVRFXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc2V0Rm9ybSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlc2V0KGZvcm1OYW1lKSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSRVNFVF9DQVBUQ0hBLFxuICAgICAgICAgICAgICAgICAgICByZXNldENhcHRjaGE6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRVNFVF9DQVBUQ0hBLFxuICAgICAgICAgICAgICAgIHJlc2V0Q2FwdGNoYTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogU0VSVkVSX0VSUk9SLFxuICAgICAgICAgICAgICAgIHNlcnZlclN0YXR1czogZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgIHNlcnZlck1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZXJ2ZXJFcnJvcnM6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmUgPSAoZW1haWwpID0+IHtcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogU1VCTUlUX1BFTkRJTkdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvcHVibGljL3N1YnNjcmliZScsIHsgZW1haWwgfSk7XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTVUJNSVRfQ09NUExFVEVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFNFUlZFUl9FUlJPUixcbiAgICAgICAgICAgICAgICBzZXJ2ZXJTdGF0dXM6IGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBzZXJ2ZXJNZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldEFqYXhTdGF0dXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogUkVTRVRfU1RBVFVTXG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9yZWR1eC9hY3Rpb25zL2Zvcm1TdWJtaXNzaW9uQWN0aW9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHNpemVyU3R5bGUgPSB7XG5cdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHR0b3A6IDAsXG5cdGxlZnQ6IDAsXG5cdHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuXHRoZWlnaHQ6IDAsXG5cdG92ZXJmbG93OiAnc2Nyb2xsJyxcblx0d2hpdGVTcGFjZTogJ3ByZSdcbn07XG5cbnZhciBJTlBVVF9QUk9QU19CTEFDS0xJU1QgPSBbJ2V4dHJhV2lkdGgnLCAnaW5qZWN0U3R5bGVzJywgJ2lucHV0Q2xhc3NOYW1lJywgJ2lucHV0UmVmJywgJ2lucHV0U3R5bGUnLCAnbWluV2lkdGgnLCAnb25BdXRvc2l6ZScsICdwbGFjZWhvbGRlcklzTWluV2lkdGgnXTtcblxudmFyIGNsZWFuSW5wdXRQcm9wcyA9IGZ1bmN0aW9uIGNsZWFuSW5wdXRQcm9wcyhpbnB1dFByb3BzKSB7XG5cdElOUFVUX1BST1BTX0JMQUNLTElTVC5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuXHRcdHJldHVybiBkZWxldGUgaW5wdXRQcm9wc1tmaWVsZF07XG5cdH0pO1xuXHRyZXR1cm4gaW5wdXRQcm9wcztcbn07XG5cbnZhciBjb3B5U3R5bGVzID0gZnVuY3Rpb24gY29weVN0eWxlcyhzdHlsZXMsIG5vZGUpIHtcblx0bm9kZS5zdHlsZS5mb250U2l6ZSA9IHN0eWxlcy5mb250U2l6ZTtcblx0bm9kZS5zdHlsZS5mb250RmFtaWx5ID0gc3R5bGVzLmZvbnRGYW1pbHk7XG5cdG5vZGUuc3R5bGUuZm9udFdlaWdodCA9IHN0eWxlcy5mb250V2VpZ2h0O1xuXHRub2RlLnN0eWxlLmZvbnRTdHlsZSA9IHN0eWxlcy5mb250U3R5bGU7XG5cdG5vZGUuc3R5bGUubGV0dGVyU3BhY2luZyA9IHN0eWxlcy5sZXR0ZXJTcGFjaW5nO1xuXHRub2RlLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSBzdHlsZXMudGV4dFRyYW5zZm9ybTtcbn07XG5cbnZhciBpc0lFID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciA/IC9NU0lFIHxUcmlkZW50XFwvfEVkZ2VcXC8vLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIDogZmFsc2U7XG5cbnZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcblx0Ly8gd2Ugb25seSBuZWVkIGFuIGF1dG8tZ2VuZXJhdGVkIElEIGZvciBzdHlsZXNoZWV0IGluamVjdGlvbiwgd2hpY2ggaXMgb25seVxuXHQvLyB1c2VkIGZvciBJRS4gc28gaWYgdGhlIGJyb3dzZXIgaXMgbm90IElFLCB0aGlzIHNob3VsZCByZXR1cm4gdW5kZWZpbmVkLlxuXHRyZXR1cm4gaXNJRSA/ICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMikgOiB1bmRlZmluZWQ7XG59O1xuXG52YXIgQXV0b3NpemVJbnB1dCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhBdXRvc2l6ZUlucHV0LCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBBdXRvc2l6ZUlucHV0KHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1dG9zaXplSW5wdXQpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEF1dG9zaXplSW5wdXQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBdXRvc2l6ZUlucHV0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuaW5wdXRSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLmlucHV0ID0gZWw7XG5cdFx0XHRpZiAodHlwZW9mIF90aGlzLnByb3BzLmlucHV0UmVmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdF90aGlzLnByb3BzLmlucHV0UmVmKGVsKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0X3RoaXMucGxhY2VIb2xkZXJTaXplclJlZiA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0X3RoaXMucGxhY2VIb2xkZXJTaXplciA9IGVsO1xuXHRcdH07XG5cblx0XHRfdGhpcy5zaXplclJlZiA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0X3RoaXMuc2l6ZXIgPSBlbDtcblx0XHR9O1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbnB1dFdpZHRoOiBwcm9wcy5taW5XaWR0aCxcblx0XHRcdGlucHV0SWQ6IHByb3BzLmlkIHx8IGdlbmVyYXRlSWQoKVxuXHRcdH07XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEF1dG9zaXplSW5wdXQsIFt7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcdHRoaXMubW91bnRlZCA9IHRydWU7XG5cdFx0XHR0aGlzLmNvcHlJbnB1dFN0eWxlcygpO1xuXHRcdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0XHR2YXIgaWQgPSBuZXh0UHJvcHMuaWQ7XG5cblx0XHRcdGlmIChpZCAhPT0gdGhpcy5wcm9wcy5pZCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaW5wdXRJZDogaWQgfHwgZ2VuZXJhdGVJZCgpIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdFx0aWYgKHByZXZTdGF0ZS5pbnB1dFdpZHRoICE9PSB0aGlzLnN0YXRlLmlucHV0V2lkdGgpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQXV0b3NpemUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uQXV0b3NpemUodGhpcy5zdGF0ZS5pbnB1dFdpZHRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcdHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvcHlJbnB1dFN0eWxlcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvcHlJbnB1dFN0eWxlcygpIHtcblx0XHRcdGlmICghdGhpcy5tb3VudGVkIHx8ICF3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgaW5wdXRTdHlsZXMgPSB0aGlzLmlucHV0ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW5wdXQpO1xuXHRcdFx0aWYgKCFpbnB1dFN0eWxlcykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb3B5U3R5bGVzKGlucHV0U3R5bGVzLCB0aGlzLnNpemVyKTtcblx0XHRcdGlmICh0aGlzLnBsYWNlSG9sZGVyU2l6ZXIpIHtcblx0XHRcdFx0Y29weVN0eWxlcyhpbnB1dFN0eWxlcywgdGhpcy5wbGFjZUhvbGRlclNpemVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd1cGRhdGVJbnB1dFdpZHRoJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdXBkYXRlSW5wdXRXaWR0aCgpIHtcblx0XHRcdGlmICghdGhpcy5tb3VudGVkIHx8ICF0aGlzLnNpemVyIHx8IHR5cGVvZiB0aGlzLnNpemVyLnNjcm9sbFdpZHRoID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgbmV3SW5wdXRXaWR0aCA9IHZvaWQgMDtcblx0XHRcdGlmICh0aGlzLnByb3BzLnBsYWNlaG9sZGVyICYmICghdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMucGxhY2Vob2xkZXJJc01pbldpZHRoKSkge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gTWF0aC5tYXgodGhpcy5zaXplci5zY3JvbGxXaWR0aCwgdGhpcy5wbGFjZUhvbGRlclNpemVyLnNjcm9sbFdpZHRoKSArIDI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gdGhpcy5zaXplci5zY3JvbGxXaWR0aCArIDI7XG5cdFx0XHR9XG5cdFx0XHQvLyBhZGQgZXh0cmFXaWR0aCB0byB0aGUgZGV0ZWN0ZWQgd2lkdGguIGZvciBudW1iZXIgdHlwZXMsIHRoaXMgZGVmYXVsdHMgdG8gMTYgdG8gYWxsb3cgZm9yIHRoZSBzdGVwcGVyIFVJXG5cdFx0XHR2YXIgZXh0cmFXaWR0aCA9IHRoaXMucHJvcHMudHlwZSA9PT0gJ251bWJlcicgJiYgdGhpcy5wcm9wcy5leHRyYVdpZHRoID09PSB1bmRlZmluZWQgPyAxNiA6IHBhcnNlSW50KHRoaXMucHJvcHMuZXh0cmFXaWR0aCkgfHwgMDtcblx0XHRcdG5ld0lucHV0V2lkdGggKz0gZXh0cmFXaWR0aDtcblx0XHRcdGlmIChuZXdJbnB1dFdpZHRoIDwgdGhpcy5wcm9wcy5taW5XaWR0aCkge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gdGhpcy5wcm9wcy5taW5XaWR0aDtcblx0XHRcdH1cblx0XHRcdGlmIChuZXdJbnB1dFdpZHRoICE9PSB0aGlzLnN0YXRlLmlucHV0V2lkdGgpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aW5wdXRXaWR0aDogbmV3SW5wdXRXaWR0aFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRJbnB1dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldElucHV0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5wdXQ7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdibHVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcblx0XHRcdHRoaXMuaW5wdXQuYmx1cigpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NlbGVjdCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNlbGVjdCgpIHtcblx0XHRcdHRoaXMuaW5wdXQuc2VsZWN0KCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyU3R5bGVzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3R5bGVzKCkge1xuXHRcdFx0Ly8gdGhpcyBtZXRob2QgaW5qZWN0cyBzdHlsZXMgdG8gaGlkZSBJRSdzIGNsZWFyIGluZGljYXRvciwgd2hpY2ggbWVzc2VzXG5cdFx0XHQvLyB3aXRoIGlucHV0IHNpemUgZGV0ZWN0aW9uLiB0aGUgc3R5bGVzaGVldCBpcyBvbmx5IGluamVjdGVkIHdoZW4gdGhlXG5cdFx0XHQvLyBicm93c2VyIGlzIElFLCBhbmQgY2FuIGFsc28gYmUgZGlzYWJsZWQgYnkgdGhlIGBpbmplY3RTdHlsZXNgIHByb3AuXG5cdFx0XHR2YXIgaW5qZWN0U3R5bGVzID0gdGhpcy5wcm9wcy5pbmplY3RTdHlsZXM7XG5cblx0XHRcdHJldHVybiBpc0lFICYmIGluamVjdFN0eWxlcyA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcblx0XHRcdFx0XHRfX2h0bWw6ICdpbnB1dCMnICsgdGhpcy5zdGF0ZS5pbnB1dElkICsgJzo6LW1zLWNsZWFyIHtkaXNwbGF5OiBub25lO30nXG5cdFx0XHRcdH0gfSkgOiBudWxsO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBzaXplclZhbHVlID0gW3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlLCB0aGlzLnByb3BzLnZhbHVlLCAnJ10ucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpIHtcblx0XHRcdFx0aWYgKHByZXZpb3VzVmFsdWUgIT09IG51bGwgJiYgcHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByZXZpb3VzVmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRWYWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgd3JhcHBlclN0eWxlID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMuc3R5bGUpO1xuXHRcdFx0aWYgKCF3cmFwcGVyU3R5bGUuZGlzcGxheSkgd3JhcHBlclN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuXHRcdFx0dmFyIGlucHV0U3R5bGUgPSBfZXh0ZW5kcyh7XG5cdFx0XHRcdGJveFNpemluZzogJ2NvbnRlbnQtYm94Jyxcblx0XHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCArICdweCdcblx0XHRcdH0sIHRoaXMucHJvcHMuaW5wdXRTdHlsZSk7XG5cblx0XHRcdHZhciBpbnB1dFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMucHJvcHMsIFtdKTtcblxuXHRcdFx0Y2xlYW5JbnB1dFByb3BzKGlucHV0UHJvcHMpO1xuXHRcdFx0aW5wdXRQcm9wcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lO1xuXHRcdFx0aW5wdXRQcm9wcy5pZCA9IHRoaXMuc3RhdGUuaW5wdXRJZDtcblx0XHRcdGlucHV0UHJvcHMuc3R5bGUgPSBpbnB1dFN0eWxlO1xuXG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUsIHN0eWxlOiB3cmFwcGVyU3R5bGUgfSxcblx0XHRcdFx0dGhpcy5yZW5kZXJTdHlsZXMoKSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIGlucHV0UHJvcHMsIHsgcmVmOiB0aGlzLmlucHV0UmVmIH0pKSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyByZWY6IHRoaXMuc2l6ZXJSZWYsIHN0eWxlOiBzaXplclN0eWxlIH0sXG5cdFx0XHRcdFx0c2l6ZXJWYWx1ZVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR0aGlzLnByb3BzLnBsYWNlaG9sZGVyID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyByZWY6IHRoaXMucGxhY2VIb2xkZXJTaXplclJlZiwgc3R5bGU6IHNpemVyU3R5bGUgfSxcblx0XHRcdFx0XHR0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cdFx0XHRcdCkgOiBudWxsXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBBdXRvc2l6ZUlucHV0O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQXV0b3NpemVJbnB1dC5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0ZGVmYXVsdFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSwgLy8gZGVmYXVsdCBmaWVsZCB2YWx1ZVxuXHRleHRyYVdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbLy8gYWRkaXRpb25hbCB3aWR0aCBmb3IgaW5wdXQgZWxlbWVudFxuXHRfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKSxcblx0aWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBpZCB0byB1c2UgZm9yIHRoZSBpbnB1dCwgY2FuIGJlIHNldCBmb3IgY29uc2lzdGVudCBzbmFwc2hvdHNcblx0aW5qZWN0U3R5bGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGluamVjdCB0aGUgY3VzdG9tIHN0eWxlc2hlZXQgdG8gaGlkZSBjbGVhciBVSSwgZGVmYXVsdHMgdG8gdHJ1ZVxuXHRpbnB1dENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIGlucHV0IGVsZW1lbnRcblx0aW5wdXRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gcmVmIGNhbGxiYWNrIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRpbnB1dFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gY3NzIHN0eWxlcyBmb3IgdGhlIGlucHV0IGVsZW1lbnRcblx0bWluV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBtaW5pbXVtIHdpZHRoIGZvciBpbnB1dCBlbGVtZW50XG5cdF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuXHRvbkF1dG9zaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQXV0b3NpemUgaGFuZGxlcjogZnVuY3Rpb24obmV3V2lkdGgpIHt9XG5cdG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQ2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7fVxuXHRwbGFjZWhvbGRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIHBsYWNlaG9sZGVyIHRleHRcblx0cGxhY2Vob2xkZXJJc01pbldpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGRvbid0IGNvbGxhcHNlIHNpemUgdG8gbGVzcyB0aGFuIHRoZSBwbGFjZWhvbGRlclxuXHRzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIGNzcyBzdHlsZXMgZm9yIHRoZSBvdXRlciBlbGVtZW50XG5cdHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSAvLyBmaWVsZCB2YWx1ZVxufTtcbkF1dG9zaXplSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRtaW5XaWR0aDogMSxcblx0aW5qZWN0U3R5bGVzOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBdXRvc2l6ZUlucHV0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LWF1dG9zaXplL2xpYi9BdXRvc2l6ZUlucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgMTEgMTYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2xvZGFzaCA9IHJlcXVpcmUoJ2xvZGFzaC5vbWl0Jyk7XG5cbnZhciBfbG9kYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKiBnbG9iYWwgZG9jdW1lbnQsIHdpbmRvdyAqL1xuXG5cbi8vIENvbnN0YW50c1xudmFyIElEID0gJ19ncmVjYXB0Y2hhLmVsZW1lbnQuaWQnO1xudmFyIENBTExCQUNLX05BTUUgPSAnX2dyZWNhcHRjaGEuZGF0YS1jYWxsYmFjayc7XG52YXIgRVhQSVJFRF9DQUxMQkFDS19OQU1FID0gJ19ncmVjYXB0Y2hhLmRhdGEtZXhwaXJlZC1jYWxsYmFjayc7XG5cbnZhciByZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XG59O1xuXG52YXIgUmVjYXB0Y2hhID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJlY2FwdGNoYSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVjYXB0Y2hhKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWNhcHRjaGEpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZWNhcHRjaGEuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWNhcHRjaGEpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZWNhcHRjaGEsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGxvY2FsZSA9IF9wcm9wcy5sb2NhbGUsXG4gICAgICAgICAgY2FsbGJhY2sgPSBfcHJvcHMuY2FsbGJhY2ssXG4gICAgICAgICAgZXhwaXJlZENhbGxiYWNrID0gX3Byb3BzLmV4cGlyZWRDYWxsYmFjaztcblxuICAgICAgLy8gMS4gQXN5bmMgbGF6eSBsb2FkXG5cbiAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LmlkID0gSUQ7XG4gICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9obD0nICsgbG9jYWxlO1xuICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAob0Vycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBVUklFcnJvcignVGhlIHNjcmlwdCAnICsgb0Vycm9yLnRhcmdldC5zcmMgKyAnIGlzIG5vdCBhY2Nlc3NpYmxlLicpO1xuICAgICAgfTtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgICAgLy8gMi4gRXhwb3NlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHdpbmRvdyBvYmplY3RcbiAgICAgIHdpbmRvd1tDQUxMQkFDS19OQU1FXSA9IGNhbGxiYWNrO1xuICAgICAgd2luZG93W0VYUElSRURfQ0FMTEJBQ0tfTkFNRV0gPSBleHBpcmVkQ2FsbGJhY2s7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKElEKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIHNpdGVrZXkgPSBfcHJvcHMyLnNpdGVrZXksXG4gICAgICAgICAgaW52aXNpYmxlID0gX3Byb3BzMi5pbnZpc2libGUsXG4gICAgICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMyLCBbJ2NsYXNzTmFtZScsICdzaXRla2V5JywgJ2ludmlzaWJsZSddKTtcblxuICAgICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sICgwLCBfbG9kYXNoMi5kZWZhdWx0KShvdGhlclByb3BzLCBbJ2NhbGxiYWNrJywgJ2V4cGlyZWRDYWxsYmFjaycsICdsb2NhbGUnXSksIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCdnLXJlY2FwdGNoYScsIGNsYXNzTmFtZSksXG4gICAgICAgICdkYXRhLXNpdGVrZXknOiBzaXRla2V5LFxuICAgICAgICAnZGF0YS1jYWxsYmFjayc6IENBTExCQUNLX05BTUUsXG4gICAgICAgICdkYXRhLWV4cGlyZWQtY2FsbGJhY2snOiBFWFBJUkVEX0NBTExCQUNLX05BTUVcbiAgICAgIH0sIGludmlzaWJsZSAmJiB7ICdkYXRhLXNpemUnOiAnaW52aXNpYmxlJyB9KTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBwcm9wcyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlY2FwdGNoYTtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblJlY2FwdGNoYS5wcm9wVHlwZXMgPSB7XG4gIC8vIFJlcXVpcmVkXG4gIHNpdGVrZXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhbGxiYWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgZXhwaXJlZENhbGxiYWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvLyBPcHRpb25zXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGludmlzaWJsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBsb2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59O1xuUmVjYXB0Y2hhLmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9jYWxlOiAnZW4nLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgaW52aXNpYmxlOiBmYWxzZVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJlY2FwdGNoYTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1ncmVjYXB0Y2hhL2xpYi9SZWNhcHRjaGEuanNcbi8vIG1vZHVsZSBpZCA9IDIyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSA2IDcgOSAxMSAxNiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICBpZiAodmFsdWUgIT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbiAgfVxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlLFxuICAgIHNwcmVhZGFibGVTeW1ib2wgPSBTeW1ib2wgPyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA/IHZhbHVlcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8uZGlmZmVyZW5jZWAgd2l0aG91dCBzdXBwb3J0XG4gKiBmb3IgZXhjbHVkaW5nIG11bHRpcGxlIGFycmF5cyBvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGV4Y2x1ZGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VEaWZmZXJlbmNlKGFycmF5LCB2YWx1ZXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuXG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoaXRlcmF0ZWUpIHtcbiAgICB2YWx1ZXMgPSBhcnJheU1hcCh2YWx1ZXMsIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICB9XG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICB9XG4gIGVsc2UgaWYgKHZhbHVlcy5sZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB2YWx1ZXMgPSBuZXcgU2V0Q2FjaGUodmFsdWVzKTtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciB2YWx1ZXNJbmRleCA9IHZhbHVlc0xlbmd0aDtcbiAgICAgIHdoaWxlICh2YWx1ZXNJbmRleC0tKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbdmFsdWVzSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyh2YWx1ZXMsIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmcgZmxhdHRlbmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge251bWJlcn0gZGVwdGggVGhlIG1heGltdW0gcmVjdXJzaW9uIGRlcHRoLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJlZGljYXRlPWlzRmxhdHRlbmFibGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgdG8gdmFsdWVzIHRoYXQgcGFzcyBgcHJlZGljYXRlYCBjaGVja3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBkZXB0aCwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gaXNGbGF0dGVuYWJsZSk7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucGlja2Agd2l0aG91dCBzdXBwb3J0IGZvciBpbmRpdmlkdWFsXG4gKiBwcm9wZXJ0eSBpZGVudGlmaWVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBwaWNrLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZVBpY2sob2JqZWN0LCBwcm9wcykge1xuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGJhc2VQaWNrQnkob2JqZWN0LCBwcm9wcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gb2JqZWN0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiAgYF8ucGlja0J5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gcGljayBmcm9tLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VQaWNrQnkob2JqZWN0LCBwcm9wcywgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwga2V5KSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gYXJyYXk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IG5hdGl2ZUdldFN5bWJvbHMgPyBvdmVyQXJnKG5hdGl2ZUdldFN5bWJvbHMsIE9iamVjdCkgOiBzdHViQXJyYXk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllc1xuICogb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBmbGF0dGVuYWJsZSBgYXJndW1lbnRzYCBvYmplY3Qgb3IgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZmxhdHRlbmFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNGbGF0dGVuYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpIHx8XG4gICAgISEoc3ByZWFkYWJsZVN5bWJvbCAmJiB2YWx1ZSAmJiB2YWx1ZVtzcHJlYWRhYmxlU3ltYm9sXSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGUgb3Bwb3NpdGUgb2YgYF8ucGlja2A7IHRoaXMgbWV0aG9kIGNyZWF0ZXMgYW4gb2JqZWN0IGNvbXBvc2VkIG9mIHRoZVxuICogb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBgb2JqZWN0YCB0aGF0IGFyZVxuICogbm90IG9taXR0ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IFtwcm9wc10gVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIG9taXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogJzInLCAnYyc6IDMgfTtcbiAqXG4gKiBfLm9taXQob2JqZWN0LCBbJ2EnLCAnYyddKTtcbiAqIC8vID0+IHsgJ2InOiAnMicgfVxuICovXG52YXIgb21pdCA9IGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgcHJvcHMpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHByb3BzID0gYXJyYXlNYXAoYmFzZUZsYXR0ZW4ocHJvcHMsIDEpLCB0b0tleSk7XG4gIHJldHVybiBiYXNlUGljayhvYmplY3QsIGJhc2VEaWZmZXJlbmNlKGdldEFsbEtleXNJbihvYmplY3QpLCBwcm9wcykpO1xufSk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb21pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC5vbWl0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgNiA3IDkgMTEgMTYiXSwic291cmNlUm9vdCI6IiJ9