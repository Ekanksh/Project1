const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const LoginVendor = require('../models/loginVendor.model');

router.post('', (req, res) => {
    var { userName, password } = req.body;
            var newUser = new LoginVendor({ userName, password });
            newUser.save((err, doc) => {
                if (err) { console.log("Error in data storage"); }
                else {
                    let payload = { subject: doc._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.json({ message: "Registration Succesfull", status: 200, token });
                }
            });
        
});

module.exports = router;