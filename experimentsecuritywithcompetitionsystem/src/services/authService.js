const logger = require('../middlewares/logger');
config = require('../config/config');
const pool = require('../config/database');
var loginerr = 1;

module.exports.authenticate = (email, callback) => {
    return new Promise((resolve, reject) => {

        pool.getConnection((err, connection) => {
            if (err) {
                logger.error('Database connection error ' + err);
                if (err) return reject(err);

            } else {
                try {
                    connection.query(`SELECT user.user_id, fullname, email, user_password, role_name, user.role_id  
                   FROM user INNER JOIN role ON user.role_id=role.role_id AND email=?`, [email], (err, rows) => {

                        if (err) {
                            if (err) {
                                logger.error('Error: ' + err)
                                return reject(err);
                            }

                        } else {
                            if (rows.length == 1) {
                                console.log(rows);
                                logger.info('User ' + email + ' has tried login!')
                                return resolve(rows);

                            } else {
                                logger.warn(email + ' login has failed');
                                loginerr = loginerr + 1;
                                if (loginerr > 5) {
                                    logger.warn('Failed login attempt has exceeded 5')
                                }
                                return reject('Login has failed');
                            }
                        }
                        connection.release();

                    });
                } catch (error) {
                    logger.error('Error: ' + error);
                    return reject(error);
                }
            }
        }); //End of getConnection

    });
} //End of authenticate