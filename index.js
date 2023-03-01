"use strict";

const pincodeData = require('./db/pincode_db.json');

function isNumeric(num) {
    return !isNaN(num);
}

module.exports = {
    search: function search(pincode) {
        if (isNumeric(pincode)) {
            if (typeof pincode === 'string') {
                return pincodeData.filter(function(e) {
                    return e.pincode === pincode;
                });
            } else if (typeof pincode === 'number') {
                return pincodeData.filter(function(e) {
                    return e.pincode === pincode;
                });
            }
        } else {
            var regex = RegExp(pincode, 'i');
            return pincodeData.filter(function(e) {
                return e.office.match(regex);
            });
        }
    }
}