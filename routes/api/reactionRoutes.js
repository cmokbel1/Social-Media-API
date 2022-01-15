const router = require('express').Router();
const { Reaction, Thought } = require('../../models');

//post one new Reaction
router.post('/', async function (req, res) {
  const reaction = await Reaction.create(req.body);
  await Thought.findByIdAndUpdate(req.body.thought, { $push: { reactions: reaction._id } });
  res.json(reaction);
});


// //delete a Reaction
router.delete('/:id', async function (req, res) {
  await Reaction.findByIdAndDelete(req.params.id);
  await Thought.findByIdAndUpdate(req.body.thought, { $pull: { reactions: req.params.id } })
  res.sendStatus(200);
});

module.exports = router;