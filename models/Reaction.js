// import Schema build from mongoose NPM
const { Schema, model } = require('mongoose');

//Schema built for reactions
const reactionSchema = new Schema({
  reactions: {
    type: String,
    required: true,
    maxlength: 300
  },
  // reactions reference specific User
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // reactions reference specific thought
  thought: {
    type: Schema.Types.ObjectId,
    ref: 'Thought',
    required: true
  }
  // time stamps allow reactions to be stamped with date and time / may need conversion to local time
}, { timestamps: true });

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;