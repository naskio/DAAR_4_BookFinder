module.exports = function (req, res, next) {
    if (req.method === 'POST' && ['login/', 'logout/', 'change_password/',].some(sub => req.url.includes(sub))) {
        req.method = 'GET';
        req.query = req.body;
    }
    next()
};
