const jwt = require('../lib/jwt.js')

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth-cookie']


    // const token = req.headers.cookie
    if (token) {

        try {
          
            const decodedToken = await jwt.verify(token, 'SECRETSSERCRET');
            req.user = decodedToken;
            next();
        } catch (err) {
            res.status(404).json({
                message: 'You are not authorized',
            })
        }

    } else {

        next();
    }


}