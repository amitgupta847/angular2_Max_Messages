var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

//to update the user messages relation on deletion of
//message/ its kind of referential integrity.
//below code means whenever remove operation happens on
//message, remove the message id references from User schema. 
schema.post('remove', function (message) {
    User.findById(message.user, function (err, user) {
        user.messages.pull(message);
        user.save();
    });
});

module.exports = mongoose.model('Message', schema);