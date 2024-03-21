const router = require('express').Router();
const userManager = require('../managers/userManager.js')
const authCookieName = 'auth-cookie'
router.post('/register', async (req, res) => {
    try {
        const result = await userManager.register(req.body)
        res.cookie(authCookieName, result.accessToken, { httpOnly: true, sameSite: 'none', secure: true })
        res.json(result)
    } catch (err) {

        res.status(400).json({
            message: 'Some Error'
        })
    };
});

router.post('/login', async (req, res) => {


    try {
        const result = await userManager.login(req.body);

        res.cookie(authCookieName, result.accessToken, { httpOnly: true,})
        res.json(result)

    } catch (err) {

        res.status(400).json({
            message: err.message
        })

    }


});


router.post('/logout', (req, res) => {
    res.clearCookie('auth-cookie')
    res.end()
});

router.get('/profile', async (req, res) => {
    try {
        const id = req.user?._id
       
        let user = await userManager.profileInfo(id)
        res.json(user)

    } catch (err) {
      
        res.status(400).json({
            message: err.message,
            
        })

    }

});
module.exports = router;
