//const Validator = require('validator');
const isEmpty1 = require('./is-empty');

module.exports = function validateLoginInput(data:any) {
    let errors = {};
    data.email = !isEmpty1(data.email) ? data.email : '';
    data.password = !isEmpty1(data.password) ? data.password : '';
    //console.log('validateLoginInput=',data.password)

    // if(!Validator.isEmail(data.email)) {
    //     errors.email = 'Email is invalid';
    // }

    // if(Validator.isEmpty(data.email)) {
    //     errors.email = 'Email is required';
    // }

    // if(!Validator.isLength(data.password, {min: 6, max: 30})) {
    //     errors.password = 'Password must have 6 chars';
    // }

    // if(Validator.isEmpty(data.password)) {
    //     errors.password = 'Password is required';
    // }

    return {
        errors,
        isValid: isEmpty1(errors)
    }
}