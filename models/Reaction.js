// import Schema build from mongoose NPM
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  reactions: {
    type: String,
    required: true,
    maxlength: 300
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  thought: {
    type: Schema.Types.ObjectId,
    ref: 'Thought',
    required: true
  }
} {timestamps : true});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;