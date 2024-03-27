const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt.js')



exports.register = async (userData) => {
    const userExistCheck = await User.findOne({ email: userData.email});
    if (userExistCheck) {
        throw new Error('This email address is already used.');
    }
    const user = await User.create(userData);
    const result = await getAuthResult(user);
    return result;
}



exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });


    if (!user) {
        throw new Error('Invalid email or password.');
    }
    const isValid = await bcrypt.compare(password, user.password);
        console.log(password);

    if (!isValid) {
        throw new Error('Invalid email or password.');
    };

    const result = await getAuthResult(user);



    return result;









}
exports.profileInfo = async (id) => {
    const user = await User.findById(id)
    return user
}


async function getAuthResult(user) {

    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = await jwt.sign(payload, 'SECRETSSERCRET', { expiresIn: '2d' });/////tuka trea refresh tokeni shtot SPA
   
    const result = {
        _id: user._id,
        email: user.email,
        accessToken: token,
    };

    return result;

}