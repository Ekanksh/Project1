const mongoose = require('mongoose');

var LoginVendor = new mongoose.Schema( {
    userName: {
        type: String,
        required: "this field is required"
    },
   
    password: {
        type: String,
        required: "this field is required"
    }
});

var userModel = mongoose.model('LoginVendor', LoginVendor);
module.exports = userModel;