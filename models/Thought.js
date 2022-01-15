// import Schema build from mongoose NPM
const { Schema, model } = require('mongoose');

//Schema build for Thoughts
const thoughtSchema = new Schema({
  thoughts: {
    type: String,
    required: true,
    maxlength: 300
  },
  //Thoughts reference User from User model
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  //thoughts reference reactions from the reaction model
  reactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Reaction'
  }],
  {
    // virtuals allow mongoose to call certain properties without actually saving them to the mongoDB
    toJSON {
      virtuals: true
    },
    id: false
  }
// time stamps allow thoughts to be stamped with date and time / may need conversion to local time
}, { timestamps: true });

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
});

const Thought = model('Thought', userSchema);

module.exports = Thought;