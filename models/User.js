// import Schema build from mongoose NPM
const { Schema, model } = require('mongoose');

// create Schema for Users
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    // Validate e-mail placement with RegEx catcher
    validate: {
      validator: function (v) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v)
      },
      message: "Enter Valid E-mail to Proceed"
    },
    required: [true, 'Email Required']
  },
  // user thoughts reference thought model
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'thought'
  }],
  // user friends reference other users
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  {
    // virtuals allow mongoose to call certain properties without actually saving them to the mongoDB
    toJSON: {
      virtuals: true
    },
    id: false
  }
});

const User = model('User', userSchema );

module.exports = User;