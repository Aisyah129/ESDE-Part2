const user = require('../services/userService');
const auth = require('../services/authService');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const jwt = require('jsonwebtoken');

exports.processLogin = async (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password;
    await auth.authenticate(email)
        .then((results) => {
            if (results.length == 1) {
                if ((password == null) || (results[0] == null)) {
                    return res.status(500).json({ message: 'login failed' });
                }
                if (bcrypt.compareSync(password, results[0].user_password) == true) {
                    let data = {
                        user_id: results[0].user_id,
                        role_name: results[0].role_name,

                        token: jwt.sign(
                            {
                                id: results[0].user_id
                            },
                            config.JWTKey,
                            {
                                expiresIn: 60 * 35
                            }
                        )

                    }; //End of data variable setup

                    return res.status(200).json(data);
                } else {
                    // return res.status(500).json({ message: 'Login has failed.' });
                    return res.status(500).json({ statusMessage: 'Login has failed.' });
                } //End of passowrd comparison with the retrieved decoded password.
            } //End of checking if there are returned SQL results
        })
        .catch((error) => {
            let message = 'Credentials are not valid.';
            return res.status(500).json({ message: message });
        })
};

exports.processRegister = (req, res, next) => {
    console.log('processRegister running.');
    let fullName = req.body.fullName;
    let email = req.body.email;
    let password = req.body.password;


    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            console.log('Error on hashing password');
            return res.status(500).json({ statusMessage: 'Unable to complete registration' });
        } else {

            results = user.createUser(fullName, email, hash, function (results, error) {
                if (results != null) {
                    console.log(results);
                    return res.status(200).json({ statusMessage: 'Completed registration.' });
                }
                if (error) {
                    console.log('processRegister method : callback error block section is running.');
                    console.log(error, '==================================================================');
                    return res.status(500).json({ statusMessage: 'Unable to complete registration' });
                }
            });//End of anonymous callback function


        }
    });


}; // End of processRegister