import axios from 'axios';
import utils from '../lib/utils';

axios.defaults.params = axios.defaults.params || {};

export default async function currencyHandler(req, res, next) {
  const ccy = utils.getCurrency(req, res);

  req.ccy = ccy;
  axios.defaults.params['ccy'] = ccy;

  // SET DATA INTO RESPONSE
  res.locals.ccy = ccy;

  next();
}
