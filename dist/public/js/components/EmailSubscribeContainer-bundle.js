webpackJsonp([17],{

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

/***/ 1499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _EmailSubscribeContainer = __webpack_require__(1500);

var _EmailSubscribeContainer2 = _interopRequireDefault(_EmailSubscribeContainer);

var _IntlWrapper = __webpack_require__(203);

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _store = __webpack_require__(202);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.React = _react2.default;

var preloadedState = window.__PRELOADED_STATE__;
var data = window.__DATA__;

// Create Redux store with initial state
var store = (0, _store.createStoreWithState)(preloadedState);
if (document.getElementById('email-subscribe-container')) {
    (0, _reactDom.hydrate)(_react2.default.createElement(
        _IntlWrapper2.default,
        { store: store, locale: data.lang, messages: data.translations },
        _react2.default.createElement(_EmailSubscribeContainer2.default, { data: data })
    ), document.getElementById('email-subscribe-container'));
}

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

/***/ 1500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmailSubscribeContainer = undefined;

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

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(8);

var _formSubmissionAction = __webpack_require__(225);

var _classnames = __webpack_require__(10);

var _classnames2 = _interopRequireDefault(_classnames);

var _validators = __webpack_require__(15);

var _Button = __webpack_require__(143);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailSubscribeContainer = exports.EmailSubscribeContainer = function (_Component) {
    (0, _inherits3.default)(EmailSubscribeContainer, _Component);

    function EmailSubscribeContainer() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, EmailSubscribeContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EmailSubscribeContainer.__proto__ || (0, _getPrototypeOf2.default)(EmailSubscribeContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            email: '',
            emailInvalid: null
        }, _this.submit = function () {
            if (_this.state.email.trim()) {
                var emailInvalid = (0, _validators.emailChk)(_this.state.email.trim());
                if (!emailInvalid) {
                    _this.props.subscribe(_this.state.email.trim());
                    _this.setState({
                        email: ''
                    });
                }

                _this.setState({
                    emailInvalid: emailInvalid
                });
            }
        }, _this.onKeyPress = function (e) {
            if (e.key === 'Enter' && _this.state.email.trim()) {
                _this.submit();
            }
        }, _this.onEmailChanged = function (e) {
            _this.setState({
                email: e.target.value
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EmailSubscribeContainer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                intl = _props.intl,
                ajaxStatus = _props.ajaxStatus;


            var serverResponse = '';
            if (ajaxStatus.isServerError) {
                switch (ajaxStatus.serverStatus) {
                    case 400:
                        serverResponse = _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'common.invalid.email.address' });
                        break;
                    default:
                        serverResponse = _react2.default.createElement(_reactIntl.FormattedMessage, { id: ajaxStatus.serverMessage });
                }
            } else if (ajaxStatus.isSubmitSuccess) {
                serverResponse = _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'common.thanksForSubscribing' });
            }

            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-lg-5 col-md-offset-1 col-md-5 col-sm-6 col-xs-12 txt-right' },
                    _react2.default.createElement(
                        'b',
                        null,
                        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'common.subscribe.title' })
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'txt-right' },
                        _react2.default.createElement(_reactIntl.FormattedHTMLMessage, { id: 'common.subscribe.desc' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-lg-4 col-md-5 col-sm-6 col-xs-12' },
                    _react2.default.createElement(
                        'div',
                        { className: 'subscribe-form' },
                        _react2.default.createElement('input', { type: 'text', value: this.state.email, onChange: this.onEmailChanged,
                            onKeyPress: this.onKeyPress,
                            className: 'input-field input-s',
                            placeholder: intl.formatMessage({ id: 'common.subscribe.field' }) }),
                        _react2.default.createElement(
                            _Button2.default,
                            { className: 'btn btn-lg yellow',
                                submitting: ajaxStatus.isSubmitting,
                                type: 'button',
                                onClick: this.submit },
                            _react2.default.createElement(_reactIntl.FormattedMessage, {
                                id: 'common.subscribe' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'validation' },
                        !this.state.emailInvalid && serverResponse && _react2.default.createElement(
                            'div',
                            {
                                className: (0, _classnames2.default)('', {
                                    'error': ajaxStatus.isServerError,
                                    'success': ajaxStatus.isSubmitSuccess
                                })
                            },
                            serverResponse
                        ),
                        this.state.emailInvalid && this.state.email && _react2.default.createElement(
                            'div',
                            { className: 'error' },
                            _react2.default.createElement(_reactIntl.FormattedMessage, { id: this.state.emailInvalid })
                        )
                    )
                )
            );
        }
    }]);
    return EmailSubscribeContainer;
}(_react.Component);

