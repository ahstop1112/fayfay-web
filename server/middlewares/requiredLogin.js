export default async function requiredLogin(req, res, next) {
    if (!req.session || !req.session.userToken) {
        if (req.xhr || (req.headers.accept && req.headers.accept.indexOf('json') > -1)) {
            // AJAX REQUEST
            res.status(401).json({ message: 'UNAUTHORIZED' });

            return;
        }

        res.redirect(`${req.langUrl}/login?redirectUrl=${encodeURIComponent(req.originalUrl)}`);
    }
    else {
        next();
    }
}
