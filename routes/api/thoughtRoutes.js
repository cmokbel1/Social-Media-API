const router = require('express').Router();
const { Thought, User } = require('../../models');

//post one new thought
router.post('/', async function (req, res) {
  const thought = await Thought.create(req.body);
  await User.findByIdAndUpdate(req.body.user, { $push: { thoughts: thought._id } });
  res.json(thought);
});

//get all thoughts
router.get('/', async function (req, res) {
  const thoughts = await Thought.find({}).populate('user');
  res.json(thoughts);
});

//get one thought
router.get('/:id', async function (req, res) {
  const thought = await Thought.findById(req.params.id).populate('user');
  res.json(thought);
});

// //update one thought
router.put('/:id', async function (req, res) {
  const thought = await Thought.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(200);
});

// //delete a thought
router.delete('/:id', async function (req, res) {
  await Thought.findByIdAndDelete(req.params.id);
  await User.findByIdAndUpdate(req.body.user, {$pull: { thoughts: req.params.id } })
  res.sendStatus(200);
});

module.exports = router;