EmailSubscribeContainer.propTypes = {
    intl: _propTypes2.default.object.isRequired,
    ajaxStatus: _propTypes2.default.object.isRequired,
    subscribe: _propTypes2.default.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
    return {
        ajaxStatus: state.ajaxStatus
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { subscribe: _formSubmissionAction.subscribe })((0, _reactIntl.injectIntl)(EmailSubscribeContainer));

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

/***/ })

},[1499]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvanMvY29tcG9uZW50cy9pbnB1dHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9jb250YWluZXJzL2Zvb3Rlci9FbWFpbFN1YnNjcmliZUNvbnRhaW5lci1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL3V0aWxzL3ZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2pzL2NvbnRhaW5lcnMvZm9vdGVyL0VtYWlsU3Vic2NyaWJlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9qcy9yZWR1eC9hY3Rpb25zL2Zvcm1TdWJtaXNzaW9uQWN0aW9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwidHlwZSIsImNsYXNzTmFtZSIsInN1Ym1pdHRpbmciLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzdHlsZSIsImRpc2FibGVkIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJmdW5jIiwibm9kZSIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIndpbmRvdyIsIlJlYWN0IiwicHJlbG9hZGVkU3RhdGUiLCJfX1BSRUxPQURFRF9TVEFURV9fIiwiZGF0YSIsIl9fREFUQV9fIiwic3RvcmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGFuZyIsInRyYW5zbGF0aW9ucyIsInJlcXVpcmVkIiwiQXJyYXkiLCJpc0FycmF5IiwidmFsdWUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJlbWFpbCIsInRlc3QiLCJzY3JvbGxUb0ludmFsaWQiLCJlcnJvckVsIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvIiwidG9wIiwicGFnZVlPZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxUb1RvcCIsInNjcm9sbER1cmF0aW9uIiwic2Nyb2xsWSIsInNjcm9sbFN0ZXAiLCJzY3JvbGxJbnRlcnZhbCIsInNldEludGVydmFsIiwic2Nyb2xsQnkiLCJjbGVhckludGVydmFsIiwicmVxdWlyZWRDaGsiLCJudW1iZXJDaGsiLCJpc05hTiIsIk51bWJlciIsIm51bGxWYWx1ZSIsImluaXQiLCJudWxsVmFsdWVDaGsiLCJtaW5WYWx1ZUNoayIsIm1pbiIsIm1heFZhbHVlQ2hrIiwibWF4IiwibWF4TGVuQ2hrIiwibWluTGVuQ2hrIiwiZW1haWxDaGsiLCJwYXNzd29yZENoayIsInZhbGlkYXRlQWNjb3VudCIsImVycm9ycyIsInZhbHVlcyIsInRpdGxlIiwicGFzc3BvcnRDb3VudHJ5SWQiLCJwYXNzd29yZHNNYXRjaCIsImFsbFZhbHVlcyIsInBhc3N3b3JkIiwidHJpbSIsInJlcGxhY2UiLCJ3ZWJzaXRlIiwiRW1haWxTdWJzY3JpYmVDb250YWluZXIiLCJzdGF0ZSIsImVtYWlsSW52YWxpZCIsInN1Ym1pdCIsInN1YnNjcmliZSIsInNldFN0YXRlIiwib25LZXlQcmVzcyIsImUiLCJrZXkiLCJvbkVtYWlsQ2hhbmdlZCIsInRhcmdldCIsImludGwiLCJhamF4U3RhdHVzIiwic2VydmVyUmVzcG9uc2UiLCJpc1NlcnZlckVycm9yIiwic2VydmVyU3RhdHVzIiwic2VydmVyTWVzc2FnZSIsImlzU3VibWl0U3VjY2VzcyIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsImlzU3VibWl0dGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInBvc3RGb3JtRGF0YSIsInVybCIsImZvcm1EYXRhIiwiZm9ybU5hbWUiLCJtZXRob2QiLCJyZXNldEZvcm0iLCJkaXNwYXRjaCIsIlNVQk1JVF9QRU5ESU5HIiwic2VuZEZvcm0iLCJheGlvcyIsInB1dCIsInBhdGNoIiwicG9zdCIsIlNVQk1JVF9DT01QTEVURSIsIlJFU0VUX0NBUFRDSEEiLCJyZXNldENhcHRjaGEiLCJTRVJWRVJfRVJST1IiLCJyZXNwb25zZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJzZXJ2ZXJFcnJvcnMiLCJyZXNldEFqYXhTdGF0dXMiLCJSRVNFVF9TVEFUVVMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREQ7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7O2lDQXFCUjtBQUFBLHlCQUN1RSxLQUFLQyxLQUQ1RTtBQUFBLGdCQUNHQyxJQURILFVBQ0dBLElBREg7QUFBQSxnQkFDU0MsU0FEVCxVQUNTQSxTQURUO0FBQUEsZ0JBQ29CQyxVQURwQixVQUNvQkEsVUFEcEI7QUFBQSxnQkFDZ0NDLE9BRGhDLFVBQ2dDQSxPQURoQztBQUFBLGdCQUN5Q0MsUUFEekMsVUFDeUNBLFFBRHpDO0FBQUEsZ0JBQ21EQyxLQURuRCxVQUNtREEsS0FEbkQ7QUFBQSxnQkFDMERDLFFBRDFELFVBQzBEQSxRQUQxRDs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQVEsTUFBTU4sSUFBZCxFQUFvQixPQUFPSyxLQUEzQixFQUFrQyxhQUFhLEtBQUtOLEtBQUwsQ0FBV1EsV0FBMUQsRUFBdUUsWUFBWSxLQUFLUixLQUFMLENBQVdTLFVBQTlGO0FBQ1EsK0JBQVdQLFNBRG5CLEVBQzhCLFVBQVVLLFlBQVlKLFVBRHBELEVBQ2dFLFNBQVNDLE9BRHpFO0FBRUtELDhCQUFj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QU1rSDtBQURELDZCQUFUO0FBVEQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBYUNQLHFDQUFTO0FBQ0wzRyxzQ0FBTXFILGdDQUREO0FBRUx2Qiw4Q0FBYyxhQUFNd0IsUUFBTixDQUFlQyxNQUZ4QjtBQUdMeEIsK0NBQWUsYUFBTXVCLFFBQU4sQ0FBZS9GLElBQWYsQ0FBb0JpRztBQUg5Qiw2QkFBVDs7QUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JILENBckJNOztBQXVCQSxJQUFNRSw0Q0FBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDakM7QUFBQSw2RkFBTyxrQkFBTWYsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0hBLHFDQUFTO0FBQ0wzRyxzQ0FBTTJIO0FBREQsNkJBQVQ7O0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtILENBTk0sQyIsImZpbGUiOiJwdWJsaWMvanMvY29tcG9uZW50cy9FbWFpbFN1YnNjcmliZUNvbnRhaW5lci1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTYgMTciLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN1Ym1pdHRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgICAgb25Nb3VzZU92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbk1vdXNlT3V0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBjbGFzc05hbWU6ICdidG4gYnRuLXMnLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIGNsYXNzTmFtZSwgc3VibWl0dGluZywgb25DbGljaywgY2hpbGRyZW4sIHN0eWxlLCBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT17dHlwZX0gc3R5bGU9e3N0eWxlfSBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5vbk1vdXNlT3Zlcn0gb25Nb3VzZU91dD17dGhpcy5wcm9wcy5vbk1vdXNlT3V0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IHN1Ym1pdHRpbmd9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtzdWJtaXR0aW5nICYmIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNpcmNsZS1vLW5vdGNoIGZhLXNwaW5cIi8+fSB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvY29tcG9uZW50cy9pbnB1dHMvQnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEVtYWlsU3Vic2NyaWJlQ29udGFpbmVyIGZyb20gJy4vRW1haWxTdWJzY3JpYmVDb250YWluZXInO1xuaW1wb3J0IEludGxXcmFwcGVyIGZyb20gJy4uLy4uLy4uLy4uL0ludGxXcmFwcGVyJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlV2l0aFN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xuXG53aW5kb3cuUmVhY3QgPSBSZWFjdDtcblxuY29uc3QgcHJlbG9hZGVkU3RhdGUgPSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXztcbmNvbnN0IGRhdGEgPSB3aW5kb3cuX19EQVRBX187XG5cbi8vIENyZWF0ZSBSZWR1eCBzdG9yZSB3aXRoIGluaXRpYWwgc3RhdGVcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoU3RhdGUocHJlbG9hZGVkU3RhdGUpO1xuaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLXN1YnNjcmliZS1jb250YWluZXInKSkge1xuICAgIGh5ZHJhdGUoXG4gICAgICAgIDxJbnRsV3JhcHBlciBzdG9yZT17c3RvcmV9IGxvY2FsZT17ZGF0YS5sYW5nfSBtZXNzYWdlcz17ZGF0YS50cmFuc2xhdGlvbnN9PlxuICAgICAgICAgICAgPEVtYWlsU3Vic2NyaWJlQ29udGFpbmVyIGRhdGE9e2RhdGF9Lz5cbiAgICAgICAgPC9JbnRsV3JhcHBlcj4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1zdWJzY3JpYmUtY29udGFpbmVyJylcbiAgICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbnRhaW5lcnMvZm9vdGVyL0VtYWlsU3Vic2NyaWJlQ29udGFpbmVyLWNsaWVudC5qcyIsImV4cG9ydCBjb25zdCByZXF1aXJlZCA9IHZhbHVlID0+XG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA8IDEpIHx8ICF2YWx1ZSA/ICdpbnB1dC5lbXB0eUZpZWxkJyA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGVtYWlsID0gdmFsdWUgPT5cbiAgICB2YWx1ZSAmJiAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZSkgPyAnaW5wdXQuaW52YWxpZEVtYWlsJyA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbFRvSW52YWxpZCA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG4gICAgaWYgKGVycm9yRWwgJiYgd2luZG93LnNjcm9sbFRvKSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCArIChlcnJvckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIDIwMCk7XG4gICAgICAgIHNjcm9sbFRvVG9wKHRvcCwgNTAwKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAodG9wLCBzY3JvbGxEdXJhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgY29uc3Qgc2Nyb2xsU3RlcCA9IC0oc2Nyb2xsWSAtIHRvcCkgLyAoc2Nyb2xsRHVyYXRpb24gLyAxNSksXG4gICAgICAgIHNjcm9sbEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgIGlmIChzY3JvbGxZID4gdG9wKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIHNjcm9sbFN0ZXApO1xuICAgICAgICAgICAgfSBlbHNlIGNsZWFySW50ZXJ2YWwoc2Nyb2xsSW50ZXJ2YWwpO1xuICAgICAgICB9LCAxNSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVxdWlyZWRDaGsgPSB2YWx1ZSA9PiAodmFsdWUgPyB1bmRlZmluZWQgOiAnY29tbW9uLnJlcXVpcmVkJyk7XG5cbmV4cG9ydCBjb25zdCBudW1iZXJDaGsgPSB2YWx1ZSA9PlxuICAgIHZhbHVlICYmIGlzTmFOKE51bWJlcih2YWx1ZSkpID8gJ2NvbW1vbi5tdXN0LmJlLmEubnVtYmVyJyA6IHVuZGVmaW5lZDtcblxuY29uc3QgbnVsbFZhbHVlID0gaW5pdCA9PiB2YWx1ZSA9PiAodmFsdWUgPT09IGluaXQgPyAnY29tbW9uLnJlcXVpcmVkJyA6IHVuZGVmaW5lZCk7XG5leHBvcnQgY29uc3QgbnVsbFZhbHVlQ2hrID0gbnVsbFZhbHVlKCctMScpO1xuXG5leHBvcnQgY29uc3QgbWluVmFsdWVDaGsgPSBtaW4gPT4gdmFsdWUgPT5cbiAgICB2YWx1ZSAmJiB2YWx1ZSA8IG1pbiA/IGBjb21tb24ubXVzdC5iZS5hdC5sZWFzdCAke21pbn1gIDogdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgbWF4VmFsdWVDaGsgPSBtYXggPT4gdmFsdWUgPT5cbiAgICB2YWx1ZSAmJiB2YWx1ZSA+IG1heCA/IGBjb21tb24ubXVzdC5iZS5sZXNzLnRoYW4gJHttYXh9YCA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IG1heExlbkNoayA9IG1heCA9PiB2YWx1ZSA9PlxuICAgIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IG1heCA/IGBjb21tb24ubXVzdC5iZS5vci5sZXNzICR7bWF4fWAgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBtaW5MZW5DaGsgPSBtaW4gPT4gdmFsdWUgPT5cbiAgICB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPCBtaW4gPyBgY29tbW9uLm11c3QuYmUub3IubW9yZSAke21pbn1gIDogdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgZW1haWxDaGsgPSB2YWx1ZSA9PlxuICAgIHZhbHVlICYmICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKSA/ICdjb21tb24uaW52YWxpZC5lbWFpbC5hZGRyZXNzJyA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkQ2hrID0gdmFsdWUgPT5cbiAgICB2YWx1ZSAmJiAhL14oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9O+KAmTrigJ1cXFxcfCwuPD5cXC8/XSkuezgsMjB9JC8udGVzdCh2YWx1ZSkgPyBgY29tbW9uLmludmFsaWQucGFzc3dvcmRgIDogdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVBY2NvdW50ID0gdmFsdWVzID0+IHtcbiAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICBpZiAoIXZhbHVlcy50aXRsZSkge1xuICAgICAgICBlcnJvcnMudGl0bGUgPSAnY29tbW9uLnJlcXVpcmVkJ1xuICAgIH1cblxuICAgIGlmICghdmFsdWVzLnBhc3Nwb3J0Q291bnRyeUlkKSB7XG4gICAgICAgIGVycm9ycy5wYXNzcG9ydENvdW50cnlJZCA9ICdjb21tb24ucmVxdWlyZWQnXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xufTtcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3Jkc01hdGNoID0gKHZhbHVlLCBhbGxWYWx1ZXMpID0+XG4gICAgdmFsdWUgIT09IGFsbFZhbHVlcy5wYXNzd29yZCA/ICdyZWdpc3Rlci5wYXNzd29yZC5ub3QubWF0Y2gnIDogdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgdHJpbSA9ICh2YWx1ZSkgPT4gdmFsdWUucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG5cbmV4cG9ydCBjb25zdCB3ZWJzaXRlID0gKHZhbHVlKSA9PiB2YWx1ZSAmJlxuIS9eKGh0dHB8aHR0cHMpOlxcL1xcLygoMjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXXsxfVswLTldezJ9fFsxLTldezF9WzAtOV17MX18WzEtOV0pXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV17MX1bMC05XXsyfXxbMS05XXsxfVswLTldezF9fFsxLTldfDApXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV17MX1bMC05XXsyfXxbMS05XXsxfVswLTldezF9fFsxLTldfDApXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV17MX1bMC05XXsyfXxbMS05XXsxfVswLTldezF9fFswLTldKXwoW1xcd1xcLV0rXFwuKSpbXFx3XFwtXStcXC4oY29tfGVkdXxnb3Z8aW50fG1pbHxuZXR8b3JnfGJpenxhcnBhfGluZm98bmFtZXxwcm98YWVyb3xjb29wfG11c2V1bXxbYS16QS1aXXsyfSkpKDpbMC05XXsxLDR9KT8oXFwvKCR8W1xcd1xcXFwuLFxcXFw/J1xcXFwrJmFtcDslXFxcXCQjPX5fXFwtXSspKSokL2kudGVzdCh2YWx1ZSkgPyAnY29tbW9uLndlYnNpdGUucGF0dGVybicgOiB1bmRlZmluZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvanMvdXRpbHMvdmFsaWRhdG9ycy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIEZvcm1hdHRlZEhUTUxNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2Zvcm1TdWJtaXNzaW9uQWN0aW9uJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZW1haWxDaGsgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdmFsaWRhdG9yc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0cy9CdXR0b24nO1xuXG5leHBvcnQgY2xhc3MgRW1haWxTdWJzY3JpYmVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGludGw6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgYWpheFN0YXR1czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBzdWJzY3JpYmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgZW1haWxJbnZhbGlkOiBudWxsXG4gICAgfVxuXG4gICAgc3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbC50cmltKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsSW52YWxpZCA9IGVtYWlsQ2hrKHRoaXMuc3RhdGUuZW1haWwudHJpbSgpKTtcbiAgICAgICAgICAgIGlmICghZW1haWxJbnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJzY3JpYmUodGhpcy5zdGF0ZS5lbWFpbC50cmltKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlbWFpbEludmFsaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uS2V5UHJlc3MgPSBlID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIHRoaXMuc3RhdGUuZW1haWwudHJpbSgpKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uRW1haWxDaGFuZ2VkID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1haWw6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpbnRsLCBhamF4U3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBzZXJ2ZXJSZXNwb25zZSA9ICcnO1xuICAgICAgICBpZiAoYWpheFN0YXR1cy5pc1NlcnZlckVycm9yKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGFqYXhTdGF0dXMuc2VydmVyU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlclJlc3BvbnNlID0gPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJjb21tb24uaW52YWxpZC5lbWFpbC5hZGRyZXNzXCIvPjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyUmVzcG9uc2UgPSA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YWpheFN0YXR1cy5zZXJ2ZXJNZXNzYWdlfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGFqYXhTdGF0dXMuaXNTdWJtaXRTdWNjZXNzKSB7XG4gICAgICAgICAgICBzZXJ2ZXJSZXNwb25zZSA9IDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiY29tbW9uLnRoYW5rc0ZvclN1YnNjcmliaW5nXCIvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLW9mZnNldC0xIGNvbC1tZC01IGNvbC1zbS02IGNvbC14cy0xMiB0eHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGI+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJjb21tb24uc3Vic2NyaWJlLnRpdGxlXCIvPjwvYj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHh0LXJpZ2h0XCI+PEZvcm1hdHRlZEhUTUxNZXNzYWdlIGlkPVwiY29tbW9uLnN1YnNjcmliZS5kZXNjXCIvPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC01IGNvbC1zbS02IGNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmliZS1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMub25FbWFpbENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGlucHV0LXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2NvbW1vbi5zdWJzY3JpYmUuZmllbGQnIH0pfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyB5ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXthamF4U3RhdHVzLmlzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbW1vbi5zdWJzY3JpYmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsaWRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmVtYWlsSW52YWxpZCAmJiBzZXJ2ZXJSZXNwb25zZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvcic6IGFqYXhTdGF0dXMuaXNTZXJ2ZXJFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJzogYWpheFN0YXR1cy5pc1N1Ym1pdFN1Y2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmVyUmVzcG9uc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZW1haWxJbnZhbGlkICYmIHRoaXMuc3RhdGUuZW1haWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj48Rm9ybWF0dGVkTWVzc2FnZSBpZD17dGhpcy5zdGF0ZS5lbWFpbEludmFsaWR9Lz48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWpheFN0YXR1czogc3RhdGUuYWpheFN0YXR1c1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzdWJzY3JpYmUgfSkoaW5qZWN0SW50bChFbWFpbFN1YnNjcmliZUNvbnRhaW5lcikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2pzL2NvbnRhaW5lcnMvZm9vdGVyL0VtYWlsU3Vic2NyaWJlQ29udGFpbmVyLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7XG4gICAgU0VSVkVSX0VSUk9SLCBTVUJNSVRfUEVORElORywgU1VCTUlUX0NPTVBMRVRFLCBSRVNFVF9TVEFUVVNcbn0gZnJvbSAnLi4vcmVkdWNlcnMvYWpheFN0YXR1c1JlZHVjZXJzJ1xuaW1wb3J0IHsgUkVTRVRfQ0FQVENIQSB9IGZyb20gXCIuLi9yZWR1Y2Vycy9yZWdpc3RlclJlZHVjZXJcIjtcbmltcG9ydCB7IHJlc2V0IH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmV4cG9ydCBjb25zdCBwb3N0Rm9ybURhdGEgPSAodXJsLCBmb3JtRGF0YSwgZm9ybU5hbWUsIG1ldGhvZCwgcmVzZXRGb3JtID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogU1VCTUlUX1BFTkRJTkcsXG4gICAgICAgICAgICAgICAgc2VuZEZvcm06IGZvcm1OYW1lXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ3B1dCcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQodXJsLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ3BhdGNoJykge1xuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKHVybCwgZm9ybURhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KHVybCwgZm9ybURhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogU1VCTUlUX0NPTVBMRVRFXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc2V0Rm9ybSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlc2V0KGZvcm1OYW1lKSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSRVNFVF9DQVBUQ0hBLFxuICAgICAgICAgICAgICAgICAgICByZXNldENhcHRjaGE6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRVNFVF9DQVBUQ0hBLFxuICAgICAgICAgICAgICAgIHJlc2V0Q2FwdGNoYTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogU0VSVkVSX0VSUk9SLFxuICAgICAgICAgICAgICAgIHNlcnZlclN0YXR1czogZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgIHNlcnZlck1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZXJ2ZXJFcnJvcnM6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmUgPSAoZW1haWwpID0+IHtcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogU1VCTUlUX1BFTkRJTkdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvcHVibGljL3N1YnNjcmliZScsIHsgZW1haWwgfSk7XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTVUJNSVRfQ09NUExFVEVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFNFUlZFUl9FUlJPUixcbiAgICAgICAgICAgICAgICBzZXJ2ZXJTdGF0dXM6IGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBzZXJ2ZXJNZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldEFqYXhTdGF0dXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogUkVTRVRfU1RBVFVTXG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9qcy9yZWR1eC9hY3Rpb25zL2Zvcm1TdWJtaXNzaW9uQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==