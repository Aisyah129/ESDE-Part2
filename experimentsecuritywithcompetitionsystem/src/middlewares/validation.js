const config = require('../config/config');
const validator = require('validator');

    module.exports.validateRegister = (req, res, next) => {

        var username = req.body.fullName;
        var email = req.body.email;
        var password = req.body.password;

        rePassword = new RegExp(`^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}.*$`);
    
        if (validator.isAlphanumeric(username) && rePassword.test(password) && validator.isEmail(email) && password.length < 16) {
            next();
        } else {
            console.log("Username: " + Boolean(validator.isAlphanumeric(username)) + " Password(Regex): " + Boolean( rePassword.test(password)) + "Email: " + Boolean(validator.isEmail(email)))
            console.log("Username/Email/Password Invalid");
            res.status(500).json({ message: 'Username/Email/Password Invalid' });
        }
    }

    module.exports.validateDesign = (req, res, next) => {

        var designTitle = req.body.designTitle;
        var designDescription = req.body.designDescription;
    
        if (validator.isAlphanumeric(validator.blacklist(designDescription, ' ')) &&validator.isAlphanumeric(validator.blacklist(designTitle, ' '))){
            console.log("validation worked")
            next();
           
        } else {
            console.log("Title/ DescriptionInvalid");
            res.status(500).json({ message: 'Title/ Description Invalid' });
        }
    }

  

   
