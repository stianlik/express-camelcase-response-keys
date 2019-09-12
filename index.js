const camelcaseKeys = require('camelcase-keys');

module.exports = options => (req, res, next) => {
    const performSend = res.send;
    res.send = body => {
        if ((typeof body === 'object') && (body != null)) {
            body = camelcaseKeys(body, options);
        }
        performSend.call(res, body);
    }
    next();
};
