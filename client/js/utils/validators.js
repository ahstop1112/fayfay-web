export const required = value =>
    (Array.isArray(value) && value.length < 1) || !value ? 'input.emptyField' : undefined;

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'input.invalidEmail' : undefined;

export const scrollToInvalid = () => {
    const errorEl = document.querySelector('.error');
    if (errorEl && window.scrollTo) {
        const top = window.pageYOffset + (errorEl.getBoundingClientRect().top - 200);
        scrollToTop(top, 500);
    }
};

export const scrollToTop = (top, scrollDuration) => {
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollStep = -(scrollY - top) / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY > top) {
                window.scrollBy(0, scrollStep);
            } else clearInterval(scrollInterval);
        }, 15);
};

export const requiredChk = value => (value ? undefined : 'common.required');

export const numberChk = value =>
    value && isNaN(Number(value)) ? 'common.must.be.a.number' : undefined;

const nullValue = init => value => (value === init ? 'common.required' : undefined);
export const nullValueChk = nullValue('-1');

export const minValueChk = min => value =>
    value && value < min ? `common.must.be.at.least ${min}` : undefined;

export const maxValueChk = max => value =>
    value && value > max ? `common.must.be.less.than ${max}` : undefined;

export const maxLenChk = max => value =>
    value && value.length > max ? `common.must.be.or.less ${max}` : undefined;

export const minLenChk = min => value =>
    value && value.length < min ? `common.must.be.or.more ${min}` : undefined;

export const emailChk = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'common.invalid.email.address' : undefined;

export const passwordChk = value =>
    value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};’:”\\|,.<>\/?]).{8,20}$/.test(value) ? `common.invalid.password` : undefined;

export const validateAccount = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'common.required'
    }

    if (!values.passportCountryId) {
        errors.passportCountryId = 'common.required'
    }

    return errors
};

export const passwordsMatch = (value, allValues) =>
    value !== allValues.password ? 'register.password.not.match' : undefined;

export const trim = (value) => value.replace(/^\s+|\s+$/g, "");

export const website = (value) => value &&
!/^(http|https):\/\/((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([\w\-]+\.)*[\w\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]{1,4})?(\/($|[\w\\.,\\?'\\+&amp;%\\$#=~_\-]+))*$/i.test(value) ? 'common.website.pattern' : undefined;
