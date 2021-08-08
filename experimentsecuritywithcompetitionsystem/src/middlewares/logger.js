//Add the Winston module with a require() function.
const winston = require('winston');

// Logger configuration
const logConfiguration = {
    //A transport is where the log is saved
    'transports': [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'logs/securitywithcompetitionsystem.log'
        })
    ],

    //To log in JSON format
    format: winston.format.combine(
        winston.format.label({
            label: `Label🏷️`
        }),
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    )
};

//Creating a logger and pass it to the Winston configuration object.
const logger = winston.createLogger(logConfiguration);

// Log a message Test
//logger.log({
    // Message to be logged
        //message: 'Hello, Winston!',
    
    // Level of the message logging
        //level: 'info'
//});

// Log a message Test
//logger.warn('Hello, Winston!Test');


// exports
module.exports = logger;