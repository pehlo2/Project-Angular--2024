const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email alredy exist']
    },
    password: {
        type: String,
        required: true
    },
    orders: [{
        type: mongoose.Types.ObjectId,
        ref: 'Orders'
    }

    ]
});

userSchema.pre('save', async function () {
    if (!this.isNew) {
        return
    }
    const hash = await bcrypt.hash(this.password, 10);
    
    this.password = hash;

});

const User = mongoose.model('User', userSchema);
module.exports = User;