import Ember from 'ember';
var ForgotValidator = Ember.Object.create({
    check: function (model) {
        var data = model.getProperties('email'),
            validationErrors = [];

        if (!validator.isEmail(data.email)) {
            validationErrors.push({
                message: '邮箱地址无效'
            });
        }

        return validationErrors;
    }
});

export default ForgotValidator;
