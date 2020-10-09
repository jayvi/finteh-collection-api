const mongoose = require('mongoose')
const moment = require('moment');
const UserSchema = new mongoose.Schema({
  
    fname: {
        type: String,
        // required: [false, 'Add name pls'],
        trim: true,
        maxlength: [15, '15 chars reached for name']
    },
    firstname: {
        type: String,
        // required: [false, 'Add name pls'],
        trim: true,
        maxlength: [40, '40 chars reached for name']
    },
    lastname: {
        type: String,
        // required: [false, 'Add name pls'],
        trim: true,
        maxlength: [40, '40 chars reached for name']
    },
    
    lname: {
        type: String,
        // required: [false, 'Add name pls'],
        trim: true,
        maxlength: [25, '15 chars reached for name']
    },
    name: {
        type: String,
        // required: [false, 'Add name pls'],
        trim: true,
        maxlength: [50, '50 chars reached for name']
    },
    passwd : {
        type: String
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
        trim: true,
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
    extra : {
        type:String
    },
    custom : {
        type:String
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