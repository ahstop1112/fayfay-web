import IntlMessageFormat from 'intl-messageformat';
import Voca from 'voca';

//format message with placeholder, translations['placeholder.testing'].format({'lang':'en-US'})
String.prototype.format = function (context) {
    const msg = new IntlMessageFormat(this);
    return msg.format(context);
};

String.prototype.truncate = function(length, end) {
    return Voca.truncate(this, length, end);
}
