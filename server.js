const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
var colors = require('colors');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
var xss = require('xss-clean');
var hpp = require('hpp');
const rateLimit = require('express-rate-limit');
var cors = require('cors');
const errorHandler = require('./middleware/error');

//route files
const routes = require('./routes/routes');

//load env vars
dotenv.config({
    path: './config/config.env',
});

//connect db
connectDB();

const app = express();

//Body parser
app.use(express.json());

//Sanitize Data
app.use(mongoSanitize());

//Security Headers
app.use(helmet());

//XSS Cleaner
app.use(xss());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

// prevent http param polusion
app.use(hpp());

//Enable CORS
app.use(cors());

//Dev logging middlewhere
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
//Mount routers
app.use('/api/v1/', routes);

app.use(errorHandler);
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

//Handle unhandle promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error : ${err.message}`);
    //kill the server
    server.close(() => {
        process.exit(1);
    });
});