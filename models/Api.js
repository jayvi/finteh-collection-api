const mongoose = require('mongoose')
const moment = require('moment');
const UserSchema = new mongoose.Schema({
  
    name: {
        type: String,
        // required: [false, 'Add name pls'],
        trim: true,
        maxlength: [50, '50 chars reached for name']
    },
    // lname: {
    //     type: String,
    //     // required: [false, 'Add name pls'],
    //     trim: true,
    //     // maxlength: [10, '50 chars reached for name']
    // },
    phone: {
        type: String,
        required: [false, 'Add phone pls'],
    },
    email: {
        type: String,
        required: [false, 'Add email pls'],
        trim: true   
    },
    address: {
        type: String,
        required: [false, 'Add addrs pls'],
    },
    zip: {
        type: String,
        required: [false, 'Add zip pls'],
    },
    city: {
        type: String,
        required: [false, 'Add city pls'],
    },
    country: {
        type: String,
        required: [false, 'Add country pls'],
    },

    domain: {
        type: String,
        trim: true        
    },
    ip: {
        type: String,       
    },
    browser: {
        type: String,       
    },    
    company: {
        type: String,       
        default: 'spudo'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('profiles', UserSchema);