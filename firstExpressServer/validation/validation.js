var validator = require('validator');

var validationFn = {

    validateRegister: function (req, res, next) {
        var username = req.body.username;
        var userid = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        var regex = /[A-z\s',]/;
        var regex2 = /[A-z.\d@]/;
        var regex3 = /(?=.*[A-z])(?=.*[0-9])[a-zA-Z0-9]{8,}/;
        //Validation code to check register form input values
        //return response with status 500 if validation fails

        if (!regex.test(username)) {
            return res.status(500).json({ error: 'Invalid characters in username' });
        }

        // Check if email is valid
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        // Check if password is at least 6 characters long
        if (!validator.isLength(password, { min: 6 })) {
            return res.status(400).json({ error: 'Password must be at least 6 characters long' });
        }

    },

    validateUserid: function (req, res, next) {
        //Validation code to check userid from req.params
        //return response with status 500 if validation fails



    },
    sanitizeResult: function (result) {

        //Sanitize each record’s values from the database result        

    }


}

module.exports = validationFn;
