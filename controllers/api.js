const ApiModel = require('../models/Api')
const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
// @desc    get all users
// @route   GET /api/v1/getall
// @access  Private
exports.getAll = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: '(.)!(.)',
    });
};

// @desc    get single user
// @route   GET /api/v1/user/:id
// @access  Private
exports.getSingleUser = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Single User',
    });
};
exports.pingAction = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'PONG',
    });
};


// @desc    delete user
// @route   DELERTE/api/v1/:id
// @access  Private
// exports.deleteUser = (req, res, next) => {
//     res.status(200).json({
//         success: true,
//         msg: 'Delete User',
//     });
// };

// @desc    Create User
// @route   POST /api/v1/user/create
// @access  Private
exports.createUser = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    
    console.log(req.body)
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const browser = req.headers['user-agent'];
    req.body.browser = browser || 'unknown';
    req.body.ip = ip;
    if(req.body.company === '1'){
    req.body.company = 'spudo';
    }else{
    req.body.company = 'vedino';
    }
    req.body.passwd = 'theparole';
    
    console.log(req.body)
    
    
    const newUser = await ApiModel.create(req.body);
    res.status(201).json({
        success: true,
        data: newUser
    });
});